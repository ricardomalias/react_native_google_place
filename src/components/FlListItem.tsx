import React from "react";
import {Card, Icon, Image} from "react-native-elements";
import {Dimensions, StyleSheet, Text, View} from "react-native";
import colors from "../settings/colors";

interface FlListItemProps {
    title?: string
    description?: string
    hasAction?: boolean
}

export default class FlListItem extends React.Component<FlListItemProps> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let arrow = null

        if(this.props.hasAction) {
            arrow = <View style={styles.columnArrow}>
                <Icon
                    name="angle-right"
                    type="font-awesome"
                    size={60}
                    color={colors.gray}
                />
            </View>
        }

        return (
            <View
                style={styles.card}>
                <View style={styles.container}>
                    <View style={styles.columnText}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <Text>
                            {this.props.description}
                        </Text>
                    </View>
                    {arrow}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 5,
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
        width: Dimensions.get("window").width - 20,
        borderRadius: 5,
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: colors.gray,
    },
    title: {
        textAlign: "left",
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    container: {
        flex: 10,
        alignSelf: "stretch",
        justifyContent: 'center',
        flexDirection: "row",
        height: 100,
    },
    columnImage: {
        flex: 4,
        alignSelf: "stretch",
        alignItems: "center",
    },
    columnText: {
        flex: 6,
        alignSelf: "stretch",
        width: 100,
        height: 100,
        justifyContent: 'flex-start',
    },
    columnArrow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})