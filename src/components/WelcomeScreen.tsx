import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type WelcomeScreenProps = {
    route: RouteProp<MainStackParamList, "One">,
    navigation: FrameNavigationProp<MainStackParamList, "One">,
};

export function WelcomeScreen({ navigation }: WelcomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <flexboxLayout style={styles.card}>
                <label style={styles.title}>
                    Veja como está o tempo ao redor do mundo 🌍
                </label>
                <label style={styles.subtitle}>
                    Comece agora gratuitamente
                </label>
                <button
                    className="bg-[#6B4EE6] text-white py-4 px-8 rounded-full"
                    onTap={() => navigation.navigate("Weather")}
                >
                    Vamos lá
                </button>
                <flexboxLayout style={styles.loginContainer}>
                    <label>Já tem uma conta? </label>
                    <button style={styles.loginButton}>Log in</button>
                </flexboxLayout>
            </flexboxLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#6B4EE6",
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        width: "100%",
        alignItems: "center",
        gap: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlignment: "center"
    },
    subtitle: {
        fontSize: 16,
        color: "#666"
    },
    loginContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    loginButton: {
        color: "#6B4EE6",
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "transparent"
    }
});