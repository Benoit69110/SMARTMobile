const URL="http://10.0.2.2:8080/SMARTweb/ActionServlet"

export function addPlant(plantInfos){
    console.log("Add a plant with API")
    const data=JSON.stringify(plantInfos)
    console.log("data sent",data)
    return fetch(URL,
            {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type':'application/json',
                },
            }
        )
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
}

export function registerUser(userInfos){
    // userInfos={
    //     todo: "newUser",
    //     mail: "@mail3",
    //     password: "fieldPassword2",
    //     address: "fieldAddress2", 
    //     name: "fieldName2"
    // }
    console.log("Register a user with API")
    const data=JSON.stringify(userInfos)
    console.log("data sent",data)
    return fetch(URL,
            {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type':'application/json',
                },
            }
        )
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
}

export function signInUser(login,password){
    console.log("Sign in with the API")
    const data=JSON.stringify({
        todo: "authenticate",
        mail: login,
        password: password
    })
    console.log("data sent",data)
    return fetch(URL,
            {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type':'application/json',
                },
            }
        )
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
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

export function getPlant(idPlant){
    console.log("Get plant info the API")
    const data=JSON.stringify({
        todo: "getPlant",
        plantId: idPlant
    })
    console.log("data sent",data)
    return fetch(URL,
            {
                method: 'POST',
                body: data,
                headers: {
                    'Content-Type':'application/json',
                },
            }
        )
        .then((response)=>response.json())
        .catch((error)=>console.error(error))
}


export function getProfilePlant(idPlant){
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
            zip: '69110',
            city: 'ste foy',
            visibility: true,
            creationDate: '04/05/2022'
        })
    )
    .catch((error)=>console.error(error))
}

export function getNeedsPlant(idPlant){
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


export function addImageToPlant(urn,idPlant){
    // console.log(urn)
    console.log("Add image to plant")
    var img=urn.assets[0]
    var type=img.type
    type=type.split('/')[1]
    const data=JSON.stringify({
        todo: 'addImage',
        plantId: idPlant,
        type: img.type,
        image: img.base64
    })
    // console.log(data)
    const url=URL
    return fetch(
        url,
        {
            method: 'post',
            body: data,
            headers: {
                'Content-Type':'application/json',
            },
        }
    )
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}

export function getPlantImage(idPlant){
    console.log("Get image of a plant")
    const data=JSON.stringify({
        todo: 'getImage',
        plantId: idPlant,
    })
    // console.log(data)
    const url=URL
    return fetch(
        url,
        {
            method: 'post',
            body: data,
            headers: {
                'Content-Type':'application/json',
            },
        }
    )
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}

export function getLatestPlantImage(idPlant){
    console.log("Get Latest image of a plant")
    const data=JSON.stringify({
        todo: 'getLatestImages',
        plantId: idPlant,
    })
    // console.log(data)
    const url=URL
    return fetch(
        url,
        {
            method: 'post',
            body: data,
            headers: {
                'Content-Type':'application/json',
            },
        }
    )
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}