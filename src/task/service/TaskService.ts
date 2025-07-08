import type ApiResponseItemsInterface from '@/shared/api/ApiResponseItemsInterface.ts'
import { globalApi as api } from '@/shared/api/Api.ts'
import TaskModel from '@/task/model/TaskModel.ts'
import { useRepo } from 'pinia-orm'

class TaskService {
  public async fetch() {
    try {
      const responseData = (await api.get<ApiResponseItemsInterface>('/tasks')).data

      this.save(responseData['member'].map((item) => new TaskModel(item)))
    } catch (error) {
      throw error
    }
  }

  public save(trades: TaskModel[] | TaskModel): TaskModel {
    const store = useRepo(TaskModel)

    return store.save(trades)
  }
}

export default TaskService
