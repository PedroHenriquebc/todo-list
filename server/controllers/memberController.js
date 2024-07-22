const Member = require('../models/member');

exports.createMember = async (req, res) => {
    try {
        const member = await Member.create(req.body);
        res.status(201).json(member);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
