export function addPlant(plantInfos){
    console.log("Add a plant with API")

     const url="http://192.168.020/ActionServlet"
     return fetch(
         url,
         {
            method: 'post',
            data: {
               todo: "getPlant"
            }
             headers: {
                 'Content-Type':'application/json',
             },
         }
     )
     .then((response)=>response.json())
     .catch((error)=>console.error(error))


    /*var res = Math.random();
    if (res <= 0.5){
        res=0
    }else{
        res= 1
    }
    return res;*/
}