import * as Location from 'expo-location';

const MyCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        setErrorMsg('Permission to access location was denied');
        return;
    }
    let location = await Location.requestForegroundPermissionsAsync();
    console.log(location);
}


export default MyCurrentLocation;