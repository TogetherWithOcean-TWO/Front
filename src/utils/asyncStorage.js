// src/utils/asyncStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Save an item to AsyncStorage.
 * @param {string} key - The key to store the value under.
 * @param {Object} value - The value to store.
 */
export const saveItem = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
  } catch (error) {
    console.error(`Failed to save ${key}`, error);
  }
};

/**
 * Get an item from AsyncStorage.
 * @param {string} key - The key of the item to retrieve.
 * @returns {Object|null} The retrieved item, or null if not found.
 */
export const getItem = async (key) => {
  try {
    const stringValue = await AsyncStorage.getItem(key);
    if (stringValue !== null) {
      return JSON.parse(stringValue);
    }
    return null;
  } catch (error) {
    console.error(`Failed to load ${key}`, error);
    return null;
  }
};
