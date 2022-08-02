import {tableSchema} from '@nozbe/watermelondb/Schema'

export const taskSchema = tableSchema({
  name: 'tasks',
  columns: [{name: 'name', type: 'string'}],
})
