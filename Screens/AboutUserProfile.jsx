import React from 'react';
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../Components/Header';

const AboutUserProfile = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                {/* <Header navigation={navigation} /> */}
                <View style={{ alignItems: "center" }}>
                    <Text>About User Profile</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AboutUserProfile;
