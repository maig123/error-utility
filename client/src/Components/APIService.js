export default class APIService{
    // Insert an article
    static InsertErrorInfo(body){
        return fetch(`/control`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}