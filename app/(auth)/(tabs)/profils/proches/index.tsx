import { View, Text, Button, Modal } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import auth from "@react-native-firebase/auth";

const AmisPage = () => {
    const user = auth().currentUser;
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <Text> Ceci est mon écran Amis </Text>
            <Link href={{ pathname: "/news/[newsId]", params: { newsId: "42", authorId: "louise" } }}>
                Ouvrir la news 42 (auteur louise)
            </Link>
            <Link href="/(auth)/(tabs)/profils/proches/ajouterAmi" push asChild>
                <Button title = "ouvrir la page pour ajouter un ami " />
            </Link>
        </View>
    );
}

export default AmisPage;