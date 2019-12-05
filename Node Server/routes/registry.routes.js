const express = require('express');
const router = express.Router();

// controllers
const registries = require('../controllers/registry.controller.js');


router.post('/addEntry', registries.create);
router.get('/listAllEntries', registries.findAll);
router.get('/findByDate/:date', registries.findByDate);
router.get('/exit/:name', registries.findOneExit);

router.get('/check/:code', registries.checkIfIsAtTheOffice);
router.post('/checkStatus', registries.checkStatus);


module.exports = router;

/* 
module.exports = (app) => {
    const registries = require('../controllers/registry.controller.js');

    // Create a new Note
    app.post('/registry', registries.create);

    // Retrieve all Notes
    app.get('/registry', registries.findAll);

    // Retrieve a single Note with noteId
    app.get('/registry/:noteId', registries.findOne);

    // Update a Note with noteId
    app.put('/registry/:noteId', registries.update);

    // Delete a Note with noteId
    app.delete('/registry/:noteId', registries.delete);
}
 */
