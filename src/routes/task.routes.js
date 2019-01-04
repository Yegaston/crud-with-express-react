const express = require('express');
const router = express.Router();
const Task = require('../models/task')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    }
    catch (err) {
        console.log(err)
    }

});

router.get('/:id', async (req, res, next) => {

    const task = await Task.findById(req.params.id);
    res.json(task);

})

router.post('/', async (req, res, next) => {
    console.log(req.body);

    const { title, description } = req.body
    const task = new Task({ title, description });
    console.log(task)
    try {
        await task.save()
        res.json({
            status: "Received"
        })
    }
    catch (err) {
        res.json(err)
    }
})

router.put('/:id', async (req, res, next) => {
    const { title, description } = req.body;
    const task = ({ title, description });
    console.log(task)
    try {
        await Task.findByIdAndUpdate(req.params.id, task);
        res.json({ status: "task updated" });
    }
    catch (err) {
        console.log(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ status: "Task deleted." });
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;