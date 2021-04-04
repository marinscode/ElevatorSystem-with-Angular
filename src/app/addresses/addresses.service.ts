import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { AddressModel } from "./address.model";

@Injectable({ providedIn: 'root'})
export class AddressesServices {
    private addresses: AddressModel[] = [];
    private addressesUpdated = new Subject<{ addresses: AddressModel[]}>();

    constructor(private http: HttpClient ) {}

    getAddresses() {
        this.http.get<AddressModel[]>('http://localhost:3000/api/address')
        .subscribe(addresses => {
            this.addresses = addresses;
            this.addressesUpdated.next({addresses: [...this.addresses]});
        });
    }

    getAddressUpdateListener() {
        return this.addressesUpdated.asObservable();
    }

}