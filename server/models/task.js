const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Member = require('./member');

const Task = sequelize.define('Task', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 50]
        }
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            len: [0, 140]
        }
    },
    finalized: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    due_date: {
        type: DataTypes.DATE
    },
    priority: {
        type: DataTypes.ENUM,
        values: ['Baixa', 'Média', 'Alta'],
        defaultValue: 'Baixa'
    },
    member_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Member,
            key: 'id'
        }
    }
});

Member.hasMany(Task, { foreignKey: 'member_id' });
Task.belongsTo(Member, { foreignKey: 'member_id' });

module.exports = Task;
