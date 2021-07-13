import React, { useState } from "react";

const Radio = ( props ) => {
    const [isChecked, setIsChecked] = useState("");

    const value = props.data.question;
    const checked = props.stepState === value;

    const handleOnChange = (event) => {
        setIsChecked(event.target.value);
        props.onChange(event.target.value);
    };

    return (
        <div className="formRadioButton">


                <input
                    type="radio"
                    value= {value}
                    name= {props.group}
                    checked = {checked}
                    onChange={handleOnChange}
                />
            <label>
                {props.data.question}
            </label>
        </div>
    );
}

export default Radio;