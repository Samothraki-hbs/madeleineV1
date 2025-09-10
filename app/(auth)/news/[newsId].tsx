import { useLocalSearchParams, Link, router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function NewsDetailScreen(){
    const { newsId, authorId } = useLocalSearchParams<{ newsId: string; authorId?: string}>();

    const targetUserId = authorId || "demo-user-123";

    return(
        <View>
            <Text>Nouvelle</Text>
            <Text>newsId: {(newsId)}</Text>

            <Link href={{pathname:"/news/[newsId]/comments", params:{newsId}}}>
            Voir les commentaires
            </Link>

            <Link href={{ pathname: "/users/[userId]", params:{ userId: targetUserId } }}>
            
            Voir le profil de l'auteur
            </Link>

            <Button title="Retour" onPress={() => router.back()}/>

        </View>

       
    )
}