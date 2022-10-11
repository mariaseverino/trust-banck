import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import cardBack from "../../assets/card-back.png";
import cardFront from "../../assets/card-front.png";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function DadosCartao() {
    return (
        <View style={styles.containerCard}>
            <View style={styles.containerTipoCartao}>
                <Text style={styles.cartao_fisico}>Cartão fisico</Text>
                <Text style={styles.cartao_fisico}>Cartão digital</Text>
            </View>
            <View style={styles.containerInfo}>
                <View style={styles.containerImg}>
                    <Image source={cardBack} style={styles.card_Back} />
                    <Image source={cardFront} style={styles.card_Front} />
                </View>
                <View style={styles.containerDescricao}>
                    <Text style={styles.nome_campo}>Número</Text>
                    <Text style={styles.conteudo_campo}>
                        5143 **** 3044 ****
                    </Text>

                    <Text style={styles.nome_campo}>Nome</Text>
                    <Text style={styles.conteudo_campo}>Pedro Dias</Text>

                    <View style={styles.containerCvCEvalidade}>
                        <View>
                            <Text style={styles.nome_campo}>CVC</Text>
                            <Text style={styles.conteudo_campo}>***</Text>
                        </View>
                        <View>
                            <Text style={styles.nome_campo}>Validade</Text>
                            <Text style={styles.conteudo_campo}>12/2023</Text>
                        </View>
                    </View>
                    <Text style={styles.nome_campo}>Função</Text>
                    <Text style={styles.conteudo_campo}>Débito e Crédito</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCard: {
        height: 295,
        borderRadius: 10,
        backgroundColor: colors.gray[500],
        paddingHorizontal: 14,
    },
    containerTipoCartao: {
        flexDirection: "row",
        marginBottom: 32,
        paddingTop: 15,
    },
    containerInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerImg: {
        position: "relative",
    },
    card_Back: {
        position: "absolute",
        left: 32,
    },

    containerCvCEvalidade: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    containerDescricao: {
        paddingRight: 5,
    },
    cartao_fisico: {
        borderBottomWidth: 2,
        borderBottomColor: colors.primary.dark,
        paddingBottom: 2,
        marginRight: 16,
    },
    nome_campo: {
        fontFamily: fonts.text,
        color: colors.gray[100],
    },
    conteudo_campo: {
        fontFamily: fonts.subTitle,
        color: colors.gray[100],
        marginBottom: 12,
    },
});
