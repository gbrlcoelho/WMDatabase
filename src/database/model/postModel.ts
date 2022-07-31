import {Model} from '@nozbe/watermelondb'
import {Associations} from '@nozbe/watermelondb/Model'
import {field, text, children} from '@nozbe/watermelondb/decorators'

export default class Post extends Model {
  static table = 'posts'
  static associations: Associations = {
    comments: {type: 'has_many', foreignKey: 'post_id'},
  }

  @text('title') title!: string
  @text('body') body!: string
  @field('is_pinned') isPinned!: boolean
  @children('comments') comments!: string
}
