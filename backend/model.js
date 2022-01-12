import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('feedback', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

const Student = sequelize.define('student', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nume: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prenume: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const Feedback = sequelize.define("feedback", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    tip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idCurs: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

const Curs = sequelize.define("curs", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    denumire: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    durata: {
        type: Sequelize.TIME,
        allowNull: false
    },
    idProfesor: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

const Profesor = sequelize.define("profesor", {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nume: {
        type: Sequelize.STRING,
        allowNull: false
    },
    prenume: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

async function syncDB() {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
}

Curs.hasMany(Student, {foreignKey: 'id'});
Curs.hasMany(Feedback, {foreignKey: 'idCurs'});
Profesor.hasMany(Curs, {foreignKey: 'idProfesor'});
// Student.belongsToMany(Curs, {foreignKey: 'id'});

export {Student, Feedback, Curs, Profesor, syncDB};