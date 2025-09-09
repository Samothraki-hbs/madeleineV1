import { View, Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";

const ProfilsPage = () => {
    const user = auth().currentUser;
    return(
        <View>
            <Button title="Logout" onPress={auth().signOut} />
        </View>
    )
}

export default ProfilsPage;