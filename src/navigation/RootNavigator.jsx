import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";
import HomeNavigator from "./HomeNavigator";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();

    return (
        <Tabs.Navigator>
            <Tabs.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />
            <Tabs.Screen name="Cart" component={CartScreen} />
            <Tabs.Screen name="Info" component={InfoScreen} />
        </Tabs.Navigator>
    );
}