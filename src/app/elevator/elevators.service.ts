import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { ElevatorModel } from "./elevator.model";

@Injectable({ providedIn: 'root'})
export class ElevatorsService {
    private elevators: ElevatorModel[] = [];
    private elevatorsUpdated = new Subject<{ elevators: ElevatorModel[]}>();

    constructor(private http: HttpClient ) {}

    getElevators() {
        this.http.get<ElevatorModel[]>('http://localhost:3000/api/elevator')
        .subscribe(elevators => {
            this.elevators = elevators;
            this.elevatorsUpdated.next({elevators: [...this.elevators]});
        })
    }

    getElevetorsUpdateListener() {
        return this.elevatorsUpdated.asObservable();
    }

}