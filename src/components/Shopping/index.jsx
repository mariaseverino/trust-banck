import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../../styles/colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import fonts from "../../styles/fonts";

import ifood from "../../assets/ifood.png";

export function Shopping() {
    return (
        <View style={styles.container}>
            <View style={styles.containerIcon}>
                <FontAwesome
                    name="shopping-cart"
                    color={colors.gray[600]}
                    size={18}
                />
            </View>
            <Text style={styles.subTitle}>Gift Card</Text>
            <Text style={styles.text}>
                Diversas opções de Gift Card para você
            </Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textBotao}>Saber mais</Text>
            </TouchableOpacity>
            <View style={styles.quadrado}>
                <View style={styles.card}>
                    <View style={styles.cardSup}>
                        <Image source={ifood} style={styles.img} />
                        <Text style={styles.textCard}>Ifood</Text>
                    </View>
                    <View style={styles.cardInf}>
                        <Text style={styles.textCardInf}>Comprar</Text>
                        <FontAwesome
                            name="chevron-right"
                            color={colors.gray[600]}
                            size={9}
                        />
                    </View>
                </View>
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
        overflow: "hidden",
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
    // img: {
    //     position: "absolute",
    //     right: 0,
    //     marginTop: -10,
    // },
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
        height: 145,
        width: 147,
        right: -15,
        // top: 40,
        bottom: -25,
        borderRadius: 100,
    },
    card: {
        height: 113,
        backgroundColor: colors.gray[600],
        width: 100,
        // borderRadius: 6,
        position: "absolute",
        left: 22,
        top: 7,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardSup: {
        alignItems: "center",
        justifyContent: "center",
        height: 91,
    },
    cardInf: {
        backgroundColor: colors.primary.default,
        height: 22,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
    },
    textCard: {
        fontFamily: fonts.subTitle,
        fontSize: 8,
        color: colors.gray[100],
        position: "absolute",
        bottom: 5,
        left: 5,
    },
    textCardInf: {
        fontSize: 11,
        fontFamily: fonts.subTitle,
        color: colors.gray[600],
    },
});
