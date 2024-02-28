import css from './feedback.module.css'
const Feedback = ({feedback, total, totalPositive}) => {
    console.log (feedback);
    return (    
    <ul className={css.list}>
        <li>Good:{feedback.good}</li>
        <li>Nautral:{feedback.neutral}</li>
        <li>Bad:{feedback.bad}</li>
        <li>Total:{total}</li>
        <li>Positive:{totalPositive} %</li>
    </ul>)

}

export default Feedback;