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

    const url=URL//+"?todo=getPlant&arduinoNumber=1002105"
    const data=JSON.stringify({
        todo: 'newPlant',
        arduinoNumber: '12346'
    })
    return fetch(url,
        {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type':'application/json',
            },
        }
    )
    .then((response)=>console.log(response.status))
    .catch((error)=>console.error(error))

}

export function getProfilePlant(arduinoNumber){
    return fetch("https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=fd297d03-bf72-40c7-b27e-24cc7023360c",
        // {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type':'application/json',
        //     },
        // }
    )
    .then((response)=> ({
            customizeName:"myPlant",
            deviceId: '100205',
            address: '73 bd des provinces',
            zip: '69110'
        })
    )
    .catch((error)=>console.error(error))
}

export function getNeedsPlant(arduinoNumber){
    return fetch("https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=fd297d03-bf72-40c7-b27e-24cc7023360c",
        // {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type':'application/json',
        //     },
        // }
    )
    .then((response)=> ({
            commonName: "common Name 123",
            botanicalName: 'botanical Name',
            maintenance: 'low'
        })
    )
    .catch((error)=>console.error(error))
}