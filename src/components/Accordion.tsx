const Accordion = (props) => {

    function clickHandler(i) {
        console.log(i)
    }

    return (
        <div className="accordion">
            {props.data.map((item, i) => (
                <div key={i}>
                    <h3 onClick={() => clickHandler(i)}>{item.question}</h3>
                    <p>{item.answer}</p>
                </div>
            ))}
        </div>
    );
};
export default Accordion;

