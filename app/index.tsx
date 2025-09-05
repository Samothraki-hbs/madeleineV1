import { View, Text, StyleSheet, KeyboardAvoidingView, Button, TextInput, ActivityIndicator } from "react-native";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";

export default function Index() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const signUp = async() => {
        setLoading(true);
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            alert("Account created successfully");
        } catch (e:any) {
          const err = e as FirebaseError; 
          alert("Registration Failed" + err.message);
        } finally {
            setLoading(false);
        }
    }

    const signIn = async () => {
        setLoading(true);
        try {
            await auth().signInWithEmailAndPassword(email, password);
            alert("Login successful");
        } catch (e:any) {
            const err = e as FirebaseError;
            alert("Login Failed" + err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
                <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} />
                {loading ? (
                    <ActivityIndicator size={"small"} style={{ margin : 28}} />
                ):(
                    <>
                    <Button title="Login" onPress={signIn} />
                    <Button title="Create Account" onPress={signUp} />
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 20,
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#fff",
    },
    button: {
        width: "80%",
        height: 40,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
});