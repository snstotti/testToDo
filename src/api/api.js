const BASE_URL = "http://localhost:3000/"
const TASK_URL = `${BASE_URL}tasks/`

 class TaskApi {
    async getTasks(){
        const response = await fetch(TASK_URL)

        const data = await response.json()
        return data
    }
    async postTask(data){
        await fetch(TASK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            })
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
}

export default TaskApi