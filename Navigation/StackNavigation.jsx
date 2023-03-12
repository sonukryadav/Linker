import React, { useContext, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from '../Screens/Groups';
import Events from '../Screens/Events';
import Premium from '../Screens/Premium';
import Settings from '../Screens/Settings';
import DrawerNavigation from './DrawerNavigation';
import AboutUserProfile from '../Screens/AboutUserProfile';
import { MyContext1 } from '../Contexts/Context1';
import MyCurrentLocation from '../Logics/MyCurrentLocation';


const NativeStack = createNativeStackNavigator();

const NativeStackNavigation = () => {

    const { location, setLocation } = useContext(MyContext1);

    let MyLocation = async () => {
        try {
            const coordinate = await MyCurrentLocation();
            console.log(coordinate);
            console.log(location);
            // setLocation(coordinate);
        } catch (err) {
            console.log(err + " ---: error in MyLocation function.")
        }
    }

    useEffect(() => {
        MyLocation();
        // console.log(coordinate ,"nnnnnnnnnnnn");
        // setLocation(coordinate);
        // generalExecuteSql(db, `INSERT INTO ${tbl} (location, locate) VALUES (?, ?)`, [coordinate, 0])
        //   .then((tx) => {
        //     console.log("Successfully inserted data to table :---->", tx);

        //     generalExecuteSql(db, `SELECT * FROM ${tbl}`)
        //       .then((data) => {
        //         console.log("Table data :----> ", data?.rows?._array);
        //       })
        //       .catch((err) => console.log("Failed in retrieving table data", data));
        //   })
        //   .catch((err) => console.log("Failure while inserting data to table :--->", err));
    }, []);
    return (
        <NativeStack.Navigator>
            <NativeStack.Screen name="First1" component={DrawerNavigation} options={{ headerShown: false }} />
            <NativeStack.Screen name="AboutUserProfile" component={AboutUserProfile} options={{ headerShown: true }} />
            <NativeStack.Screen name="Groups" component={Groups} options={{ headerShown: true }} />
            <NativeStack.Screen name="Events" component={Events} options={{ headerShown: true }} />
            <NativeStack.Screen name="Premium" component={Premium} options={{ headerShown: true }} />
            <NativeStack.Screen name="Settings" component={Settings} options={{ headerShown: true }} />
        </NativeStack.Navigator>
    )
}

export default NativeStackNavigation;
