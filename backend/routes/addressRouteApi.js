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

router.post('/add', (req, res) => {
    Elevator.find({ _id: req.body.typeElevator }, (err, elevator) => {
        if (err) throw err;
        const newAddress = new Address({
            regnum: req.body.registerNumber,
            city: req.body.city,
            address: req.body.address,
            floors: req.body.floors,
            numberElevators: req.body.elevators,
            typeElevator: {
                text: elevator[0].type,
                typeId: elevator[0]._id
            },
            gfloor: req.body.isGroundFloor,
            basement: req.body.basement,
            isActive: req.body.isActive
        });
        newAddress.save().then(createdAddress => {
            res.status(201).json({
                message: 'Address added successfully',
                address: createdAddress
            })
        });
    });
});

module.exports = router;