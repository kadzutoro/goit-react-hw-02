const Feedback = ({feedback,total,totalPositive}) => {
    console.log (feedback);
    return (    
    <ul>
        <li>Good:{feedback.good}</li>
        <li>Nautral:{feedback.neutral}</li>
        <li>Bad:{feedback.bad}</li>
        <li>Total:{total}</li>
        <li>Positive:{totalPositive} %</li>
    </ul>)

}

export default Feedback;