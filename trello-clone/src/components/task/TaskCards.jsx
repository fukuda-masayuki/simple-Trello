import React, { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskCardButton from './button/AddTaskCardButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TaskCards = () => {

  const [taskCardsList,setTaskCardsList] = useState([
    {
      id:"0",
      draggableId:"item0"
    }
  ]);

  const reorder = (taskCardsList,start_index,end_index) => {
    const remove = taskCardsList.splice(start_index,1);
    taskCardsList.splice(end_index,0,remove[0]);
  }

  const handleDragEnd = (result) =>{
    // タスクを並び替える
    reorder(taskCardsList,result.source.index,result.destination.index);

    setTaskCardsList(taskCardsList);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
      {(provided) => (
        <div className='taskCardsArea' {...provided.droppableProps} ref={provided.innerRef}>
          {taskCardsList.map((taskCard,index) => (
              <TaskCard key={taskCard.id} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard} index={index}/> 
          ))}
          {provided.placeholder}
            <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList}/>
        </div>
      )}
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards
