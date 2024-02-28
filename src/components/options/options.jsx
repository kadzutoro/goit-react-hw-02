import css from './options.module.css'

const Options = ({ onClick, onReset }) => {
    return (
        <div className={css.options}>
            <button onClick={() => onClick('good')}>Good</button>
            <button onClick={() => onClick('neutral')}>Neutral</button>
            <button onClick={() => onClick('bad')}>Bad</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default Options  