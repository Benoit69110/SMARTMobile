const URL="http://10.0.2.2:8080/SMARTweb/ActionServlet"

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


export function testApi(){
    console.log("Test Plant if API")

    const url=URL+"?todo=getPlant&arduinoNumber=1002105"
    return fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
        }
    )
    .then((response)=>response.text())
    .catch((error)=>console.error(error))

}

export function getProfilePlant(arduinoNumber){
    return ({
        customizeName:"myPlant",
        deviceId: 100205,
        address: '73 bd des provinces',
        zip: 69110
    })
}

export function getNeedsPlant(arduinoNumber){
    return ({
        customizeName:"myPlant",
        deviceId: 100205,
        address: '73 bd des provinces',
        zip: 69110
    })
}