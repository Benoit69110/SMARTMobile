export function addPlant(plantInfos){
    console.log("Add a plant with API")

     const url="http://192.168.56.1/ActionServlet"
     return fetch(
         url,
         {
            method: 'post',
            data: {
               todo: "getPlant"
            },
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

export function getDeadPlantLibrary(mail){
    console.log("Get dead plant library")

     const url="http://192.168.56.1/ActionServlet"
     return fetch(
         url,
         {
            method: 'post',
            data: {
               todo: 'listDeadPlants',
               userMail: mail
            },
             headers: {
                 'Content-Type':'application/json',
             },
         }
     )
     .then((response)=>response.json())
     .catch((error)=>console.error(error))
    /*data=[
      {
        key: require('../assets/fleur.jpg'),
        id: "1230"
      }
    ]
    return (data);*/
}

export function getAlivePlantLibrary(mail){
    console.log("Get alive plant library")

     const url="http://192.168.020/ActionServlet"
     return fetch(
         url,
         {
            method: 'post',
            data: {
               todo: "listAlivePlants",
               userMail: mail
            },
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
    /*data=[
      {
        key: require('../assets/plante.jpg'),
        id: "1300"
      }
    ]
    return (data);*/
}