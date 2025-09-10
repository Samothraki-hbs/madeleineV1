import { Stack } from "expo-router";
import { Tabs } from "expo-router";
import { View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';


const LayoutProches = () => {
    return(

            <Stack>
                <Stack.Screen name="/ajouterAmi" options={{ title: "Ajouter un ami (modal)" }} />
            </Stack>
    );
}

export default LayoutProches;