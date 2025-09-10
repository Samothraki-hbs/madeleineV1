import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';


const LayoutProfils = () => {
    return(

            <Stack>
                <Stack.Screen name="/proches/" options={{ title: "Mes amis" }} />
                <Stack.Screen name="/archives" options={{ title: "Mes archives" }} />
            </Stack>
    );
}

export default LayoutProfils;