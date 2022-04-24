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