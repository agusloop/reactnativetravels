import React, { useEffect } from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import styles from "./style";
import { HOME, ACCESS_TOKEN, LOGIN } from "../../consts/consts";
import { getItem } from "../../utils/storage";

export default function Login({ navigation }) {

    useEffect(() => {
        redirect();
    })

    const redirect = async () => {
        const token = await getItem(ACCESS_TOKEN);
        if (token) {
            navigation.navigate(HOME)

        } else {
            navigation.navigate(LOGIN)
        }
    }
    return (
        <View style={styles.contentColor}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Cargando...</Text>
        </View>
    );
}
