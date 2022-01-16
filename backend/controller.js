import { Student, Feedback, Curs, Profesor } from "./model.js";

async function getStudents(req, res) {
    try{
        const students = await Student.findAll({attributes: ['id', 'nume', 'prenume']});
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

async function getStudent(req, res){
    try{
        if (req.params.id) {
			const student = await Student.findByPk(req.params.id);
			if (student) {
				res.json(student);
			} else {
				res.status(404).send("Not found");
			}
		} else {
			res.status(400).send("Da");
		}
	} catch (error) {
		res.status(500).send("Eroare");
	}
}

async function addStudent(req, res){
    try{
        if(req.body.id && req.body.nume && req.body.prenume && req.body.idCurs){
            await Student.create(req.body);
            res.status(201).send("Created");
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

async function saveStudent(req, res){
    try {
		const student = await Student.findByPk(req.params.id);
		if (student) {
			Object.entries(req.body).forEach(([name, value]) => student[name] = value);
			await student.save();
			res.status(204).send();
		} else {
			res.status(404).send();
		}
	} catch (error) {
		res.status(500).json(error);
	}
}

async function removeStudent(req, res) {
	try {
		if (req.params.id) {
			const student = await Student.findByPk(req.params.id);
			if (student) {
				await student.destroy();
				res.status(204).send();
			} else {
				res.status(404).send();
			}
		} else {
			res.status(400).send();
		}
	} catch (error) {
		res.status(500).json(error);
	}
}

async function getCursuri(req, res){
    try{
        const cursuri = await Curs.findAll({attributes: ['denumire', 'durata', 'cod', 'data']});
        if(cursuri.length > 0){
            res.status(200).json(cursuri);
        }
        else{
            res.status(204).send();
        }
    }
    catch(error){
        res.status(500).json(error);
    }
}

async function getCurs(req, res){
    try{
        if (req.params.id) {
			const curs = await Curs.findByPk(req.params.id);
			if (curs) {
				res.json(curs);
			} else {
				res.status(404).send("Not found");
			}
		} else {
			res.status(400).send("Da");
		}
	} catch (error) {
		res.status(500).send("Eroare");
	}
}

async function addCurs(req, res){
    try{
        if(req.body.id && req.body.denumire && req.body.durata){
            await Curs.create(req.body);
            res.status(201).send("Created");
        }
        else{
            if(req.body.denumire == null || req.body.durata == null){
                res.status(400).send("eroare");
            }
        }
    }
    catch(error){
        res.status(500).send(`Eroare mare`);
    }
}

async function saveCurs(req, res){
    try {
		const curs = await Curs.findByPk(req.params.id);
		if (curs) {
			Object.entries(req.body).forEach(([name, value]) => curs[name] = value);
			await curs.save();
			res.status(204).send();
		} else {
			res.status(404).send();
		}
	} catch (error) {
		res.status(500).json(error);
	}
}

async function removeCurs(req, res) {
	try {
		if (req.params.id) {
			const curs = await Curs.findByPk(req.params.id);
			if (curs) {
				await curs.destroy();
				res.status(204).send();
			} else {
				res.status(404).send();
			}
		} else {
			res.status(400).send();
		}
	} catch (error) {
		res.status(500).json(error);
	}
}

async function getFeedbacks(req, res) {
    try{
        const feedbacks = await Feedback.findAll({attributes: ['tip', 'data']});
        if(feedbacks.length > 0){
            res.status(200).json(feedbacks);
        }
        else{
            res.status(204).send();
        }
    }
    catch(error){
        res.status(500).json(error);
    }
}


async function getFeedback(req, res){
    try{
        if (req.params.id) {
			const feedback = await Feedback.findByPk(req.params.id);
			if (feedback) {
				res.json(feedback);
			} else {
				res.status(404).send("Not found");
			}
		} else {
			res.status(400).send("Da");
		}
	} catch (error) {
		res.status(500).send("Eroare");
	}
}

async function addFeedback(req, res){
    try{
        if(req.body.id && req.body.tip && req.body.data){
            await Feedback.create(req.body);
            res.status(201).send("Created");
        }
        else{
            if(req.body.denumire == null || req.body.durata == null){
                res.status(400).send("eroare");
            }
        }
    }
    catch(error){
        res.status(500).send(`Eroare mare`);
    }
}

async function getProfesori(req, res) {
    try{
        const profesori = await Profesor.findAll({attributes: ['nume', 'prenume']});
        if(profesori.length > 0){
            res.status(200).json(profesori);
        }
        else{
            res.status(204).send();
        }
    }
    catch(error){
        res.status(500).json(error);
    }
}

async function getProfesor(req, res){
    try{
        if (req.params.id) {
			const profesor = await Profesor.findByPk(req.params.id);
			if (profesor) {
				res.json(profesor);
			} else {
				res.status(404).send("Not found");
			}
		} else {
			res.status(400).send("Da");
		}
	} catch (error) {
		res.status(500).send("Eroare");
	}
}

async function addProfesor(req, res){
    try{
        if(req.body.id && req.body.nume && req.body.prenume){
            await Profesor.create(req.body);
            res.status(201).send("Created");
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

export {getStudents, addStudent, getStudent, saveStudent, removeStudent, 
        getCursuri, addCurs, getCurs, saveCurs, removeCurs,
        getFeedbacks, addFeedback, getFeedback,
        getProfesori, addProfesor, getProfesor};