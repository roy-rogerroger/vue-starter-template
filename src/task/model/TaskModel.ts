import { Model } from 'pinia-orm'

class TaskModel extends Model {
  static entity = 'task'

  static fields() {
    return {
      id: this.uid(),
      name: this.string(''),
      email: this.string(''),
    }
  }

  declare id: string
  declare name: string
  declare email: string
}

export default TaskModel
