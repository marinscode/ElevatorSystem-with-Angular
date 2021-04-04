import { Component, OnInit } from '@angular/core';
import { ElevatorModel } from 'src/app/elevator/elevator.model';
import { ElevatorsService } from 'src/app/elevator/elevators.service';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {
  elevators: ElevatorModel[] = [];

  constructor(public elevatorServices: ElevatorsService) { }

  ngOnInit(): void {
    this.elevatorServices.getElevators();
    this.elevatorServices.getElevetorsUpdateListener()
      .subscribe(elevators => {
        this.elevators = elevators.elevators;
      });
  }

}
