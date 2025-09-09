import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';


const Layout = () => {
    return(

            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "black",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                }}
            >
                <Tabs.Screen 
                name="home"
                options={{title: "Activité", tabBarIcon: ({ focused }) => <FontAwesome5 name="clock" size={24} color={focused ? "black" : "gray"} />}} />
                <Tabs.Screen 
                name="profils"
                options={{title: "Mon profil", tabBarIcon: ({ focused }) => <Ionicons name="person-circle-outline" size={24} color={focused ? "black" : "gray" } />}} />
                <Tabs.Screen 
                name="albums"
                options={{title: "Mes albums", tabBarIcon: ({ focused }) => <FontAwesome5 name="folder" size={24} color={focused ? "black" : "gray"} />}} />
            </Tabs>
    )
}

export default Layout;