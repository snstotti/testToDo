import { fetchGet, fetchPost } from "../helpers/helpers"

const BASE_URL = "http://localhost:3000/"
const TASK_URL = `${BASE_URL}tasks/`
const COMPLETED_TASK_URL = `${BASE_URL}completedTask/`
const DELETED_TASK_URL = `${BASE_URL}deletedTask/`

 class TaskApi {
    
    async getTasks(){
        return await fetchGet(TASK_URL)
    }
    async postTask(data){
        await fetchPost(TASK_URL, data)
    }
    async putTask(data){
        await fetch(`${TASK_URL}${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    async deleteTask(id){
        await fetch(`${TASK_URL}${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null
            })
    }
    async getTaskCompleted(){
        return await fetchGet(COMPLETED_TASK_URL)
    }
    async getTaskDeleted(){
        return await fetchGet(DELETED_TASK_URL)
    }
    async deletedTask(data){
        await this.deleteTask(data.id)
        await fetchPost(DELETED_TASK_URL, data)
    } 
    async completedTask(data){
        await this.deleteTask(data.id)
        await fetchPost(COMPLETED_TASK_URL, data)
    }
}

export default TaskApi