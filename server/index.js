const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Member = require('./models/member');
const Task = require('./models/task');

const app = express();
app.use(bodyParser.json());

sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
});

// Rotas
app.use('/api/members', require('./routes/members'));
app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
