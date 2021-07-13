import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import stepText from "../static/step5.json";
import React, {useState, useEffect} from "react";

function Step5() {
    const stepFields = stepText.fields;
    const [stepState, setStepState] = useState(localStorage.getItem('step5'));

    let checkBoxes = [localStorage.getItem('step5')];

    const handleOnChange = (newState) =>{
        if (localStorage.getItem('step5') && localStorage.getItem('step5').includes(','+newState)){
            // remove
            const string = localStorage.getItem('step5').replace((','+newState),'');
            checkBoxes = [string];
        } else {
            // push
            checkBoxes.push(newState);
        }

        localStorage.setItem('step5', checkBoxes);
        setStepState(checkBoxes);
    }

    useEffect(() => {
        //console.log("localStorage: " + localStorage.getItem('step5'));
        if (localStorage.getItem('step5')){
            const chk = document.querySelectorAll('input[type=checkbox]');
            for (let i=0; i<chk.length; i++){
                if (localStorage.getItem('step5').includes(chk[i].value)){
                    chk[i].checked = true;
                }
            }
        }
    });

    return (
        <div className="container">
            <div className="box box--wide">
                <h2>
                    {stepText.title}
                    <small>{stepText.subtitle}</small>
                </h2>
                <div className="flex">
                    {stepFields.map((data, key) => {
                        return (
                            <Checkbox key={key} data={data} stepState={stepState} onChange={handleOnChange} />
                        );
                    })}
                </div>
            </div>

            <div className="box box--footer">
                <Link className="button button--secondary" to="/4">&laquo; Back</Link>
                <Link className="button button--primary" to="/results">Next &raquo;</Link>
            </div>
        </div>
    );
}

export default Step5;