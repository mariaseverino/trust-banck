import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import styles from "./styles";

import pixIcon from "../../assets/pix.png";
import barcodeIcon from "../../assets/barcode.png";
import transferIcon from "../../assets/arrow-autofit-width.png";
import avatar from "../../assets/avatar.png";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

import { Opcoes } from "../../components/Opcoes";
import { Fatura } from "../../components/Fatura";
import { ParaVoce } from "../../components/ParaVoce";
import { Emprestimos } from "../../components/Emprestimos";
import { Shopping } from "../../components/Shopping";

export const dados = [
    {
        id: 0,
        title: "Pix",
        icone: pixIcon,
    },
    {
        id: 1,
        title: "Pagar",
        icone: barcodeIcon,
    },
    {
        id: 2,
        title: "Transferir",
        icone: transferIcon,
    },
];

export function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ScrollView>
                <View style={styles.banner}>
                    <View style={styles.status}>
                        <View style={styles.user}>
                            <Image source={avatar} />
                            <Text style={styles.name}>Olá, Pedro</Text>
                            <FontAwesome
                                name="chevron-down"
                                color={colors.gray[600]}
                                size={16}
                            />
                        </View>
                        <View style={styles.icones}>
                            <FontAwesome
                                name="eye"
                                color={colors.gray[600]}
                                size={20}
                            />
                            <FontAwesome
                                name="bell"
                                color={colors.gray[600]}
                                size={20}
                                style={styles.icon}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.saldo2}>
                    <View style={styles.saldo}>
                        <Text style={styles.textSaldo}>Saldo da conta</Text>
                        <Text style={styles.valorSaldo}>R$ 394,02</Text>
                    </View>
                    <View style={styles.detalhes}>
                        <Text style={styles.textDetalhes}>
                            Ver detalhes do saldo
                        </Text>
                        <FontAwesome
                            name="chevron-right"
                            color={colors.gray[600]}
                        />
                    </View>
                </View>

                <FlatList
                    data={dados}
                    renderItem={({ item }) => <Opcoes opcao={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    style={styles.lista}
                />
                <Text style={styles.subTitle}>Fatura</Text>
                <Fatura />
                <Text style={styles.subTitle}>Para você</Text>
                <ParaVoce />
                <Text style={styles.subTitle}>Empréstimos</Text>
                <Emprestimos />
                <Text style={styles.subTitle}>Shopping</Text>
                <Shopping />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    banner: {
        backgroundColor: colors.primary.dark,
        height: 200,
    },
    status: {
        marginTop: 50,
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        justifyContent: "space-between",
    },
    user: {
        flexDirection: "row",
        alignItems: "center",
    },
    icones: {
        flexDirection: "row",
    },
    icon: {
        marginLeft: 10,
    },
    name: {
        color: colors.gray[600],
        fontFamily: fonts.name,
        fontSize: 20,
        paddingHorizontal: 5,
    },
    saldo2: {
        height: 129,
        marginTop: -63,
        marginHorizontal: 20,

        marginBottom: 50,
    },
    saldo: {
        height: 95,
        backgroundColor: colors.primary.default,
        padding: 16,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    detalhes: {
        backgroundColor: colors.primary.light,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textSaldo: {
        fontFamily: fonts.text,
        fontSize: 16,
        color: colors.gray[500],
    },
    valorSaldo: {
        fontFamily: fonts.title,
        fontSize: 28,
        color: colors.gray[600],
    },
    textDetalhes: {
        fontFamily: fonts.text,
        fontSize: 14,
        color: colors.gray[600],
    },
    subTitle: {
        fontFamily: fonts.subTitle,
        fontSize: 18,
        color: colors.gray[100],
        paddingLeft: 20,
        marginBottom: 10,
    },
    lista: {
        marginBottom: 30,
    },
});
