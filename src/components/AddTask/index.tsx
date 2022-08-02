import React, {useState} from 'react'
import {Text} from 'react-native'
import {database} from '../../database'
import {TaskModel} from '../../database/model/taskModel'
import {AddTaskButton, ContainerAddTask, CustomInput} from './styles'

export const AddTask = () => {
  const [taskName, setTaskName] = useState('')

  const handleAddTask = async () => {
    await database.write(async () => {
      await database.get<TaskModel>('tasks').create((task) => {
        task.name = taskName
      })
    })
    setTaskName('')
  }

  return (
    <ContainerAddTask>
      <CustomInput placeholder='Nome da Tarefa' value={taskName} onChangeText={setTaskName} />
      <AddTaskButton activeOpacity={0.6} onPress={handleAddTask}>
        <Text>Adicionar Tarefa</Text>
      </AddTaskButton>
    </ContainerAddTask>
  )
}
