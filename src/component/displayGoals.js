import React, { Component } from 'react';
import {Form, Button, Container, Card} from 'react-bootstrap';
import styled from 'styled-components';

import Goal from './Goal';


const Styles = styled.div`
  form {
  background-color: #ffffff;
  box-shadow: 7px 8px 7px rgba(3, 3, 3, 0.4);
  margin: 2rem 1rem 1rem 1rem;
  padding: 1rem;

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
`
class DisplayGoals extends Component{


constructor() {
  super();
  this.state = {
    title: '',
    motive: '',
    date: '',
    _id: '',
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
        method: 'PUT',
        body: JSON.stringify({
          title: this.state.title,
          motive: this.state.motive
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log("addTask", data)
          this.setState({ _id: '', title: '', motive: '' });
          this.fetchTasks();
        });
    } else {
      fetch('/api/goals', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({ title: '', motive: '' });
          this.fetchTasks();
        })
        .catch(err => console.error(err));
    }

  }

  deleteTask(id) {
    console.log(id)
    fetch(`/api/goals/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.fetchTasks();
      })
    // .catch(err)
  }

  editTask(id) {
    fetch(`/api/goals/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
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

showGoal = (cardId) =>{
  this.setState({ 
    showingGoal : !this.state.showingGoal,
    id : cardId
   })
}

fetchTasks() {
  fetch('/api/goals')
    .then(res => res.json())
    .then(data => {
      this.setState({tasks: data});
      console.log(this.state.tasks);
    });
}

render() {
  console.log("estado de showing",this.state.id)
  if(this.state.showingGoal){
    return (
      <Goal id = {this.state.id}/>
    )
  }else{
  return (
      <Styles>
    <Container>
      <Form onSubmit={this.addTask}>
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
          <Container className="col s7">
                 {this.state.tasks.map(task => {
                    return (
                      <Card key={task._id}>
                        <Card.Img variant="top" src="https://i.imgur.com/5OpceQ1.jpg" />
                        <Card.Body>
                          <Card.Title>{task.title}</Card.Title>
                          <Card.Text>
                            {task.motive}
                          </Card.Text>
                            <Button onClick={() => this.showGoal(task._id)}>Ver más</Button>
                          <Button onClick={() => this.deleteTask(task._id)}>Eliminar</Button>
                          <Button onClick={() => this.editTask(task._id)} >Editar</Button>
                        </Card.Body>
                      </Card>

                    )
                  })
                }
                </Container>
    </Container>
                </Styles>
  )
}
}

}

export default DisplayGoals;
