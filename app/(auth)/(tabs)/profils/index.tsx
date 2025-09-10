import { View, Text, Button, Modal } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import auth from "@react-native-firebase/auth";

const ProfilsPage = () => {
    const router = useRouter();

    return(
        <View>

            <Link href = "/profils/archives" push asChild>
                <Button title ="Ouvrir la page archives" />
            </Link>

            <Link href = "/profils/proches" push asChild>
                <Button title="Ouvrir la page de mes amis" />
            </Link>

        </View>
    );
}

export default ProfilsPage;