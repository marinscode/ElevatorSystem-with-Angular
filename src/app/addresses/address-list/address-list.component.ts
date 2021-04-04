import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AddressModel } from '../address.model';
import { AddressesServices } from '../addresses.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses: AddressModel[] = [];
  displayedColumns: string[] = ['id', 'regnum', 'city', 'address', 'floors', 'elevators'];
  isLoading = false;
  private addressesSub: Subscription;

  constructor(public addressesService: AddressesServices) { }

  ngOnInit() {
    this.isLoading = true;
    this.addressesService.getAddresses();
    this.addressesSub = this.addressesService.getAddressUpdateListener().subscribe(data => {
      this.addresses = data.addresses;
      this.isLoading = false;
    });
  }

}
