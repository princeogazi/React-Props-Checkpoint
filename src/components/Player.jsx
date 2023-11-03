import Card from "react-bootstrap/Card";

function Player({ name, team, nationality, jerseyNumber, age, image }) {
return (
    <div className="App">
    <Card className="player" style={{ width: "18rem" }}>
        <Card.Body>
        <h3 className="playername">{name}</h3>
        <img src={image} alt="player" width={"200px"}></img>
        <b><p>Club: {team}</p></b>
        <b><p>{nationality}</p></b>
        <b><p>#{jerseyNumber}</p></b>
        <b><p>Age: {age}</p></b>
        </Card.Body>
    </Card>
    </div>
);
}

// Player.defaultProps = {name: "Princewill"}

export default Player;
