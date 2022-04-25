export function addPlant(plantInfos){
    console.log("Add a plant with API")

    // const url="http://monServeur.com/addPlant"
    // return fetch(
    //     url,
    //     {
    //         method: 'post',
    //         body: plantInfos,
    //         headers: {
    //             'Content-Type':'application/json',
    //         },
    //     }
    // )
    // .then((response)=>response.json())
    // .catch((error)=>console.error(error))


    var res = Math.random();
    if (res <= 0.5){
        res=0
    }else{
        res= 1
    }
    return res;
}

export function getPlantLibrary(){
    console.log("Get the plant library")

    // const url="http://monServeur.com/getPlantLibrary"
    // return fetch(
    //     url,
    //     {
    //         method: 'get',
    //         headers: {
    //             'Content-Type':'application/json',
    //         },
    //     }
    // )
    // .then((response)=>response.json())
    // .catch((error)=>console.error(error))


    var res = Math.random();
    if (res <= 0.5){
        res=0
    }else{
        res= 1
    }
    return res;
}

export function getPlantInfos(plantId){
    console.log("Get plant infos")

    // const url="http://monServeur.com/getPlantInfos"
    // return fetch(
    //     url,
    //     {
    //         method: 'post',
    //         body: plantId,
    //         headers: {
    //             'Content-Type':'application/json',
    //         },
    //     }
    // )
    // .then((response)=>response.json())
    // .catch((error)=>console.error(error))


    var res = Math.random();
    if (res <= 0.5){
        res=0
    }else{
        res= 1
    }
    return res;
}

export function modifyPlantInfos(plantInfos){
    console.log("Modify plant infos")

    // const url="http://monServeur.com/getPlantInfos"
    // return fetch(
    //     url,
    //     {
    //         method: 'post',
    //         body: plantInfos,
    //         headers: {
    //             'Content-Type':'application/json',
    //         },
    //     }
    // )
    // .then((response)=>response.json())
    // .catch((error)=>console.error(error))


    var res = Math.random();
    if (res <= 0.5){
        res=0
    }else{
        res= 1
    }
    return res;
}

