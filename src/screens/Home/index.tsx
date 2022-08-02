import React from 'react'
import {database} from '../../database'
import {Container} from './styles'
import withObservables from '@nozbe/with-observables'
import {TaskList} from '../../components/TaskList'

const db = database.collections.get('tasks')
const observeTasks = () => db.query().observe()

const enhancedWithTasks = withObservables([], () => ({
  tasks: observeTasks(),
}))

const TaskListRender = enhancedWithTasks(TaskList)

export const Home = () => {
  return (
    <Container>
      <TaskListRender />
    </Container>
  )
}
