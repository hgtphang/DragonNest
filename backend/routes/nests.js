const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing'); // Adjust the path as necessary
const { default: Listing } = require('../../frontend/src/components/Listing');

// GET all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single listing by ID
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (listing) {
      res.json(listing);
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new listing
router.post('/', async (req, res) => {
  const listing = new Listing({
    // ...populate with req.body
  });

  try {
    const newListing = await listing.save();
    res.status(201).json(newListing);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const listingDelete = await Listing.findByIdAndDelete(req.params.id);
    if (listingDelete) {
      res.json(listing);
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
    }
)

router.put('/:id', async (req, res) => {
  try {
    const listingUpdate = await Listing.findByIdAndUpdate(req.params.id, req.body, {new : true}, function (err, docs));
    if (listingUpdate) {
      res.json(listing);
    } else {
      res.status(404).json({ message: "Listing not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    }
  }
)


// ...add any other needed routes...

module.exports = router;
