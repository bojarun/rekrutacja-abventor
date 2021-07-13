import React, { useState } from "react";
import { Link } from "react-router-dom";

import doctors from "../static/therapists.json";
import Therapist from "./Therapist";

function Results( ) {
    const doctor = doctors.doctor;

    const s1 = localStorage.getItem('step1');
    const s4 = localStorage.getItem('step4');
    const s5 = localStorage.getItem('step5');

    const issuesArray = s4.split(',');
    let issueString = "";
    for (let i=1; i<issuesArray.length; i++){
        if (i<4) issueString = issueString + "<p>- " + issuesArray[i] + "</p>";
    }
    if (issuesArray.length > 4){
        issueString = issueString + "<small>and " + (issuesArray.length - 4) + " more </small>";
    }

    const languagesArray = s5.split(',');
    let languageString = "";
    for (let i=1; i<languagesArray.length; i++){
        if (i<4) languageString = languageString + "<p>- " + languagesArray[i] + "</p>";
    }
    if (languagesArray.length > 4){
        languageString = languageString + "<small>and " + (languagesArray.length - 4) + " more </small>";
    }

    const [filters, setFilters] = useState('recommended');
    const [modal, setModal] = useState(false);

    let children = [];
    const addTherapists = (item) => {
        children = [];
        item.map((data, key) => {
            children.push(<Therapist key={key} data={data} />);
        });
    }

    addTherapists(doctor);

    const handleOnChange = (event) =>{
        setFilters(event.target.value);

        // Clear list
        const list = document.querySelector('.therapists-list');
        list.innerHTML = "";

        const map = new Map();
        for (let d=0;d<doctor.length;d++){
            map.set(doctor[d].price, doctor[d]);
        }

        if (event.target.value === "recommended"){
            const mapRec = new Map([...map.entries()]);
            const recom = [];
            mapRec.forEach(v => doctor.push(v));
            addTherapists(recom);

        } else if (event.target.value === "lowest-price"){
            const mapAsc = new Map([...map.entries()].sort());
            const low = [];
            mapAsc.forEach(v => doctor.push(v));
            addTherapists(low);

        } else if (event.target.value === "highest-price"){
            const mapDesc = new Map([...map.entries()].sort().reverse());
            const high = [];
            mapDesc.forEach(v => doctor.push(v));
            addTherapists(high);
        }
    }

    const handleOnClick = () =>{
        setModal(!modal);
    }

    return (
        <div>
            <div className="container">
                <div className="header">
                    <h2>List of therapists</h2>
                </div>
                <div className="controls">
                    <div className="row">
                        <div className="col col-6">
                            <button className="button button--primary" onClick={handleOnClick} >Change preferences</button>
                        </div>
                        <div className="col col-6">
                            <div className="formSelect">
                                <label>
                                    Sort by:
                                </label>
                                <select onChange={handleOnChange}>
                                    <option value="recommended">Recommended</option>
                                    <option value="lowest-price">Lowest price</option>
                                    <option value="highest-price">Highest price</option>
                                </select>
                                <span className="formSelect__icon"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="therapists-list">
                    {children}
                </div>
            </div>

            {modal && <div className="modal">
                <div className="box box--wide">
                    <button className="close" onClick={handleOnClick}/>
                    <div className="group">
                        <div>
                            <h3>Type of help</h3>
                            <p>- {s1}</p>
                        </div>
                        <Link className="button button--primary" to="/1">Start search again</Link>
                    </div>
                    <div className="group">
                        <div>
                            <h3>Issues:</h3>
                            <div dangerouslySetInnerHTML={{ __html: issueString }} />
                        </div>
                        <Link className="button button--primary" to="/4">Change issues</Link>
                    </div>
                    <div className="group">
                        <div>
                            <h3>Language of therapy:</h3>
                            <div dangerouslySetInnerHTML={{ __html: languageString }} />
                        </div>
                        <Link className="button button--primary" to="/5">Change language</Link>
                    </div>
                    <div className="group">
                        <div>
                            <h3>Preferences:</h3>
                            <p>- Therapist gender: <span>Any</span></p>
                            <p>- Type of session: <span>Video</span></p>
                            <p>- Aproach: <span>Cognitive Behavior Therapy</span></p>
                        </div>
                        <Link className="button button--primary" to="/1">Modify preferences</Link>
                    </div>
                    <button className="button button--primary" onClick={handleOnClick}>BACK TO LIST OF THERAPISTS</button>
                </div>
            </div>}
        </div>
    );
}

export default Results;