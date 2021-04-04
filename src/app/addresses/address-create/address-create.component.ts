import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElevatorModel } from 'src/app/elevator/elevator.model';
import { ElevatorsService } from 'src/app/elevator/elevators.service';
import { AddressesServices } from '../addresses.service';

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.css']
})
export class AddressCreateComponent implements OnInit {
  elevators: ElevatorModel[] = [];
  form: FormGroup;
  isLoading = false;

  constructor(public elevatorServices: ElevatorsService, public addressServices: AddressesServices) { }

  ngOnInit(): void {
    this.elevatorServices.getElevators();
    this.elevatorServices.getElevetorsUpdateListener()
      .subscribe(elevators => {
        this.elevators = elevators.elevators;
      });
    this.form = new FormGroup({
      'registerNumber': new FormControl(null, { validators: [Validators.required] }),
      'city': new FormControl(null, { validators: [Validators.required] }),
      'address': new FormControl(null, { validators: [Validators.required] }),
      'floors': new FormControl(null, { validators: [Validators.required] }),
      'elevators': new FormControl(null, { validators: [Validators.required] }),
      'typeElevator': new FormControl(null, { validators: [Validators.required] }),
      'isGroundFloor': new FormControl(false, { validators: [Validators.required] }),
      'basement': new FormControl(false, { validators: [Validators.required] }),
      'isActive': new FormControl(false, { validators: [Validators.required] }),
    });
  }

  onSaveAddress() {
    if(this.form.invalid){
      return;
    }
    this.isLoading = true;
    this.addressServices.addAddress(this.form.value);
    this.form.reset();
  }

}
