const express = require('express')
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
    res.json(db.seats.find(element => element.id === parseInt(req.params.id)));
}); 

router.route('/seats').post((req, res) => {
    const { day, seat, client, email } = req.body;
    const newSeats = {id: uuidv4(), day: day, seat: seat, client: client, email: email};
    
    if (db.seats.some(item =>(item.day === day && item.seat ===seat ))){
        res.status(404).json({ message: 'The slot is already taken...'})
      } else {
        db.seats.push(newSeats);
        res.send( { message: 'OK' } );
        req.io.emit('seatsUpdated', db.seats)
      }
});

router.route('/seats/:id').put((req, res) => {
    const { day, seat, client, email } = req.body;
    const changedElement = ({ id: req.params.id, day: day, seat: seat, client: client, email: email }); 

    db.seats[db.seats.indexOf(db.seats.find(element => element.id === parseInt(req.params.id)))] = changedElement;

    res.send( { message: 'OK' } );
});

router.route('/seats/:id').delete((req, res) => {
    const seatsById = (req) => (
        db.seats.find(element => element.id === parseInt(req.params.id)));
    
    db.seats.splice(db.seats.indexOf(seatsById(req)), 1);
    
    res.send( { message: 'OK' } );
  });

module.exports = router;