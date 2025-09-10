import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";

const AlbumPage = () => {
    const user = auth().currentUser;
    return(
        <View>
             <Text> Ceci est la page d'albums </Text>
        </View>
    )
}

export default AlbumPage;