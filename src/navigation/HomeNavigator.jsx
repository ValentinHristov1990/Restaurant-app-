import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import CategoryScreen from "../screens/CategoryScreen";
// import DetailsScreen from "../screens/DetailsScreen";


export default function HomeNavigator({ navigation }) {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Pressable onPress={() => navigation.navigate("CartMain")}>
                        <Ionicons name="cart" size={24} color="blue" style={{ marginRight: 16 }} />
                    </Pressable>
                ),
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Menu" }} />
            <Stack.Screen name="Category" component={CategoryScreen} options={{ title: "Category" }} />
        </Stack.Navigator>
    );
}