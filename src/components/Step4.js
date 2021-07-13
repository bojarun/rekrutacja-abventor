import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import stepText from "../static/step4.json";
import React, {useState, useEffect} from "react";

function Step4() {
    const stepFields = stepText.fields;
    const [stepState, setStepState] = useState(localStorage.getItem('step4'));

    let checkBoxes = [localStorage.getItem('step4')];

    const handleOnChange = (newState) =>{
        if (localStorage.getItem('step4') && localStorage.getItem('step4').includes(','+newState)){
            // remove
            const string = localStorage.getItem('step4').replace((','+newState),'');
            checkBoxes = [string];
        } else {
            // push
            checkBoxes.push(newState);
        }

        localStorage.setItem('step4', checkBoxes);
        setStepState(checkBoxes);
    }

    useEffect(() => {
        //console.log("localStorage: " + localStorage.getItem('step4'));
        if (localStorage.getItem('step4')){
            const chk = document.querySelectorAll('input[type=checkbox]');
            for (let i=0; i<chk.length; i++){
                if (localStorage.getItem('step4').includes(chk[i].value)){
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
                <Link className="button button--secondary" to="/3">&laquo; Back</Link>
                <Link className="button button--primary" to="/5">Next &raquo;</Link>
            </div>
        </div>
    );
}

export default Step4;