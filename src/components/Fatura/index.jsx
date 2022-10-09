import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Fatura() {
    return (
        <View style={styles.container}>
            <View style={styles.bloco}>
                <Text style={styles.textFatura}>Fatura atual</Text>
                <Text style={styles.textVencimento}>Venc 10/09</Text>
            </View>

            <Text style={styles.title}>R$ 2.590,73</Text>
            <View style={styles.blocoFatura}>
                <Text style={styles.textProgresso}>Limite</Text>

                <View style={styles.barraProgresso}>
                    <View style={styles.progresso}></View>
                </View>
                <Text style={styles.posicao}>Restante R$ 7.409,27</Text>
            </View>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textBotao}>Ver fatura</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 224,
        backgroundColor: colors.gray[500],
        marginHorizontal: 20,
        borderRadius: 5,
        padding: 16,
        marginBottom: 30,
    },
    bloco: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 16,
        // padding: 16,
    },
    textFatura: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: colors.gray[200],
    },
    textVencimento: {
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.gray[300],
    },
    title: {
        fontFamily: fonts.title,
        fontSize: 28,
        color: colors.gray[100],
        marginBottom: 8,
    },
    blocoFatura: {
        position: "relative",
    },
    textProgresso: {
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.gray[300],
    },
    barraProgresso: {
        height: 8,
        // width: 303,
        backgroundColor: "#DCDDE2",
        borderRadius: 5,
    },
    progresso: {
        height: 8,
        // width: 303,
        backgroundColor: colors.secundary.dark,
        borderRadius: 5,
        width: "20%",
    },
    posicao: {
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.gray[300],
        position: "absolute",
        top: 27,
        right: 2,
    },
    botao: {
        height: 37,
        backgroundColor: colors.primary.default,
        marginTop: 46,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    textBotao: {
        color: colors.gray[600],
    },
});
