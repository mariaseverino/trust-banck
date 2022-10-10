import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Categoria({ name }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[500],
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 8,
        marginRight: 12,
    },
    title: {
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.gray[300],
    },
});
