import {appSchema} from '@nozbe/watermelondb/Schema'
import commentsSchema from './commentSchema'
import postSchema from './postSchema'

export default appSchema({
  version: 1,
  tables: [commentsSchema, postSchema],
})
