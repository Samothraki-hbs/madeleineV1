import { View, Text, Button, Modal, TouchableOpacity, FlatList } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import auth from "@react-native-firebase/auth";

const AjouterAmi = () => {
    const user = auth().currentUser;
    const proches = [
        { pseudo : "louise"},
        { pseudo : "maeva"},
        { pseudo : "gregoire" },
        { pseudo: "corentin" },
    ];

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <Text> Ceci est mon écran pour ajouter mes amis </Text>

        <FlatList 
        data={proches} 
        keyExtractor={(item)=>item.pseudo}
        renderItem={({ item }) => (
        <Link
            href={{ pathname: "/profils/proches/[pseudo]", params: {pseudo: item.pseudo}}}
            asChild
        >
            <TouchableOpacity>
                <Text>{item.pseudo}</Text>
            </TouchableOpacity>

        </Link>
        )}
        />
    </View>
    );
}

export default AjouterAmi;