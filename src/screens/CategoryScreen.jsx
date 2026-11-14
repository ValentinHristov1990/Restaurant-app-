import { StyleSheet, View } from "react-native";
import { getCategoryItems } from "../data/data";
import CategoryItemCard from "../components/CategoryItemCard";

export default function CategoryScreen({ route }) {
    const categoryId = route.params.categoryId;
    const categoryItem = getCategoryItems(categoryId);

    return (
        <View styles={styles.container}>
            {categoryItem.map((item) => (
                <CategoryItemCard
                    key={item.id}
                    {...item}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    }
})