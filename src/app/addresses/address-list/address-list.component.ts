import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['id', 'regnum', 'city', 'address', 'floors', 'elevators', 'typeElevator', 'maxWeight', 'velocity', 'gfloor', 'basement' ];
  isLoading = false;
  private addressesSub: Subscription;
  dataSource = new MatTableDataSource(this.addresses);

  constructor(public addressesService: AddressesServices) { }

  ngOnInit() {
    this.isLoading = true;
    this.addressesService.getAddresses();
    this.addressesSub = this.addressesService.getAddressUpdateListener().subscribe(data => {
      this.addresses = data.addresses;
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(this.addresses);
      console.log(this.addresses);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
