
// import { AsyncStorage } from "react-native";

import AsyncStorage from '@react-native-community/async-storage';

export class WelcomeService {

    currentLevelKey: string = "ACCESS_TOKEN";

    async getWelcome(): Promise<boolean> {
        try {
            const read = await AsyncStorage.getItem(this.currentLevelKey);
            return read !== null
        } catch(error) {
            // error getting data
        }

        return null
    }

    async putWelcome(): Promise<void> {
        try {
            await AsyncStorage.setItem(this.currentLevelKey, String(true))
        } catch (error) {
            // Error saving data
        }
    }

    async eraseWelcome(): Promise<boolean> {
        try {
            await AsyncStorage.removeItem(this.currentLevelKey);
            return true
        } catch (error) {
            return false
        }
    }
}
