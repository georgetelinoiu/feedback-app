import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FeedbackRow from './FeedbackRow';

function CursuriForm() {
    const navigate = useNavigate();
    const { cursId } = useParams();

    const [profesor, setProfesor] = useState({
        id: ``,
        nume: '',
        prenume: '',
    });


    const [curs, setCurs] = useState({
        id: '',
        denumire: '',
        data: ``,
        durata: '',
        idProfesor: ``
    });

    const [feedbacks, setFeedbacks] = useState([]);

    const loadFeedbacks = async () => {
        const response1 = await fetch(`/api/feedbacks/${cursId}`);
        if (response1.status === 200) {
            setFeedbacks(await response1.json());
            console.log(response1.status);
        }
    }

    useEffect(() => {loadFeedbacks()}, []);

    const loadCurs = async (cursId) => {
        const response = await fetch(`/api/cursuri/${cursId}`);
        if (response.status === 200) {
            setCurs(await response.json());
            var id = curs.idProfesor;
            // const loadProfesor = async (id) => {
            //     const response1 = await fetch(`/api/profesori/${id}`);
            //     if (response1.status === 200) {
            //         setProfesor(await response1.json());
            //         console.log(profesor);  
            //     }
            // }
        }
    }


    setTimeout(function(){
        window.location.reload(1);
     }, 8000);

    function setC(property, value) {
        const newCurs = { ...curs };
        newCurs[property] = value;
        setCurs(newCurs);
    }

    function setP(property, value) {
        const newProfesor = { ...profesor };
        newProfesor[property] = value;
        setProfesor(newProfesor);
    }


    useEffect(() => loadCurs(cursId), [cursId]);
    

    return (
        <div className="infoCurs">
            <br></br>
            <h1>Buna ziua! In acest moment vizionati feedback pentru cursul {curs.denumire}</h1>
            <h1>ID curs: {curs.id}</h1>
            <div className="incarcareFeedbacks">
                <br></br>
                <ul>
                    {
                        feedbacks.map((feedback, index) =>
                            <div className>
                                <FeedbackRow key={index} feedback={feedback} />
                                <br></br>
                            </div>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default CursuriForm;