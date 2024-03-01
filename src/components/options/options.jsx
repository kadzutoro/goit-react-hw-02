import css from './options.module.css'

const Options = ({ onClick, onReset, totalFeedback }) => {
    return (
        <div className={css.options}>
            <button onClick={() => onClick('good')}>Good</button>
            <button onClick={() => onClick('neutral')}>Neutral</button>
            <button onClick={() => onClick('bad')}>Bad</button>
            {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
        </div>
    );
};

export default Options  