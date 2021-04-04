import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ElevatorModel } from '../elevator.model';
import { ElevatorsService } from '../elevators.service';

@Component({
  selector: 'app-elevator-list',
  templateUrl: './elevator-list.component.html',
  styleUrls: ['./elevator-list.component.css']
})
export class ElevatorListComponent implements OnInit {
  elevators: ElevatorModel[] = [];
  isLoading = false;
  displayedColumns: string[] = ['id', 'type', 'controlPanel', 'manufacturer', 'doors', 'maxWeight', 'personCapacity', 'velocity'];
  private elevatorSub: Subscription;

  constructor(public elevatorsService: ElevatorsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.elevatorsService.getElevators();
    this.elevatorSub = this.elevatorsService.getElevetorsUpdateListener()
      .subscribe(elevators => {
        this.elevators = elevators.elevators;
        this.isLoading = false;
      })
  }

}
