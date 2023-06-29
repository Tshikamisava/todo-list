import React, {useState} from 'react';
import EditTask from './modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#463f3a"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#e0afa0"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#736ced"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#ad2831"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#ffc600"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "40px", "bottom" : "20px"}}>
                    <i class = "far fa-edit mr-5" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;