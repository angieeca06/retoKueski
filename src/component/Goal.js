import React, {useState, useEffect} from 'react';
import { Container, Jumbotron, Card} from 'react-bootstrap';
import AddGoal from "./AddGoal"

const Goal = props => {
    const cardId = props.id;
    console.log("en el goal", props.id)
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

            </Container>
        ) : (<div>hola</div>)
    )
}

export default Goal;
