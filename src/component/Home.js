import React, { useEffect, useState } from "react";
import CreateTask from "./modals/CreateTask";
import Card from "./Card";





function Home() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [searchTerm, setSearchItem] = useState('')

// function to handle search term change
const handleSearcTermChage = (event) => {
  setSearchItem(event.target.value);
}

//function to fetch task list from the server

const fetchTasksList = async () => {
  try {
    const response = await fetch('http://localhost:3000/taskList');
    const data = await response.json();
    setTaskList(data);

  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

// Function to filter task based on the search term 

    useEffect(() => {
      let arr = localStorage.getItem("taskList")
     
      if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
      }
    }, []);

  

    const deleteTask = (index) => {
      let tempList = taskList
      tempList.splice(index, 1)
      localStorage.setItem("taskList", JSON.stringify(tempList))
      setTaskList(tempList)
      window.location.reload()
    }
    const updateListArray =(obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    const toggle = () => {
        setModal(!modal);
    }
    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false)
        setTaskList(tempList)
       
    }
  return (
  <>
    <div className="header text-center">
     <h3>My Task List</h3>
     <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button><br></br>
     
     
    </div>
    <div class="row height d-flex justify-content-center align-items-center">
     <div class="col-md-8">

                        <div class="search">
                          <i class="fa fa-search"></i>
                          <input type="text" class="form-control" value={searchTerm}  
                          onChange={handleSearcTermChage}
                          placeholder="search task list"/>
                          <button class="btn btn-primary" onClick={fetchTasksList}>Search</button><br></br>
                        </div>
                        
                      </div>
                      
</div>

    <div className="task-container">
        {taskList && taskList.map((obj , index) =>  <Card taskObj = {obj} 
        index = {index} deleteTask = {deleteTask} 
        updateListArray = {updateListArray} 
        fetchTasksList ={fetchTasksList}
        key={index}/>)}
    </div>
    <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
  </>
  );
}

export default Home;
