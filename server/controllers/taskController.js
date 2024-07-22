const Member = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        const task = await Taks.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
