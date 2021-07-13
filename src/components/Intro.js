import { Link } from "react-router-dom";
import React from "react";

function Intro( ) {
    const handleOnClick = () =>{
        localStorage.setItem('step1', null);
        localStorage.setItem('step2', null);
        localStorage.setItem('step3', null);
        localStorage.setItem('step4', null);
        localStorage.setItem('step5', null);
        alert("Form is cleared");
    }

    return (
        <div className="container">
            <div className="box">
                <h2>Fill in the form
                    <small>
                        Click Start to fill in form
                    </small>
                </h2>
            </div>

            <div className="box box--footer">
                <button className="button button--secondary" onClick={handleOnClick} >Clear Form Data</button>


                <Link className="button button--primary" to="/1">Start &raquo;</Link>
            </div>

        </div>
    );
}

export default Intro;