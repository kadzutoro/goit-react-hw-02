

const Options = ({ onClick }) => {
    return (
        <div>
            <button onClick={() => onClick('good')}>Good</button>
            <button onClick={() => onClick('neutral')}>Neutral</button>
            <button onClick={() => onClick('bad')}>Bad</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default Options