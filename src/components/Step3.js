import React, {useState} from "react";
import { Link } from "react-router-dom";
import Radio from "../components/Radio";
import stepText from "../static/step3.json";

function Step3() {
    const stepFields = stepText.fields;
    const [stepState, setStepState] = useState(localStorage.getItem('step3'));

    const handleOnChange = (newState) =>{
        setStepState(newState);
        localStorage.setItem('step3', newState);
    }

    return (
        <div className="container">
            <div className="box">
                <h2>{stepText.title}</h2>
                <div className="group">
                    {stepFields.map((data, key) => {
                        return (
                            <Radio key={key} data={data} group="step3" stepState={stepState} onChange={handleOnChange}  />
                        );
                    })}
                </div>
                <small>{stepText.subtitle}</small>
            </div>

            <div className="box box--footer">
                <Link className="button button--secondary" to="/2">&laquo; Back</Link>
                <Link className="button button--primary" to="/4">Next &raquo;</Link>
            </div>
        </div>
    );
}

export default Step3;