import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from '../Screens/Groups';
import Events from '../Screens/Events';
import Premium from '../Screens/Premium';
import Settings from '../Screens/Settings';
import DrawerNavigation from './DrawerNavigation';
import AboutUserProfile from '../Screens/AboutUserProfile';


const NativeStack = createNativeStackNavigator();

const NativeStackNavigation = () => {
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
