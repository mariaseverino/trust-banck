import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../../styles/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import fonts from "../../styles/fonts";

import casa from "../../assets/casa.png";

export function Emprestimos() {
    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <FontAwesome name="dollar" color={colors.gray[600]} size={18} />
            </View>
            <Text style={styles.subTitle}>Conquiste seus sonhos</Text>
            <Text style={styles.text}>
                Faça seu empréstimo sem juros aqui na TrustBank
            </Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textBotao}>Conhecer</Text>
            </TouchableOpacity>
            <View style={styles.quadrado}>
                <Image source={casa} style={styles.img} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        marginHorizontal: 20,
        backgroundColor: colors.primary.default,
        borderRadius: 5,
        paddingLeft: 16,
        paddingTop: 16,
        position: "relative",
        marginBottom: 30,
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#fff",
    },
    containerIcon: {
        height: 40,
        width: 40,
        backgroundColor: colors.secundary.light,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        marginBottom: 8,
    },
    subTitle: {
        fontFamily: fonts.subTitle,
        fontSize: 18,
        color: colors.gray[600],
        width: 190,
        marginBottom: 8,
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.gray[600],
        width: 190,
        marginBottom: 16,
    },
    img: {
        position: "absolute",
        right: 0,
        marginTop: -10,
    },
    botao: {
        backgroundColor: colors.secundary.default,
        borderRadius: 5,
        width: 103,
        alignItems: "center",
        justifyContent: "center",
    },
    textBotao: {
        color: colors.gray[600],
        paddingVertical: 8,
    },
    quadrado: {
        position: "absolute",
        backgroundColor: colors.secundary.light,
        height: 98,
        width: 90,
        right: 0,
        top: 40,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
});
