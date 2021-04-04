const express = require('express');
const router = express.Router();

const Address = require('../models/address');
const Elevator = require('../models/elevators');

router.get('/', (req, res) => {
	// aggregate data from 2 collections for dashboard table
	Address.aggregate([{$lookup: { 
		from: 'elevators',
		localField: "typeElevator.typeId",
        foreignField: "_id",
        as: "elevator" }}]).exec((err, results)=> {
			if(err) throw err;
			res.render('addresses', {results});
	});
});

module.exports = router;