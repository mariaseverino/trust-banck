import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function AcoesCartao({ acao }) {
    return (
        <View style={styles.container}>
            <Ionicons
                name={acao.icone}
                color={colors.secundary.default}
                size={24}
            />
            <Text style={styles.title}>{acao.nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        width: 105,
        backgroundColor: colors.gray[500],
        borderRadius: 10,
        padding: 16,
        marginRight: 8,
        marginBottom: 12,
    },
    title: {
        fontFamily: fonts.subTitle,
        fontSize: 14,
        color: colors.gray[100],
        width: 80,
        marginTop: 15,
    },
});
