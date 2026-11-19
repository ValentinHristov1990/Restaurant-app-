import { useEffect, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function usePersistedState(key, initialValue) {
  const [state, setState] = useState(initialValue);
  const hasLoaded = useRef(false);

  useEffect(() => {
    const loadState = async () => {
      try {
        const storedState = await AsyncStorage.getItem(key);
        if (storedState) {
          setState(JSON.parse(storedState));
        }
      } catch (error) {
        console.error("Error reading from AsyncStorage", error);
      } finally {
        hasLoaded.current = true;
      }
    };

    loadState();
  }, [key]);

  useEffect(() => {
    if (!hasLoaded.current) return;

    const saveState = async () => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.error("Error writing to AsyncStorage", error);
      }
    };

    saveState();
  }, [key, state]);

  return [state, setState];
}
