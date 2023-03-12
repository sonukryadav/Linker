import * as Location from 'expo-location';
import {AsyncSet} from "../AsyncStorage/AsyncStorage"

const MyCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        setErrorMsg('Permission to access location was denied');
        return;
    }
    let location1 = await Location.getCurrentPositionAsync({});
    // console.log(location.coords.latitude);
    // console.log(location.coords.longitude);

    let location = {
        latitude: location1.coords.latitude || 0,
        longitude: location1.coords.longitude || 0
    }

    AsyncSet("Location", location);

    return (location);
}

export default MyCurrentLocation;