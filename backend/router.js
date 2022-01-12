import express from 'express';
import { getStudents, addStudent } from './controller.js';

const router = express.Router();

router.route('/students')
    .get((req, res) => getStudents(req, res))
    .post((req, res) => addStudent(req, res));

export default router;