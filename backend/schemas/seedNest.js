const mongoose = require('mongoose');
const Nest = require('../models/Nest'); 
require('dotenv').config({ path: '../.env' }); 
const room1 = 'http://localhost:5001/images/room1.jpeg';
const room2 = 'http://localhost:5001/images/room2.jpeg';
const room3 = 'http://localhost:5001/images/room3.jpeg';
const room4 = 'http://localhost:5001/images/room4.jpeg';

mongoose.connect(process.env.MONGODB_URI)
  .catch(error => console.error('MongoDB connection error:', error));

const seedData = [
  {
    title: 'Hung',
    description: 'Enjoy a bright and comfortable studio in downtown.',
    bedType: 'Queen bed',
    price: 670, 
    zipcode: '19100',
    images: [room1], 
    available: true,
    amenities: ['WiFi', 'Air Conditioning'], 
    address: '123 Main Street, City, State, Zip',
    contact: {
      phoneNumber: '1234567890', 
      email: 'hung@gmail.com'
    },
    size: '100m2',
    createdAt: new Date() 
  },
  {
    title: 'Huy',
    description: 'Spacious two-bedroom with great city views.',
    bedType: 'Double bed',
    price: 788, 
    zipcode: '19200',
    images: [room2], 
    available: true,
    amenities: ['WiFi', 'Air Conditioning'], 
    contact: {
      phoneNumber: '1234567890', 
      email: 'hung@gmail.com'
    },
    size: '100m2',
    address: '123 Main Street, City, State, Zip',
    createdAt: new Date() 
  },
  {
  
    title: 'Superman',
    description: 'Spacious two-bedroom with great city views.',
    bedType: 'Two double beds',
    price: 788, 
    zipcode: '19300',
    images: [room3], 
    available: true,
    amenities: ['WiFi', 'Air Conditioning'],
    contact: {
      phoneNumber: '1234567890', 
      email: 'superman@gmail.com'
    }, 
    size: '100m2',
    address: '123 Main Street, City, State, Zip',
    createdAt: new Date() 
  },
  {
    title: 'Wendy',
    description: 'Two Comfortable and cosy bedrooms; Near the Center City',
    bedType: 'Queen bed',
    price: 670, 
    zipcode: '19400',
    images: [room4],
    available: true,
    amenities: ['WiFi', 'Air Conditioning'], 
    contact: {
      phoneNumber: '1234567890', 
      email: 'wendy@gmail.com'
    },
    size: '100m2',
    address: '123 Main Street, City, State, Zip',
    createdAt: new Date() 
    // ... other listing properties as per your schema
  },
];
Nest.deleteMany({}) // WARNING: This will delete all existing documents in the Nest collection!
  .then(() => Nest.insertMany(seedData))
  .then(() => {
    console.log('Data seeded successfully!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error seeding data:', err);
    mongoose.connection.close();
  });
