import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Cartao } from "./pages/Cartao";
import { Home } from "./pages/Home";
import { Shopping } from "./pages/Shopping";
import colors from "./styles/colors";

const tab = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: colors.secundary.default,
                    tabBarLabelPosition: "below-icon",
                    tabBarStyle: {
                        height: 80,
                        paddingBottom: 20,
                        paddingTop: 15,
                        backgroundColor: colors.gray[500],
                        borderTopWidth: 0,
                    },
                    headerStyle: {
                        elevation: 0,
                        backgroundColor: colors.primary.dark,
                        height: 100,
                    },
                    headerTintColor: colors.gray[600],
                }}
            >
                <tab.Screen
                    name="Inicio"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="home-outline"
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
                <tab.Screen
                    name="Cartão"
                    component={Cartao}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="wallet-outline"
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
                <tab.Screen
                    name="Shopping"
                    component={Shopping}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="cart-outline"
                                color={color}
                                size={24}
                            />
                        ),
                    }}
                />
            </tab.Navigator>
        </NavigationContainer>
    );
}
