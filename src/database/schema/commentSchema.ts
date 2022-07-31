import {tableSchema} from '@nozbe/watermelondb'

const commentsSchema = tableSchema({
  name: 'comments',
  columns: [
    {name: 'body', type: 'string'},
    {name: 'post_id', type: 'string', isIndexed: true},
  ],
})

export default commentsSchema
