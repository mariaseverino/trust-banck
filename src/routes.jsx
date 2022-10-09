import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Cartoes } from "./pages/Cartoes";
import { Home } from "./pages/Home";
import { Shopping } from "./pages/Shopping";
import colors from "./styles/colors";

const tab = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <tab.Navigator
                screenOptions={{
                    // tabBarInactiveBackgroundColor: colors.gray[500],
                    // tabBarActiveBackgroundColor: colors.gray[500],
                    tabBarActiveTintColor: colors.secundary.default,
                    tabBarLabelPosition: "below-icon",
                    tabBarStyle: {
                        height: 80,
                        paddingBottom: 20,
                        paddingTop: 15,
                        backgroundColor: colors.gray[500],
                    },
                }}
            >
                <tab.Screen
                    name="Inicio"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="home" color={color} size={24} />
                        ),
                    }}
                />
                <tab.Screen
                    name="Cartões"
                    component={Cartoes}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome
                                name="credit-card"
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
                            <FontAwesome
                                name="shopping-cart"
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
