import "./EventStyles.css";

function EventData(props) {
    return (
        <div className="e-card">
            <div className="e-image">
                <img src={props.img}></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default EventData;