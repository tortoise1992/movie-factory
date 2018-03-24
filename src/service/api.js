const request=(url,playload)=>{
    return new Promise((resolve,reject)=>{
        fetch(url,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(playload)
        }).then(response=>{
            resolve(response)
        }).catch(err=>{
            reject(err)
        })
    })
}

export default request