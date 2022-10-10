import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function CashbackCard({ produto }) {
    return (
        <View style={styles.card}>
            <View style={styles.cardSup}>
                <Image source={produto.img} />
                <Text style={styles.nomeProduto}>{produto.name}</Text>
            </View>
            <TouchableOpacity style={styles.cardInf}>
                <Text style={styles.textCardInf}>Comprar</Text>
                <FontAwesome
                    name="chevron-right"
                    color={colors.gray[500]}
                    size={9}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        position: "relative",
        marginRight: 16,
        marginTop: 25,
    },
    cardSup: {
        alignItems: "center",
        justifyContent: "center",
        height: 141,
        width: 159,
        backgroundColor: colors.gray[500],
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardInf: {
        backgroundColor: colors.primary.default,
        height: 37,
        width: 159,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    textCardInf: {
        fontSize: 11,
        fontFamily: fonts.subTitle,
        color: colors.gray[600],
    },
    nomeProduto: {
        fontFamily: fonts.subTitle,
        fontSize: 14,
        color: colors.gray[100],
        position: "absolute",
        bottom: 8,
        left: 8,
    },
});
