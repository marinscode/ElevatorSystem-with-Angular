const express = require('express');
const router = express.Router();

const Address = require('../models/address');
const Elevator = require('../models/elevators');

router.get('/', (req, res) => {
    // aggregate data from 2 collections for dashboard table
    Address.aggregate([{
        $lookup: {
            from: 'elevators',
            localField: "typeElevator.typeId",
            foreignField: "_id",
            as: "elevator"
        }
    }])
    .then(results => {
        res.status(200).json(results);
    });
});

module.exports = router;