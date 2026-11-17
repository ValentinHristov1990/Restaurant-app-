import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import RootNavigator from "./navigation/RootNavigator";
import CartProvider from "./contexts/cart-contexts/CartProvider";

export default function App() {
  return (
    <CartProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
