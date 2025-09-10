import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ProfilProche(){
    const { pseudo } = useLocalSearchParams<{ pseudo: string}>();

    return (
        <View>
            <Text>
                Profil de {pseudo}
            </Text>
        </View>
    )
}

