import React from 'react'

const TaskCardDeleteButton = ({taskCardsList,setTaskCardsList,taskCard}) => {

  const TaskCardDeleteButton = (id) => {
    /** タスクカードを削除する */
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id))
  };  

  return (
    <div>
      <button className='taskCardDeleteButton' onClick={() => TaskCardDeleteButton(taskCard.id)}>
      x
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
