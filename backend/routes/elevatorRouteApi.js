const express = require('express');
const router = express.Router();
const Elevator = require('../models/elevators');

router.get('/', (req, res) => {
	Elevator.find()
    .then(results=> {
		res.status(200).json(results);
	});
});

module.exports = router;