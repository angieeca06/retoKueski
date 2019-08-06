import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import {
  IoIosAddCircle,
  IoIosAdd,
  IoMdCreate,
  IoMdTrash
} from "react-icons/io";
import Goal from "./Goal";

const Styles = styled.div`
  form {
    background-color: #ffffff;
    box-shadow: 7px 8px 7px rgba(3, 3, 3, 0.4);
    margin: 2rem 1rem 1rem 1rem;
    padding: 1rem;
    display: none;

    input {
      border-left: none;
      border-right: none;
      border-top: none;
      border-bottom-width: 1px;
      border-color: rgba(3, 3, 3, 0.4);

      ::placeholder {
        color: rgba(3, 3, 3, 0.4);
      }
    }

    .motiveTextArea {
      margin-bottom: 3rem;
    }

    .addGoalBtn {
      display: block;
      margin: auto;
      padding: 1rem;
      font-size: larger;
      background-color: #083d77;
      color: white;
      border-radius: 3rem;
      border: none;
      width: 60%;
    }

    .goalsContainer {
      display: block;
      margin: auto;
    }
  }

  .cardq {
    display: flex;
    margin: 1rem;
  }

  .ingresarCard {
    border: none;
    margin-left: 65%;
    font-size: 1rem;
    color: white;
    background-color: #a0d85b;
    padding: 10px;
    text-align: center;
    border-radius: 2rem;
  }

  .vermas {
    border: none;
    color: #a0d85b;
    font-size: 2rem;
    background-color: white;
    padding: 10px;
    text-align: center;
    border-radius: 2rem;
  }
`;
class DisplayGoals extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      motive: "",
      date: "",
      _id: "",
      tasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addTask(e) {
    e.preventDefault();
    if (this.state._id) {
      fetch(`/api/goals/${this.state._id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: this.state.title,
          motive: this.state.motive
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ _id: "", title: "", motive: "" });
          this.fetchTasks();
        });
    } else {
      fetch("/api/goals", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ title: "", motive: "" });
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }
  }

  deleteTask(id) {
    fetch(`/api/goals/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        this.fetchTasks();
      });
  }

  editTask(id) {
    fetch(`/api/goals/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          title: data.title,
          motive: data.motive,
          _id: data._id
        });
      });
  }

  componentDidMount() {
    this.fetchTasks();
  }

  showGoal = cardId => {
    this.setState({
      showingGoal: !this.state.showingGoal,
      id: cardId
    });
  };

  fetchTasks() {
    fetch("/api/goals")
      .then(res => res.json())
      .then(data => {
        this.setState({ tasks: data });
      });
  }

  render() {
    if (this.state.showingGoal) {
      return <Goal id={this.state.id} />;
    } else {
      return (
        <Styles>
          <div className="cardq">
            {this.state.tasks.map(task => {
              return (
                <Card key={task._id}>
                  <Card.Img
                    variant="top"
                    src="https://i.imgur.com/5OpceQ1.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>{task.motive}</Card.Text>
                    <Button
                      className="vermas"
                      onClick={() => this.showGoal(task._id)}
                    >
                      <IoIosAdd />
                    </Button>
                    <Button
                      className="vermas"
                      onClick={() => this.deleteTask(task._id)}
                    >
                      <IoMdTrash />
                    </Button>
                    <Button
                      className="vermas"
                      onClick={() => this.editTask(task._id)}
                    >
                      <IoMdCreate />
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </div>



<Button className ="ingresarCard" variant="primary" type="submit" onClick={()=>{
  document.querySelector('.form').style.display="block"
}}>
<IoIosAddCircle/>
</Button>



      <Form className ="form" onSubmit={this.addTask}>
        <Form.Group  controlId="formBasicEmail">
          <Form.Label>Nombre de la meta</Form.Label>
          <Form.Control name="title"  placeholder="Ingresa tu meta" onChange={this.handleChange} type="text" value={this.state.title}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Motivo de la meta</Form.Label>
          <Form.Control name="motive" onChange={this.handleChange} value={this.state.motive} type="text" placeholder="Ingresa el motivo de tu meta" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar meta
        </Button>
      </Form>
    </Styles>

  )
}
}


}

export default DisplayGoals;
