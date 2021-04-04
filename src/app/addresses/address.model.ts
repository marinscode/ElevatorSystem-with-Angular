import { ElevatorModel } from "../elevator/elevator.model";

export interface AddressModel {
    regnum: String,
    city: string,
    address: String,
    floors: Number,
    numberElevators: Number,
    typeElevator: ElevatorModel
    gfloor: Boolean,
    basement: Boolean,
    isActive: Boolean
}