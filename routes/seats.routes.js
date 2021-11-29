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
    
    db.seats.push(newSeats);
    
    res.send( { message: 'OK' } );
});

router.route('/seats/:id').put((req, res) => {
    const { day, seat, client, email } = req.body;
    const changedElement = ({ id: req.params.id, day: day, seat: seat, client: client, email: email }); 
    
    db.seats[db.seats.indexOf(db.seats.find(element => element.id === parseInt(req.params.id)))] = changedElement;
    
    res.send( { message: 'OK' } );
});

/*
router.route('/seats/:id').put((req, res) => {
    const element = db.seats.filter(
      (element) => element.id === parseInt(req.params.id)
    );
    const index = db.seats.indexOf(element);
    const testimonial = {
      id: req.params.id,
      author: req.body.author,
      text: req.body.text,
    };
    db.seats.splice(index, 1, testimonial);

    return res.json({ message: 'OK' });
});
*/

router.route('/seats/:id').delete((req, res) => {
    const seatsById = (req) => (
        db.seats.find(element => element.id === parseInt(req.params.id)));
    
    db.seats.splice(db.seats.indexOf(seatsById(req)), 1);
    
    res.send( { message: 'OK' } );
  });

module.exports = router;