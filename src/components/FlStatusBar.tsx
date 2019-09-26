import React from "react";
import {StatusBar} from "react-native";


export default class FlStatusBar extends React.Component{

    render() {
        return (
            <StatusBar
                barStyle="light-content"
                backgroundColor="#fff" />
        );
    }
}