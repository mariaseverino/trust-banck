import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    FlatList,
    ScrollView,
} from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { DadosCartao } from "../../components/DadosCartao";
import { AcoesCartao } from "../../components/AcoesCartao";

export function Cartao() {
    const acoes = [
        {
            nome: "Pagar fatura",
            icone: "card-outline",
        },
        {
            nome: "Resumo fatura",
            icone: "document-text-outline",
        },
        {
            nome: "Bloquear cartão",
            icone: "lock-open-outline",
        },
        {
            nome: "Gerar cartão virtual",
            icone: "card-outline",
        },
        {
            nome: "Ajustar limite",
            icone: "settings-outline",
        },
        {
            nome: "Configurar cartão",
            icone: "settings-outline",
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView>
                <DadosCartao />
                <Text style={styles.subTitle}>Gerenciar cartão</Text>
                <FlatList
                    data={acoes}
                    renderItem={({ item }) => <AcoesCartao acao={item} />}
                    numColumns={3}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: colors.gray[600],
    },
    subTitle: {
        fontFamily: fonts.subTitle,
        fontSize: 18,
        color: colors.gray[100],
        marginBottom: 16,
        marginTop: 30,
    },
    containerCard: {
        height: 295,
        borderRadius: 10,
        backgroundColor: colors.gray[500],
        paddingHorizontal: 14,
    },
});
