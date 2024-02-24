import React from 'react'
import {DragDropContext,Droppable} from "react-beautiful-dnd"
import Task from './Task'

const reorder = (taskList,start_index,end_index) => {
  const remove = taskList.splice(start_index,1);
  taskList.splice(end_index,0,remove[0]);
}

const Tasks = ({taskList,setTaskList}) => {

  const handleDragEnd = (result) => {
    // タスクを並び替える
    reorder(taskList,result.source.index,result.destination.index);

    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => 
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {taskList.map((task,index )=> (
                  <div key={task.id}>
                    <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList}/>
                  </div>
                ))}
                {provided.placeholder}
            </div>}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks
