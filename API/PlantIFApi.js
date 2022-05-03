export function addPlant(plantInfos){
    console.log("Add a plant with API")

     /*const url="http://192.168.020/ActionServlet"
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
     .catch((error)=>console.error(error))*/


    var res = Math.random();
    if (res <= 0.5){
        res=0
    }else{
        res= 1
    }
    return res;
}

export function getDeadPlantLibrary(mail){
    console.log("Get dead plant library")

     /*const url="http://192.168.56.1/ActionServlet"
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
     .catch((error)=>console.error(error))*/
    data=[
      {
        key: require('../assets/fleur.jpg'),
        id: "1230"
      }
    ]
    return (data);
}

export function getAlivePlantLibrary(mail){
    console.log("Get alive plant library")

     /*const url="http://192.168.020/ActionServlet"
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
     .catch((error)=>console.error(error))*/


    /*var res = Math.random();
    if (res <= 0.5){
        res=0
    }else{
        res= 1
    }
    return res;*/
   markers = [
         {
           key: "Hi",
           latlng:  {
                latitude: 45.771944,
                longitude: 4.90,
                latituteDelta: 0.01,
                longitudeDelta: 0.01
           },
           title: "Mayarachide",
           type_plante: "Orchidée",
           photo: "../assets/plante.jpg",
           humeur: "Happy"
         },
    ]
    return (markers);
}

export function getVisiblePlants(mail){
    console.log("Get visible plants")

     /*const url="http://192.168.020/ActionServlet"
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
     .catch((error)=>console.error(error))*/


    /*var res = Math.random();
    if (res <= 0.5){
        res=0
    }else{
        res= 1
    }
    return res;*/
    markers = [
         {
           key: "Hi",
           latlng:  {
                latitude: 45.771944,
                longitude: 4.86,
                latituteDelta: 0.01,
                longitudeDelta: 0.01
           },
           title: "Mayarachide",
           type_plante: "Orchidée",
           photo: "../assets/plante.jpg",
           humeur: "Happy",
           isAlive: "yes"
         },
         {
            key: "Hii",
            latlng:  {
                latitude: 45.771944,
                longitude: 4.93,
                latituteDelta: 0.01,
                longitudeDelta: 0.01
            },
            title: "Benoit le renoi",
            type_plante: "Orchidée",
            photo: '../assets/fleur.jpg',
            humeur: "Dead",
            isAlive: "no"
         },
         {
           key: "Hiii",
           latlng:  {
                latitude: 45.771944,
                longitude: 4.8,
                latituteDelta: 0.01,
                longitudeDelta: 0.01
           },
            title: "Hello",
            type_plante: "Rose rouge",
            photo: "../assets/plant.jpg",
            humeur: "Sad",
            isAlive: "yes"
         },
       ]
    return (markers);
}
