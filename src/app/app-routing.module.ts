import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddressCreateComponent } from "./addresses/address-create/address-create.component";
import { AddressListComponent } from "./addresses/address-list/address-list.component";
import { ElevatorCreateComponent } from "./elevator/elevator-create/elevator-create.component";
import { ElevatorListComponent } from "./elevator/elevator-list/elevator-list.component";

const routes: Routes = [
    { path: '', component: AddressListComponent },
    { path: 'address/add', component: AddressCreateComponent },
    { path: 'elevator', component: ElevatorListComponent},
    { path: 'elevator/add', component: ElevatorCreateComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }