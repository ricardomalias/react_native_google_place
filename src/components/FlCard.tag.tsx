import React from "react";
import {Card, Icon, Image} from "react-native-elements";
import {Dimensions, StyleSheet, Text, View} from "react-native";

interface FlCardProps {
    title?: string
    description?: string
    image?: string
}

export default class FlCard extends React.Component<FlCardProps> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let image = null

        if(this.props.image) {
            image = <View style={styles.columnImage}>
                <Image
                    source={{uri: this.props.image}}
                    style={styles.image}
                />
            </View>
        }

        return (
            <Card
                titleStyle={styles.title}
                containerStyle={styles.card}>
                <View style={styles.container}>
                    {image}
                    <View style={styles.columnText}>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <Text>
                            {this.props.description}
                        </Text>
                    </View>
                    <View style={styles.columnArrow}>
                        <Icon
                            name="angle-right"
                            type="font-awesome"
                            size={60}
                            color="#999"
                        />
                    </View>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 5,
        margin: 10,
        width: Dimensions.get("window").width - 20,
        borderRadius: 5,
        flex: 3,
        flexDirection: "column",
        justifyContent: "center"
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