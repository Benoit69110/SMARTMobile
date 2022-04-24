// API/PlantNetApi.js
const API_TOKEN="2b10l9jIdaolXbVMmbUhXdrw";
const URL="https://my-api.plantnet.org/v2/identify/all?api-key="
export function getPlantsFromApiWithPictureGet(uri){
    console.log("GET request")
    const url=URL+API_TOKEN+"&images=https%3A%2F%2Fmy.plantnet.org%2Fimages%2Fimage_1.jpeg&images=https%3A%2F%2Fmy.plantnet.org%2Fimages%2Fimage_2.jpeg&organs=flower&organs=leaf"
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}


export function getPlantsFromApiWithPicture(urn){
    // console.log(urn)
    var img=urn.assets[0]
    const formdata=new FormData()
    formdata.append('images',{
        uri: img.uri,
        type: img.type,
        name: img.fileName
    })
    const url=URL+API_TOKEN+"&include-related-images=true&no-reject=false"
    return fetch(
        url,
        {
            method: 'post',
            body: formdata,
            headers: {
                'Content-Type':'multipart/form-data',
            },
        }
    )
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
}
