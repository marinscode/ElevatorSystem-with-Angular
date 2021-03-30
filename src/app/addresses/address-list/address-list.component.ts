import { Component, OnInit } from '@angular/core';

import { Address } from '../address.model';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses: Address[] = [{
    id: '1',
    regnum: '884m3',
    city: 'Livingston',
    address: '40 Craigswood',
    floors: '6',
    numberElevators: 1,
    gfloor: false,
    basement: false,
    isActive: false
  },
  {
    id: '2',
    regnum: '344s',
    city: 'Livingston',
    address: '100 Craigswood',
    floors: '5',
    numberElevators: 3,
    gfloor: false,
    basement: false,
    isActive: false
  }];
  displayedColumns: string[] = ['id', 'regnum', 'city', 'address', 'floors', 'elevators'];

  constructor() { }

  ngOnInit(): void {
  }

}
