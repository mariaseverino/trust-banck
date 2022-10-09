import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../../styles/colors";

import cartao1 from "../../assets/Vector1.png";
import cartao2 from "../../assets/Vector3.png";
import fonts from "../../styles/fonts";

export function ParaVoce() {
    return (
        <View style={styles.container}>
            <Text style={styles.subTitle}>
                Convide seus amigos para a TrustBank
            </Text>
            <Text style={styles.text}>
                Cada amigo indicado, você ganha R$10,00
            </Text>
            <Image source={cartao2} style={styles.img2} />

            <Image source={cartao1} style={styles.img1} />
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textBotao}>Saber mais</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[500],
        marginHorizontal: 20,
        position: "relative",
        height: 180,
        paddingLeft: 16,
        paddingTop: 16,
        borderRadius: 5,
        marginBottom: 30,
    },
    subTitle: {
        fontFamily: fonts.subTitle,
        fontSize: 18,
        color: colors.secundary.dark,
        width: 190,
        marginBottom: 8,
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.gray[200],
        width: 190,
        marginBottom: 16,
    },
    img2: {
        position: "absolute",
        right: 0,
        bottom: 28,
    },
    img1: {
        position: "absolute",
        right: 0,
        top: 23,
        // bottom: 28,
    },
    botao: {
        backgroundColor: colors.primary.default,
        borderRadius: 5,
        // paddingHorizontal: 16,
        // paddingVertical: 8,
        width: 103,
        alignItems: "center",
        justifyContent: "center",
    },
    textBotao: {
        color: colors.gray[600],
        paddingVertical: 8,
    },
});
