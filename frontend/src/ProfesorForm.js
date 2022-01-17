import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function ProfesorForm() {
    const navigate = useNavigate();
    const [profesor, setProfesor] = useState({
        id: `${uuidv4()}`,
        nume: '',
        prenume: '',
    });

    async function createProfesor() {
        console.log(profesor);
        const response = await fetch('/api/profesori', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profesor)
        });
        if (response.status === 201) {
            navigate(`/cursuri/`);
            console.log(response.status);
        }
    }

    function set(property, value) {
        const newProfesor = { ...profesor };
        newProfesor[property] = value;
        setProfesor(newProfesor);
    }



    return (
        <div className = "aliniere">
                <div className="form">
                    <div className="title">Bine ati venit</div>
                    <div className="input-container ic1">
                    <input value={profesor.nume}
                        onChange={event => set('nume', event.target.value)} className = "input"></input>
                        <div className="cut"></div>
                        <label htmlFor="firstname" className="placeholder">Nume</label>
                    </div>
                    <div className="input-container ic2">
                    <input value={profesor.prenume}
                        onChange={event => set('prenume', event.target.value) } className = "input"></input>
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">Prenume</label>
                    </div>
                    <button type="text" className = "submit" onClick={createProfesor} >Introduceti</button>
                </div>
            </div>
    );
}


export default ProfesorForm;