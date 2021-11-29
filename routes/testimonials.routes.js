const express = require('express')
const router = express.Router();
const db = require('../db');
const { v4: uuidv4 } = require('uuid');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
});

router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials.find(element => element.id === parseInt(req.params.id)));
}); 

router.route('/testimonials/random').get((req, res) => {
    res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
});


router.route('/testimonials').post((req, res) => {
    const { author, text } = req.body;
    const newTestimonials = {id: uuidv4(), author: author, text: text};
    
    db.testimonials.push(newTestimonials);
    
    res.send( { message: 'OK' } );
});

router.route('/testimonials/:id').put((req, res) => {
    const { author, text } = req.body;
    const changedElement = ({ id: req.params.id, author: author, text: text }); 
    
    db.testimonials[db.testimonials.indexOf(db.testimonials.find(element => element.id === parseInt(req.params.id)))] = changedElement;
    
    res.json( { message: 'OK' } );
});

/*
router.route('/testimonials/:id').put((req, res) => {
    const element = db.testimonials.filter(
      (element) => element.id === parseInt(req.params.id)
    );
    const index = db.testimonials.indexOf(element);
    const testimonial = {
      id: req.params.id,
      author: req.body.author,
      text: req.body.text,
    };
    db.testimonials.splice(index, 1, testimonial);

    return res.json({ message: 'OK' });
});
*/

router.route('/testimonials/:id').delete((req, res) => {
    const testimonialById = (req) => (
        db.testimonials.find(element => element.id === parseInt(req.params.id)));
    
    db.testimonials.splice(db.testimonials.indexOf(testimonialById(req)), 1);
    
    res.send( { message: 'OK' } );
  });

module.exports = router;