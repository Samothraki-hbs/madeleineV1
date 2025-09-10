import { useLocalSearchParams, router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function UserProfileScreen(){
    const { userId } = useLocalSearchParams<{userId: string}>();

    return(
        <View>
            <Text>Profil</Text>
            <Text>userId : {userId} </Text>
            <Button title = "Retour" onPress={ () => router.back()} />
        </View>

    )
}