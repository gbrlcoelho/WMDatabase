import {Model} from '@nozbe/watermelondb'
import {Associations} from '@nozbe/watermelondb/Model'

export default class Comment extends Model {
  static table = 'comments'
  static associations: Associations = {
    posts: {type: 'belongs_to', key: 'post_id'},
  }
}
