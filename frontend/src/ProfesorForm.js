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

    const [curs, setCurs] = useState({
        id: '',
        denumire: '',
        data: `${getDate()}`,
        durata: '',
        idProfesor: `${profesor.id}`
    });

    function getDate() {
        var date;
        date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' +
            ('00' + date.getUTCHours()).slice(-2) + ':' +
            ('00' + date.getUTCMinutes()).slice(-2) + ':' +
            ('00' + date.getUTCSeconds()).slice(-2);
        return date;
    }


    async function createProfesor() {
        console.log(profesor);
        console.log(curs);
        const response = await fetch('/api/profesori', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profesor)
        });
        if (response.status === 201) {
            const response1 = await fetch('/api/cursuri', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(curs)
            });
            if (response.status === 201) {
                navigate(`/cursuri/${curs.id}`);
                console.log(response1.status);
            }
        }
    }

    function set(property, value) {
        const newProfesor = { ...profesor };
        newProfesor[property] = value;
        setProfesor(newProfesor);
    }

    function setC(property, value) {
        const newCurs = {...curs};
        newCurs[property] = value;
        setCurs(newCurs);
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
                    <div className="input-container ic2">
                    <input value={curs.id}
                        onChange={event => setC('id', event.target.value) } className = "input"></input>
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">ID-ul Cursului</label>
                    </div>
                    <div className="input-container ic2">
                    <input value={curs.denumire}
                        onChange={event => setC('denumire', event.target.value) } className = "input"></input>
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">Denumire curs</label>
                    </div>
                    <div className="input-container ic2">
                    <input value={curs.durata}
                        onChange={event => setC('durata', event.target.value) } className = "input"></input>
                        <div className="cut"></div>
                        <label htmlFor="lastname" className="placeholder">Durata curs</label>
                    </div>
                    <button type="text" className = "submit" onClick={createProfesor} >Introduceti</button>
                </div>
            </div>
    );
}


export default ProfesorForm;