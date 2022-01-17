import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function FeedbackForm() {
    const { cursId } = useParams();

    const [curs, setCurs] = useState({
        id: '',
        denumire: '',
        data: '',
        durata: '',
        idProfesor: ''
    });

    const [feedback, setFeedback] = useState({
        id: `${uuidv4()}`,
        tip: '',
        data: `${getDate()}`,
        idCurs: `${cursId}`
    })


    const loadCurs = async (cursId) => {
        const response = await fetch(`/api/cursuri/${cursId}`);
        if (response.status === 200) {
            setCurs(await response.json());
            console.log(curs);
        }
    }



    useEffect(() => loadCurs(cursId), [cursId]);

    async function sendFeedback() {
        console.log(feedback);
        const response = await fetch('/api/feedbacks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        });
        if (response.status === 201) {

            console.log(response.status);
        }
    }


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

    function set(property, value) {
        const newFeedback = { ...feedback };
        newFeedback[property] = value;
        setFeedback(newFeedback);
    }

    function setTip(check) {
        if (check === 1)
            feedback['tip'] = '&#128512;';
        else if (check === 2)
            feedback['tip'] = '&#128543;';
        else if (check === 3)
            feedback['tip'] = '&#128558;';
        else if (check === 4)
            feedback['tip'] = '&#128533;';
    }

    function setData() {
        feedback['data'] = getDate();
    }

    function stringOraFinal(data) {
        var oraIncepere = data.split('T')[1].split('.')[0];
        var ora = parseInt(oraIncepere.split(':')[0]);
        var minute = parseInt(oraIncepere.split(':')[1]);
        var durata = parseInt(curs.durata);
        var ore = durata / 60;
        minute += durata % 60;
        ora += ore;
        if (minute > 60) {
            ora++;
            minute -= 60;
        }
        if (ora >= 10 && minute >= 10)
            return `${ora}:${minute}`;
        else if (ora >= 10 && minute < 10) {
            return `${ora}:0${minute}`;
        }
        else if (ora < 10 && minute >= 10) {
            return `0${ora}:${minute}`;
        }
        else if (ora < 10 && minute < 10) {
            return `0${ora}:0${minute}`;
        }

    }

    function inceputCurs(data){
        var rezultat = data.split('T')[1].split('.')[0].split(':')[0] + ":" + curs.data.split('T')[1].split('.')[0].split(':')[1];
        return rezultat;
    }

    return (<div>
        <h1 id="denCurs">Oferiti feedback pentru cursul {curs.denumire}</h1>
        <h1 id="denCurs">Ora incepere curs: {curs.data}</h1>
        <h1 id="denCurs">Ora incheiere curs: {curs.data}</h1>
        <div>
            <div className="quarter" onClick={() => { setTip(1); set('id', `${uuidv4()}`); setData(); sendFeedback(); }}>&#128512;</div>
            <div className="quarter" onClick={() => { setTip(2); set('id', `${uuidv4()}`); setData(); sendFeedback(); }}>&#128543;</div>
            <div className="quarter" onClick={() => { setTip(3); set('id', `${uuidv4()}`); setData(); sendFeedback(); }}>&#128558;</div>
            <div className="quarter" onClick={() => { setTip(4); set('id', `${uuidv4()}`); setData(); sendFeedback(); }}>&#128533;</div>
        </div>
    </div>)
}


export default FeedbackForm;