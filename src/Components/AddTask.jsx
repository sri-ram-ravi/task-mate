import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers'
import React, { useEffect, useState } from 'react'

const AddTask = ({taskList,setTaskList,updateTask,setUpdateTask}) => {

  const [taskName,setTaskName]=useState("")
  const handleTaskName=(event)=>setTaskName(event.target.value)

  useEffect(()=>{
    if(updateTask!==toBeEmpty) setTaskName(updateTask.name)
  },[updateTask])

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data=new Date()

    if(updateTask.id){
      setTaskList(taskList.map(task=>task.id===updateTask.id?{...task,name:taskName,time:`${data.toLocaleTimeString()} ${data.toLocaleDateString()}`}:task))
      setTaskName("")
      window.location.reload()
    }else{
      const newTask={
        id:Math.random()*10000,
        name:taskName,
        time:`${data.toLocaleTimeString()} ${data.toLocaleDateString()}`
      }
      if(taskName && taskName.length !== 0) setTaskList([...taskList,newTask])
      setTaskName("")
      window.location.reload()
    }
  }

  return (
    <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
      <div className='d-flex justify-content-between m-5 gap-5'>
        <input type="text" className="form-control" placeholder="Add Todo" aria-label="First name" maxLength={15} onChange={handleTaskName} value={taskName || ""}/>
        <button type="submit" className="btn btn-primary">{(!updateTask.id)?"Add":"Update"}</button>
      </div>
    </form>
  )
}

export default AddTask