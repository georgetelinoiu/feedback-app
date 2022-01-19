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
        var check = true;
        console.log(feedback);
        var currentDate = new Date();
        var thisHour = currentDate.getHours();
        var thisMinute = currentDate.getMinutes();
        var endTime = stringOraFinal(curs.data.substring(11, 16));
        if (parseInt(thisMinute) < 10) thisMinute = "0" + thisMinute;
        console.log(thisHour + ":" + thisMinute);
        var endHour = endTime.substring(0, 2);
        var endMinute = endTime.substring(3, 5);
        if (parseInt(thisHour) > parseInt(endHour)) check = false;
        else if (parseInt(thisHour) === parseInt(endHour) && parseInt(thisMinute) > parseInt(endMinute)) check = false; 
        if (check) {
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
        else alert('A expirat timpul de primire feedback pentru curs!');
    }


    function getDate() {
        var date;
        date = new Date();
        date = date.getFullYear() + '-' +
            ('00' + (date.getMonth() + 1)).slice(-2) + '-' +
            ('00' + date.getDate()).slice(-2) + ' ' +
            ('00' + date.getHours()).slice(-2) + ':' +
            ('00' + date.getMinutes()).slice(-2) + ':' +
            ('00' + date.getSeconds()).slice(-2);
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
        var data = getDate();
        feedback['data'] = data;
    }

    function stringOraFinal(oraIncepere) {
        var ora = parseInt(oraIncepere.substring(0, 2)) + 2; //offset pt ca se adauga in UTC dintr-un motiv sau altul
        var minute = parseInt(oraIncepere.substring(3, 5));
        var durata = parseInt(curs.durata);
        var ore = Math.floor(durata / 60);
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

    function parseOra(oraIncepere){
        var ora = parseInt(oraIncepere.substring(0, 2)) + 2; //offset pt ca se adauga in UTC dintr-un motiv sau altul
        var minute = parseInt(oraIncepere.substring(3, 5));
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


    return (<div className="feedbackFormDiv">
        <br></br>
        <div className = "textBox">
        <h1 id="denCurs">Oferiti feedback pentru cursul {curs.denumire}</h1>
        <h1 id="denCurs">Ora incepere curs: {parseOra(curs.data.substring(11, 16))}</h1>
        <h1 id="denCurs">Ora incheiere curs: {stringOraFinal(curs.data.substring(11, 16))}</h1>
        </div>
        <div>
            <div className="quarter" onClick={() => { setTip(1); set('id', `${uuidv4()}`); setData(); sendFeedback(); }}>&#128512;</div>
            <div className="quarter" onClick={() => { setTip(2); set('id', `${uuidv4()}`); setData(); sendFeedback(); }}>&#128543;</div>
            <div className="quarter" onClick={() => { setTip(3); set('id', `${uuidv4()}`); setData(); sendFeedback(); }}>&#128558;</div>
            <div className="quarter" onClick={() => { setTip(4); set('id', `${uuidv4()}`); setData(); sendFeedback(); }}>&#128533;</div>
            <div></div>
        </div>
    </div>)
}


export default FeedbackForm;