import { Student, Feedback, Curs, Profesor } from "./model.js";

async function getStudents(req, res) {
    try{
        const students = await Student.findAll({
            include: [
                {
                    model: Curs,
                    attributes: {exclude: ['id']}
                }]
        });
        if(students.length > 0){
            res.status(200).json(students);
        }
        else{
            res.status(204).send();
        }
    }
    catch(error){
        res.status(500).json(error);
    }
}

async function addStudent(req, res){
    const existingStudent = await Student.findAndCountAll({
        where: {
            nume: req.body.nume,
            prenume: req.body.prenume
        },
        attributes: ['nume', 'prenume']
    });
    try{
        if(req.body.id && req.body.nume && req.body.prenume){
            await Student.create(req.body);
            res.status(201).send(`Created`);
        }
        else{
            if(req.body.nume == null || req.body.prenume == null){
                res.status(400).send("eroare");
            }
        }
    }
    catch(error){
        res.status(500).send(`Eroare mare`);
    }
}

export {getStudents, addStudent};