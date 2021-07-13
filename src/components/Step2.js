import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Radio from "../components/Radio";
import stepText from "../static/step2.json";

function Step2() {
    const stepFields = stepText.fields;
    const [stepState, setStepState] = useState(localStorage.getItem('step2'));

    const handleOnChange = (newState) =>{
        setStepState(newState);
        localStorage.setItem('step2', newState);
    }

    return (
        <div className="container">
            <div className="box">
                <h2>{stepText.title}</h2>
                    {stepFields.map((data, key) => {
                    return (
                        <Radio key={key} data={data} group="2" stepState={stepState} onChange={handleOnChange} />
                    );
                })}
            </div>

            <div className="box box--footer">
                <Link className="button button--secondary" to="/1">&laquo; Back</Link>
                <Link className="button button--primary" to="/3">Next &raquo;</Link>
            </div>
        </div>
    );
}

export default Step2;