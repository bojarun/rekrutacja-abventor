import React from "react";
import avatar from "../images/avatar.jpg";

const Therapist = ( props ) => {
    const tags = props.data.tags;
    let tagString = "";
    for (let i=1; i<tags.length; i++){
        tagString = tagString + "<span class='tag'>" + tags[i].text + "</span>";
    }

    return (
        <div className="therapist box">
            <div className="therapist__header">
                <div className="therapist__avatar">
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className="therapist__price">
                    <strong>
                        from £ <span className="therapist__price__value">{props.data.price}</span><br/>per session
                    </strong>
                </div>
                <div className="therapist__info">
                    <h3>{props.data.name}</h3>
                    <p>{props.data.grade}</p>
                </div>
            </div>
            <div className="therapist__content">
                <div className="therapist__tags">
                    <div dangerouslySetInnerHTML={{ __html: tagString }} />
                </div>
                <div className="therapist__session">
                    <span className="active">Video</span>
                    <span className="active">Phone</span>
                    <span>Chat</span>
                </div>
            </div>
            <div className="therapist__footer">
                <small>{props.data.description}</small>
            </div>
            <a className="button button--primary">View profile</a>
        </div>
    );
}

export default Therapist;