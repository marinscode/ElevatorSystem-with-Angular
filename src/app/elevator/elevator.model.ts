export interface ElevatorModel {
    type: String,
	controlPanel: String,
	controller: String,
	manufacturer: String,
	schemeType: [{
		name: String,
		description: String
	}],
	doors: Number,
	maxWeight: Number,
	personCapacity: Number,
	velocity: Number
}