import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import colors from "../../styles/colors";

export function Opcoes({ opcao }) {
    return (
        <View style={styles.opcao}>
            <Image source={opcao.icone} />
            <Text style={styles.title}>{opcao.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    opcao: {
        height: 110,
        width: 110,
        backgroundColor: colors.gray[500],
        marginHorizontal: 8,
        borderRadius: 10,
        padding: 16,
    },
    title: {
        // fontWeight: "bold",
        // fontSize: 22,
        // color: "#fff",
        marginTop: 37,
    },
});
