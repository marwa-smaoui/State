import "./App.css";
import myimage from "./image.jpg";
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        { fullName: "Smaoui Marwa", bio: "React ", profession: "student" },
      ],
      isshow: false,
      counter: 0,
    };
  }

  showPerson = () => {
    this.setState({
      isshow: !this.state.isshow,
    });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  displayTime = (time) => {
    let h = Math.floor(time / 3600);
    let m = Math.floor((time - h * 3600) / 60);
    let s = time - h * 3600 - m * 60;
    return (
      <span>
        {h.toString().padStart(2, "0")} : {m.toString().padStart(2, "0")} :{" "}
        {s.toString().padStart(2, "0")}
      </span>
    );
  };

  render() {
    return (
      <div className="main">
        <span>{this.displayTime(this.state.counter)}</span>
        <div>
          <Button variant="primary" onClick={this.showPerson}>
            show profile
          </Button>
          {this.state.isshow ? (
            this.state.person.map((el, index) => (
              <Card key={index} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={myimage} />
                <Card.Body>
                  <Card.Title>{el.fullName}</Card.Title>
                  <Card.Text>{el.bio}</Card.Text>
                  <Card.Text>{el.profession}</Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h1>Click on the button to show the person </h1>
          )}
        </div>
      </div>
    );
  }
}

export default App;
