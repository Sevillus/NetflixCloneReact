import {useState} from "react";

const Accordion = (props) => {
    const [selected, setSelected] =useState(null)

    function clickHandler(i) {
        if(selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="accordion" style={{width:"100%"}}>
            {props.data.map((item, i) => (
                <div>
                    <h3 onClick={() => clickHandler(i)} style={{display:"flex", justifyContent:"space-between", padding:"5px 25px", width:"100%"}}>
                        {item.question}<span className={"showMore"}>{selected === i ? '-':'+'}</span>
                    </h3>
                    <p style={{transition:"all 0.5s cubic-bezier(1,0,1,0)"}}>{selected === i ? `${item.answer}`:''}</p>
                </div>
            ))}
        </div>
    );
};
export default Accordion;

