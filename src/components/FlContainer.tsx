import React from "react";
import {
    ActivityIndicator,
    Animated,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View
} from "react-native";
import colors from "../settings/colors";
import FlHeaderGradient, {AnimatedHeaderValue} from "./FlHeaderGradient";

const headerMaximumHeight = 120
const headerMinimumHeight = StatusBar.currentHeight

export default class FlContainer extends React.Component {

    state = {
        scrollEnabled: true
    }

    onContentSizeChange = (contentWidth: number, contentHeight: number) => {
        let {height} = Dimensions.get("window")

        this.setState({
            scrollEnabled: contentHeight > height
        })
    }

    render(){

        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#01814e"/>
                <ScrollView
                    contentContainerStyle={{ paddingTop: headerMaximumHeight }}
                    scrollEventThrottle={16}
                    scrollEnabled={this.state.scrollEnabled}
                    onContentSizeChange={this.onContentSizeChange}
                    onScroll={ Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    y: AnimatedHeaderValue
                                }
                            }
                        }]
                    ) }>
                    {this.props.children}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.lightGray,
    },
});