function FeedbackRow(props) {
    const { feedback } = props;


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

    if (feedback.tip === '&#128543;')
        return (<div className="feedbackRow"><span>Feedback anonim: &#128543; primit la ora {parseOra(feedback.data.substring(11, 16))}</span>
        </div>)
    else if (feedback.tip === '&#128533;')
        return (<div className="feedbackRow"><span>Feedback anonim: &#128533; primit la ora {parseOra(feedback.data.substring(11, 16))}</span>
        </div>)
    else if (feedback.tip === '&#128512;')
        return (<div className="feedbackRow"><span>Feedback anonim: &#128512; primit la ora {parseOra(feedback.data.substring(11, 16))}</span>
        </div>)
    else if (feedback.tip === '&#128558;')
        return (<div className="feedbackRow"><span>Feedback anonim: &#128558; primit la ora {parseOra(feedback.data.substring(11, 16))}</span>
        </div>)
}

export default FeedbackRow;