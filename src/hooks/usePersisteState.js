import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function usePersistedState(key, initialValue) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const loadState = async () => {
      try {
        const StoredState = await AsyncStorage.getItem(key);
        if (StoredState) {
          setState(JSON.parse(StoredState));
        }
      } catch (error) {
        console.error("Error reading from AsyncStorage", error);
      }
    };

    loadState();
  }, [key]);

  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("Error writing to AsyncStorage", error);
      }
    };

    saveState();
  }, [key, state]);
}
