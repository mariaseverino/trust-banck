import { Home } from "./src/pages/Home";
import {
    useFonts,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Routes } from "./src/routes";
export default function App() {
    const [fontsLoad] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_500Medium,
        Roboto_500Medium,
        Roboto_400Regular,
    });
    if (!fontsLoad) {
        return null;
    }
    return <Routes />;
}
