import { View, Text, Button, Modal } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import auth from "@react-native-firebase/auth";

const ArchivesPage = () => {
    const user = auth().currentUser;
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <Text> Ceci est mon écran Archives </Text>

        </View>
    )
}

export default ArchivesPage;