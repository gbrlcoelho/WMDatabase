import {Database} from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import migrations from './migrations/migrations'
import Comment from './model/commentModel'
import Post from './model/postModel'
import schema from './schema'

const adapter = new SQLiteAdapter({
  schema,
  migrations,
})

export const database = new Database({
  adapter,
  modelClasses: [Post, Comment],
})
