import React from "react";
import {Header} from "react-navigation";
import {LinearGradient} from "expo-linear-gradient";
import colors from "../settings/colors";
import {Animated, SafeAreaView, StyleSheet, Text, View, Platform} from "react-native";

const headerMinimumHeight = Header.HEIGHT
const headerMaximumHeight = 120

export let AnimatedHeaderValue: any = null
export let headerColor: Array<string> = [
    colors.colorPrimary,
    colors.colorPrimaryDark
]

export default class FlHeaderGradient extends React.Component {

    constructor(props: any) {
        super(props)

        AnimatedHeaderValue = new Animated.Value(0)
    }

    render() {
        const AnimateHeaderHeight = AnimatedHeaderValue.interpolate(
            {
                inputRange: [ 0, ( headerMaximumHeight - headerMinimumHeight ) ],
                outputRange: [ headerMaximumHeight, headerMinimumHeight ],
                extrapolate: 'clamp'
            });

        return (
            <Animated.View style={[styles.header, {height: AnimateHeaderHeight}]}>
                <Header
                    {...this.props}
                    style={{ backgroundColor: 'transparent' }} />
                <LinearGradient
                    colors={headerColor}
                    style={[
                        StyleSheet.absoluteFill
                    ]} >
                    <SafeAreaView>
                        <Text>teste</Text>
                    </SafeAreaView>
                </LinearGradient>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        shadowColor: colors.gray,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        elevation: 1,
        position:"absolute",
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})