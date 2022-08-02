import React from 'react'
import {FlatList} from 'react-native'
import {ITasks} from '../../types/modelTypes'
import {AddTask} from '../AddTask'
import {ListItem} from '../ListItem'

export const TaskList = ({tasks}: ITasks) => {
  return (
    <>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ListItem tasks={item} />}
        ListHeaderComponent={() => <AddTask />}
      />
    </>
  )
}
