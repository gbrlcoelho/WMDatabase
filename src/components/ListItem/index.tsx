import React from 'react'
import {database} from '../../database'
import {TaskModel} from '../../database/model/taskModel'
import {ITask} from '../../types/modelTypes'
import {Button, ListItemContainer, Title, ButtonsView} from './styles'
import {ListItemProps} from './types'
import withObservables from '@nozbe/with-observables'

const RawListItem = ({tasks}: ListItemProps) => {
  const handleDelete = async () => {
    await database.write(async () => {
      const task = await database.get('tasks').find(tasks.id)
      await task.destroyPermanently()
    })
  }

  const handleUpdate = async () => {
    await database.write(async () => {
      const task: ITask = await database.get('tasks').find(tasks.id)
      await task.update(() => {
        task.name = 'Finalizado!'
      })
    })
  }

  return (
    <>
      <ListItemContainer>
        <Title>{tasks.name}</Title>
        <ButtonsView>
          <Button backgroundColor='#DC3545' onPress={handleDelete}>
            <Title>Deletar</Title>
          </Button>
          <Button backgroundColor='#28A745' onPress={handleUpdate}>
            <Title>Editar</Title>
          </Button>
        </ButtonsView>
      </ListItemContainer>
    </>
  )
}

export const ListItem = withObservables(['tasks'], ({tasks}) => ({
  tasks,
}))(RawListItem)
