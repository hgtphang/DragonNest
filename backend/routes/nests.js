const express = require('express');
const router = express.Router();
const Nest = require('../models/Nest'); // Adjust the path as necessary

// GET all nests
router.get('/search', async (req, res) => {
  // Check if a zip code query parameter is provided
  const { zipcode } = req.query;

  // If a zip code is provided, search by zip code
  if (zipcode) {
      try {
          const nests = await Nest.find({ zipcode: zipcode });
          if (nests.length > 0) {
              return res.json(nests);
          } else {
              return res.status(404).json({ message: 'Nest not found' });
          }
      } catch (error) {
          return res.status(500).json({ message: error.message });
      }
  }
  // If no zip code is provided, return all nests
  try {
      const nests = await Nest.find({});
      res.json(nests);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
// POST a new nest
router.post('/', async (req, res) => {
  const nest = new Nest({
  });

  try {
    const newNest = await nest.save();
    res.status(201).json(newNest);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const nestDelete = await Nest.findByIdAndDelete(req.params.id);
    if (nestDelete) {
      res.json(nestDelete);
    } else {
      res.status(404).json({ message: 'Nest not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
    }
)

router.put('/:id', async (req, res) => {
  try {
    const nestUpdate = await Nest.findByIdAndUpdate(req.params.id, req.body, {new : true});
    if (nestUpdate) {
      res.json(nest);
    } else {
      res.status(404).json({ message: "Nest not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    }
  }
)

module.exports = router;
