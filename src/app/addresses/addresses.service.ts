import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { ElevatorModel } from "../elevator/elevator.model";

import { AddressModel } from "./address.model";

@Injectable({ providedIn: 'root' })
export class AddressesServices {
    private addresses: AddressModel[] = [];
    private addressesUpdated = new Subject<{ addresses: AddressModel[] }>();

    constructor(private http: HttpClient, private router: Router) { }

    getAddresses() {
        this.http.get<AddressModel[]>('http://localhost:3000/api/address')
            .subscribe(addresses => {
                this.addresses = addresses;
                this.addressesUpdated.next({ addresses: [...this.addresses] });
            });
    }

    getAddressUpdateListener() {
        return this.addressesUpdated.asObservable();
    }

    addAddress(addressData) {
        const address: AddressModel = {
            regnum: addressData.registerNumber,
            city: addressData.city,
            address: addressData.address,
            floors: addressData.floors,
            typeElevator: addressData.typeElevator,
            numberElevators: addressData.elevators,
            gfloor: addressData.isGroundFloor,
            basement: addressData.basement,
            isActive: addressData.isActive
        }
        this.http.post('http://localhost:3000/api/address/add', addressData)
            .subscribe(resData => {
                console.log(resData);
                this.router.navigate(['/']);
            });

    }

}