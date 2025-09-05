import { Stack, useRouter, useSegments } from "expo-router";
import { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const router = useRouter();
    const segments = useSegments();

    const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        console.log("onAuthStateChanged", user);
        setUser(user);
        if (initializing) setInitializing(false);
    }


    useEffect(() => {
        const suscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return suscriber;
    }, []);

    useEffect(() => {
        if (initializing) return;

        const inAuthGroup = segments[0] === "(auth)";

        if (user && !inAuthGroup) {
            router.replace("/home");
        } else if (!user && inAuthGroup) {
            router.replace("/");
        }
    }, [user, initializing]);

    if (initializing) return(
        <View>
            <ActivityIndicator size={"small"} style={{ margin : 28}} />
        </View>
    )

    return (
        <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
    );
}