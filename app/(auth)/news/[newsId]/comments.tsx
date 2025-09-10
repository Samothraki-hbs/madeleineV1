import { useLocalSearchParams, router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function NewsCommentsScreen() {
    const { newsId } = useLocalSearchParams<{ newsId : string}>();

    return(
        <View>
            <Text>newsId : {(newsId)}</Text>
            <Text>Commentaire 1</Text>
            <Text>Commentaire 2</Text>

            <Button title="Retour" onPress={()=>router.back()} />

        </View>


    );
}
