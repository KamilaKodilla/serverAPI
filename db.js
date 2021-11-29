const express = require('express');
const router = express.Router();

const db = {
    testimonials: [
        { id: 1, author: 'John Doe', text: 'This company is worth every coim!'},
        { id: 2, author: 'Amanda Doe', text: 'They really know how to make yoy happy.'},
        { id: 3, author: 'Anna Nowak', text: 'This company is worth every coim!'},
        { id: 4, author: 'Jan Nowak', text: 'They really know how to make yoy happy.'},
        { id: 5, author: 'John Kowalski', text: 'This company is worth every coim!'},
        { id: 6, author: 'Amanda Kowalska', text: 'They really know how to make yoy happy.'},
        { id: 7, author: 'Maria Nowakowska', text: 'This company is worth every coim!'},
        { id: 8, author: 'Marian Nowakowski', text: 'They really know how to make yoy happy.'},
        { id: 9, author: 'Joanna Kowalczyk', text: 'This company is worth every coim!'},
        { id: 10, author: 'Adrian Kowalczyk', text: 'They really know how to make yoy happy.'},
    ],

    concerts: [
        { id: 1, performer: 'John Doe', genre: 'Rock', price: 25, day: 1, image: '/img/uploads/1fsd324fsdg.jpg' },
        { id: 2, performer: 'Rebekah Parker', genre: 'R&B', price: 25, day: 1, image: '/img/uploads/2f342s4fsdg.jpg' },
        { id: 3, performer: 'Maybell Haley', genre: 'Pop', price: 40, day: 1, image: '/img/uploads/hdfh42sd213.jpg' },
    ],

    seats: [
        { id: 1, day: 1, seat: 3, client: 'Amanda Doe', email: 'amandadoe@example.com' },
        { id: 2, day: 1, seat: 9, client: 'Curtis Johnson', email: 'curtisj@example.com'  },
        { id: 3, day: 1, seat: 10, client: 'Felix McManara', email: 'felxim98@example.com'  },
        { id: 4, day: 1, seat: 26, client: 'Fauna Keithrins', email: 'mefauna312@example.com'  },
        { id: 5, day: 2, seat: 1, client: 'Felix McManara', email: 'felxim98@example.com'  },
        { id: 6, day: 2, seat: 2, client: 'Molier Lo Celso', email: 'moiler.lo.celso@example.com'  },
    ]
};

module.exports = db;