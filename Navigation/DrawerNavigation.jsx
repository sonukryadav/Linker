import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
    const { navigation } = props;
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}>
            <View style={{ flex: 1 }}>
                <DrawerItem
                    label={() => (
                        <View>
                            <Image source={{ uri: `https://sonukr.in/assests/sonu-tree-bg-blur-color.png` }} style={{ height: 60, width: 60, borderRadius: 30 }} />
                            <Text style={{ fontSize: 18, fontWeight: "800" }}>Sonu Kumar Yadav</Text>
                            <Text style={{ marginTop: 7 }}>View profile</Text>
                            <Text style={{ fontSize: 15, marginTop: 22 }}><Text style={{ fontWeight: 700 }}>120</Text> profile views</Text>
                        </View>
                    )}
                    onPress={() => navigation.navigate("AboutUserProfile")}
                />
                <View style={{ borderBottomWidth: 0.5, borderColor: "gray", marginBottom: 30 }}></View>

                {/* <DrawerItemList {...props} /> */}
                <DrawerItem
                    label={() => (
                        <View>
                            <Text>Go to Home</Text>
                        </View>
                    )}
                    onPress={() => navigation.navigate("Go to Home")}
                />
                <DrawerItem {...props}
                    label={() => (<Text>Groups</Text>)}
                    onPress={() => navigation.navigate("Groups")}
                />
                <DrawerItem
                    label={() => (
                        <View>
                            <Text>Events</Text>
                        </View>
                    )}
                    onPress={() => navigation.navigate("Events")}
                />
            </View>

            <View style={{ borderBottomWidth: 0.5, borderColor: "gray", marginBottom: 15 }}></View>

            <View style={{}}>
                <DrawerItem
                    icon={({ focused, color, size }) => <Ionicons style={{ marginRight: -25 }} color={color} size={25} name={focused ? 'heart' : 'heart-outline'} />}
                    label={() => (
                        <Text>Try premium for free</Text>
                    )}
                    onPress={() => navigation.navigate("Premium")}
                />
                <DrawerItem
                    icon={({ focused, color, size }) => <Ionicons style={{ marginRight: -25 }} color={color} size={25} name={focused ? 'settings' : 'settings-outline'} />}
                    label={() => (
                        <Text>Setting</Text>
                    )}
                    onPress={() => navigation.navigate("Settings")}
                />
            </View>
        </DrawerContentScrollView>
    );
}

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerPosition: "left",
                drawerType: "back",
            }}
            defaultStatus={"closed"}
            drawerContent={(props) => (<CustomDrawerContent {...props} />)}
        >
            <Drawer.Screen name="Go to Home" component={TabNavigation} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;
