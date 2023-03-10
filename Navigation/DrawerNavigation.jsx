import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();


function CustomDrawerContent({ ...props }) {
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
                    onPress={() => navigation.navigate("Home")}
                />
                <View style={{ borderBottomWidth: 0.5, borderColor: "gray", marginBottom: 30 }}></View>

                <DrawerItemList {...props} />
                <DrawerItem {...props}
                    label={() => (<Text>Groups</Text>)}
                    onPress={() => navigation.navigate("Home")}
                />
                <DrawerItem
                    label={() => (
                        <View>
                            <Text>Events</Text>
                        </View>
                    )}
                    onPress={() => navigation.navigate("Home")}
                />
            </View>

            <View style={{ borderBottomWidth: 0.5, borderColor: "gray", marginBottom: 15 }}></View>

            <View style={{}}>
                <DrawerItem
                    icon={({ focused, color, size }) => <Ionicons style={{ marginRight: -25 }} color={color} size={25} name={focused ? 'heart' : 'heart-outline'} />}
                    label={() => (
                        <Text>Try premium for free</Text>
                    )}
                    onPress={() => navigation.navigate("Home")}
                />
                <DrawerItem
                    icon={({ focused, color, size }) => <Ionicons style={{ marginRight: -25 }} color={color} size={25} name={focused ? 'settings' : 'settings-outline'} />}
                    label={() => (
                        <Text>Setting</Text>
                    )}
                    onPress={() => navigation.navigate("Home")}
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
            <Drawer.Screen name="Home" component={TabNavigation} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation;
