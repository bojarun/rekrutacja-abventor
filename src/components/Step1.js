import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Radio from "../components/Radio";
import stepText from "../static/step1.json";

function Step1() {
    const stepFields = stepText.fields;
    const [stepState, setStepState] = useState(localStorage.getItem('step1'));

    const handleOnChange = (newState) =>{
        setStepState(newState);
        localStorage.setItem('step1', newState);
    }

    return (
        <div className="container">
            <div className="box">
                <h2>{stepText.title}</h2>
                {stepFields.map((data, key) => {
                    return (
                        <Radio key={key} data={data} group="1" stepState={stepState} onChange={handleOnChange} />
                    );
                })}
            </div>

            <div className="box box--footer">
                <Link className="button button--secondary" to="/">&laquo; Back</Link>
                <Link className="button button--primary" to="/2">Next &raquo;</Link>
            </div>


        </div>
    );
}

export default Step1;