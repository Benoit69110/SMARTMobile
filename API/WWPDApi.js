const URL="https://www.data.qld.gov.au/api/3/action/datastore_search?resource_id=fd297d03-bf72-40c7-b27e-24cc7023360c"

export function getPlantCaracteristic(plantName){
    console.log("name searched",plantName)
    // plantName="taraxacum"
    param="&q="+plantName

    return fetch(URL+param)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}