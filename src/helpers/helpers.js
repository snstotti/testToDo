export  const fetchPost = async (url,data)=>{
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}
export  const fetchGet = async (url)=>{
    const response = await fetch(url)
    return await response.json()
}