import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function StudentForm() {
    const navigate = useNavigate();
    const [student, setStudent] = useState({
        id: `${uuidv4()}`,
        nume: '',
        prenume: '',
        idCurs: ''
    });

    async function createStudent() {
        var check = false;
        const response = await fetch(`/api/cursuri/${student.idCurs}`);
        if (response.status === 200) {
            check = true;
        }
        if (check) {

            console.log(student);
            const response = await fetch('/api/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            });
            if (response.status === 201) {
                navigate('/');
                console.log(response.status);
            }
        }
        else console.log('Nu am gasit');

    }

    function set(property, value) {
        const newStudent = { ...student };
        newStudent[property] = value;
        setStudent(newStudent);
    }


    return (
        <div className = "aliniere">
            <div className="form">
                <div className="title">Bine ati venit</div>
                <div className="input-container ic1">
                <input value={student.nume}
                    onChange={event => set('nume', event.target.value)} className = "input"></input>
                    <div className="cut"></div>
                    <label htmlFor="firstname" className="placeholder">Nume</label>
                </div>
                <div className="input-container ic2">
                <input value={student.prenume}
                    onChange={event => set('prenume', event.target.value) } className = "input"></input>
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Prenume</label>
                </div>
                <div className="input-container ic2">
                <input value={student.idCurs}
                    onChange={event => set('idCurs', event.target.value)} className = "input"></input>
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="placeholder">Cod curs</label>
                </div>
                <button type="text" className = "submit" onClick={createStudent} >Introduceti</button>
            </div>
        </div>
    );
}

export default StudentForm;