import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type WeatherScreenProps = {
    route: RouteProp<MainStackParamList, "Two">,
    navigation: FrameNavigationProp<MainStackParamList, "Two">,
};

export function WeatherScreen({ navigation }: WeatherScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <flexboxLayout style={styles.header}>
                <label style={styles.greeting}>Olá User,</label>
                <label style={styles.subtitle}>Descubra o clima</label>
                <button style={styles.languageButton}>🌐</button>
            </flexboxLayout>

            <button className="bg-[#6B4EE6] text-white py-4 px-8 rounded-full my-4">
                Pesquise por uma cidade
            </button>

            <label style={styles.sectionTitle}>Ao redor do mundo</label>

            {[1, 2, 3].map((index) => (
                <flexboxLayout key={index} style={styles.weatherCard}>
                    <flexboxLayout style={styles.weatherInfo}>
                        <label style={styles.countryLabel}>País</label>
                        <label style={styles.cityLabel}>Cidade</label>
                        <label style={styles.weatherStatus}>Clear</label>
                    </flexboxLayout>
                    <label style={styles.temperature}>x°C</label>
                </flexboxLayout>
            ))}
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 20
    },
    greeting: {
        fontSize: 24,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 18,
        color: "#666"
    },
    languageButton: {
        fontSize: 24,
        backgroundColor: "transparent"
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10
    },
    weatherCard: {
        backgroundColor: "#6B4EE6",
        borderRadius: 15,
        padding: 20,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    weatherInfo: {
        gap: 5
    },
    countryLabel: {
        color: "white",
        fontSize: 14,
        opacity: 0.8
    },
    cityLabel: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    weatherStatus: {
        color: "white",
        fontSize: 16
    },
    temperature: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    }
});