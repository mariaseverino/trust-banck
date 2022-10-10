import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
} from "react-native";
import { Categoria } from "../../components/Categoria";

import cashbackImg from "../../assets/cashback.png";
import disneyImg from "../../assets/disney.png";
import ifoodImg from "../../assets/ifood.png";
import netflixImg from "../../assets/netflix.png";
import playstationImg from "../../assets/playstation.png";
import uberImg from "../../assets/uber.png";
import xboxImg from "../../assets/xbox.png";
import { CashbackCard } from "../../components/CashbackCard";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Shopping() {
    const categorias = [
        { categoria: "Todos", id: 0 },
        { categoria: "Alimentação", id: 1 },
        { categoria: "Game", id: 2 },
        { categoria: "Streaming", id: 3 },
        { categoria: "Outros", id: 4 },
    ];
    const produtos = [
        {
            name: "Plystation",
            categoria: "Game",
            img: playstationImg,
        },
        {
            name: "Xbox",
            categoria: "Game",
            img: xboxImg,
        },
        {
            name: "Netflix",
            categoria: "Streaming",
            img: netflixImg,
        },
        {
            name: "Uber",
            categoria: "Outros",
            img: uberImg,
        },
        {
            name: "Disney Plus",
            categoria: "Streaming",
            img: disneyImg,
        },
        {
            name: "Ifood",
            categoria: "Alimentação",
            img: ifoodImg,
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={cashbackImg} />
                <Text style={styles.subTitle}>Shopping</Text>
                <FlatList
                    data={categorias}
                    renderItem={({ item }) => (
                        <Categoria
                            name={item.categoria}
                            key={(item) => item.id}
                        />
                    )}
                    horizontal={true}
                />
                <FlatList
                    data={produtos}
                    renderItem={({ item }) => <CashbackCard produto={item} />}
                    numColumns={2}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[600],
        paddingVertical: 32,
        paddingHorizontal: 12,
    },
    subTitle: {
        fontFamily: fonts.subTitle,
        fontSize: 18,
        color: colors.gray[100],
        marginBottom: 16,
        marginTop: 30,
    },
});
