import React, {useState, useEffect} from 'react';
import { Container, Jumbotron, Card, Button} from 'react-bootstrap';
import AddGoal from "./addGoal"

const Goal = props => {
    const cardId = props.id;
    const arrSteps = props.arrSteps;

    console.log("en el goal", arrSteps)
    const [goals, setGoals] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(()=>{
        fetchTasks()
    },[]);

        const fetchTasks = () => {
            fetch('/api/goals')
            .then(res => res.json())
            .then(data => {
                setGoals(data);
                const foundCard = data.find((card)=> {
                    return card._id === cardId;
                });
                setInfo(foundCard);
                return;
            });
        }

    return (
        info.motive ? (
            <Container>
                <Jumbotron>
                    <p>{info.motive}</p>
                </Jumbotron>
                <Card>
                    <Card.Body>
                        {<AddGoal />}
                    </Card.Body>
                </Card>
                <div>Tareas</div>
                {arrSteps.map(steps=>{
                    console.log("steps",)
                    return(
                        <Card>
                            <Card.Body>{steps}</Card.Body>
                            <Button>Falta</Button>
                            <Button>Hecho</Button>
                        </Card>
                    )
                })}
            </Container>
        ) : (<div>hola</div>)
    )
}

export default Goal;