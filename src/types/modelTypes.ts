import Model from '@nozbe/watermelondb/Model'

export interface ITask extends Model {
  id: string
  name?: string
}

export interface ITasks {
  tasks: ITask[]
}
