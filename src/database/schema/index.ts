import {appSchema} from '@nozbe/watermelondb/Schema'
import {taskSchema} from './taskSchema'

export const schema = appSchema({
  version: 1,
  tables: [taskSchema],
})
