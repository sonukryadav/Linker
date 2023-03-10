import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import Header from '../Components/Header';
import MyNetwork from '../Screens/MyNetwork';
import Posts from '../Screens/Posts';
import Jobs from '../Screens/Jobs';
import Notifications from '../Screens/Notifications';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'My Network') {
                        iconName = focused ? 'people-sharp' : 'people-outline';
                    } else if (route.name === 'Post') {
                        iconName = focused ? 'md-add-circle-sharp' : 'md-add-circle-outline';
                    } else if (route.name === 'Notifications') {
                        iconName = focused ? 'ios-notifications-sharp' : 'ios-notifications-outline';
                    } else if (route.name === 'Jobs') {
                        iconName = focused ? 'md-briefcase' : 'md-briefcase-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
            })
            }
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="My Network" component={MyNetwork} />
            <Tab.Screen name="Post" component={Posts} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Jobs" component={Jobs} />
        </Tab.Navigator>
    );
}

export default TabNavigation;
