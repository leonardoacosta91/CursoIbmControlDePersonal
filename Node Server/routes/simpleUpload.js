const express = require('express');
const router = express.Router();

const SimpleUpload = require('../models/SimpleUpload');

router.get('/', async (req, res) => {
    /* const tasks = await Task.find();
    res.json(tasks); */
});

router.get('/:id', async (req, res) => {
    /* const task = await Task.findById(req.params.id);
    res.json(task); */
})

router.post('/', async (req, res) => {
    /* const task = new Task (req.body);
    await task.save();
    res.json({
        status: 'Task saved'
    }); */
})

router.put('/:id', async (req, res) => {
    /* console.log(req.params);
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'tarea actualizada'
    }); */
})

router.delete('/:id', async (req, res) => {
    /* console.log(req.params);
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'tarea eliminada'
    }); */
})

module.exports = router;