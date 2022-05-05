import { getLatestPlantImage } from "../API/PlantIFApi";

export function getLatestImage(plantId){
    console.log(getLatestPlantImage(plantId))
    /*.then(response=>{
        // console.log(response)
        var base64Icon = 'data:image/png;base64,'+response.image.data;
        return(base64Icon)
    })*/
}