import { getDistance, convertDistance } from 'geolib';
import { AsyncGet } from "../AsyncStorage/AsyncStorage"


const distanceInKm = async (coord2 = {
    "latitude": 28.7041,
    "longitude": 77.1025
}) => {
    let coord1 = await AsyncGet("Location");
    let value = getDistance(coord1, coord2);
    let disk = convertDistance(value, "km");
    // console.log(disk);
    return disk;
}


export { distanceInKm };
