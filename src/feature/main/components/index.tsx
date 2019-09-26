import * as React from "react";
import {ActivityIndicator, StatusBar, StyleSheet, View} from "react-native";
import {WelcomeService} from "../../welcome/service/welcome";
import NavigationService from "../../../route/NavigationService";
import colors from "../../../settings/colors";

export default class Main extends React.PureComponent {

    componentDidMount() {
        this.checkWelcomeRead()
    }

    async checkWelcomeRead() {
        let welcomeService = new WelcomeService()

        let read = await welcomeService.getWelcome()
        if(read) {
            this.openMap()
        } else {
            this.openWelcome()
        }
    }

    openWelcome() {
        NavigationService.navigate("Welcome", {})
    }

    openMap() {
        NavigationService.navigate("Map", {})
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="default" />
                <ActivityIndicator
                    size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
    },
});
