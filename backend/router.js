import express from 'express';
import { getStudents, addStudent, getStudent, saveStudent, removeStudent, 
        getCursuri, addCurs, getCurs, saveCurs, removeCurs,
        getFeedbacks, addFeedback, getFeedback, getFeedbackCurs,
        getProfesori, getProfesor, addProfesor } from './controller.js';

const router = express.Router();

router.route('/students')
    .get((req, res) => getStudents(req, res))
    .post((req, res) => addStudent(req, res));

router.route('/students/:id')
    .get((req, res) => getStudent(req, res))
    .patch((req, res) => saveStudent(req, res))
    .delete((req, res) => removestudent(req, res));

router.route('/cursuri')
    .get((req, res) => getCursuri(req, res))
    .post((req, res) => addCurs(req, res));

router.route('/cursuri/:id')
    .get((req, res) => getCurs(req, res))
    .patch((req, res) => saveCurs(req ,res))
    .delete((req, res) => removeCurs(req, res));


router.route('/feedbacks/')
    .get((req, res) => getFeedbacks(req, res))
    .post((req, res) => addFeedback(req, res));

router.route('/feedbacks/:idCurs')
    //.get((req, res)=>getFeedback(req, res))  -> inlocuim get feedback dupa id-ul lui ca sa implementez search dupa idCurs
    .get((req,res) =>getFeedbackCurs(req,res));

router.route('/profesori/')
    .get((req, res) => getProfesori(req, res))
    .post((req, res) => addProfesor(req, res));

router.route('/profesori/:id')
    .get((req, res)=>getProfesor(req, res));
    

export default router;