function FeedbackRow(props) {
    const { feedback } = props;
    if (feedback.tip === '&#128543;')
        return (<div className="feedbackRow"><span>Feedback anonim: &#128543; primit la ora {feedback.data}</span>
        </div>)
    else if (feedback.tip === '&#128533;')
        return (<div className="feedbackRow"><span>Feedback anonim: &#128533; primit la ora {feedback.data}</span>
        </div>)
    else if (feedback.tip === '&#128512;')
        return (<div className="feedbackRow"><span>Feedback anonim: &#128512; primit la ora {feedback.data}</span>
        </div>)
    else if (feedback.tip === '&#128558;')
        return (<div className="feedbackRow"><span>Feedback anonim: &#128558; primit la ora {feedback.data}</span>
        </div>)
}

export default FeedbackRow;