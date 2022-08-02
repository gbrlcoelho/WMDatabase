import {Database} from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import migrations from './migrations/migrations'
import {TaskModel} from './model/taskModel'
import {schema} from './schema'

const adapter = new SQLiteAdapter({
  schema: schema,
  migrations: migrations,
  dbName: 'WMDatabase',
})

export const database = new Database({
  adapter,
  modelClasses: [TaskModel],
})
