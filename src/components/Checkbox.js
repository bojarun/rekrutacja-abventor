import React, { useState } from "react";

const Checkbox = ( props ) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (event) => {
        setIsChecked(!isChecked);
        props.onChange(event.target.value);
    };

    const value = props.data.question;

    return (
        <div className="formCheckBox">

                <input
                    type="checkbox"
                    value= {value}
                    name= {props.data.question}
                    onChange={handleOnChange}
                />
            <label>
                {props.data.question}
            </label>
        </div>
    );
}

export default Checkbox;