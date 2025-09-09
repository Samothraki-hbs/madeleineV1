import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";

const ProfilsPage = () => {
    const user = auth().currentUser;
    return(
        <View>
            <Text> Ceci est la page des profils </Text>
        </View>
    )
}

export default ProfilsPage;