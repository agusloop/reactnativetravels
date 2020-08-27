import React from "react";
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");



export default StyleSheet.create({
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    fontTitle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    googleBtn: {
        width: width / 1.5,
        backgroundColor: "#27343E"
    },
    iconGoogleBtn: {
        marginRight: 15
    }
})