import * as Location from 'expo-location';

const MyCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
        setErrorMsg('Permission to access location was denied');
        return;
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log(location.coords.latitude);
    console.log(location.coords.longitude);
}


export default MyCurrentLocation;