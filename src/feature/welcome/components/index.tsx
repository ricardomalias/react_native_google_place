import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import i18n from '../../../translation/i18n';
import colors from "../../../settings/colors";
import NavigationService from "../../../route/NavigationService";
import {WelcomeService} from "../service/welcome";

export default class Welcome extends React.Component {

    private static async setWelcomeRead() {
        let welcomeService = new WelcomeService()
        await welcomeService.putWelcome()
    }

    openMap() {
        Welcome.setWelcomeRead().then(r => NavigationService.navigate("Map", {}))
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../../../assets/470.png')}
                    style={styles.image}/>
                <Text
                    style={styles.welcome_text}>
                    {i18n.translate("are_pathless")}
                </Text>
                <TouchableOpacity
                    onPress={this.openMap}
                    style={styles.welcome_button}>
                    <Text style={styles.button_text}>
                        {i18n.translate("welcome_start")}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
    },
    image: {
        width: 120,
        height: 160
    },
    welcome_text: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.darkGray,
        margin: 20
    },
    welcome_button: {
        backgroundColor: colors.colorPrimaryDark,
        padding: 20,
        borderRadius: 5,
        shadowColor: colors.darkGray,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        marginTop: 40
    },
    button_text: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 18
    }
});
