const express = require('express')
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
    res.json(db.concerts.find(element => element.id === parseInt(req.params.id)));
}); 

router.route('/concerts').post((req, res) => {
    const { performer, genre, price, day, image } = req.body;
    const newConcerts = {id: uuidv4(), performer: performer, genre: genre, price: price, day: day, image: image};
    
    db.concerts.push(newConcerts);
    
    res.send( { message: 'OK' } );
});

router.route('/concerts/:id').put((req, res) => {
    const { performer, genre, price, day, image } = req.body;
    const changedElement = ({ id: req.params.id, performer: performer, genre: genre, price: price, day: day, image: image }); 
    
    db.concerts[db.concerts.indexOf(db.concerts.find(element => element.id === parseInt(req.params.id)))] = changedElement;
    
    res.send( { message: 'OK' } );
});


router.route('/concerts/:id').delete((req, res) => {
    const concertById = (req) => (
        db.concerts.find(element => element.id === parseInt(req.params.id)));
    
    db.concerts.splice(db.concerts.indexOf(concertById(req)), 1);
    
    res.send( { message: 'OK' } );
  });

module.exports = router;