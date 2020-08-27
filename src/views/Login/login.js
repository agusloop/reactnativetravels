import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Button, Icon } from "react-native-elements"
// import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from "../Loading/loading"
import styles from "./style"
import * as Google from "expo-google-app-auth"
//importar el AsyncStorage el nombre es como esta nombre en el metodo a utilizar 
import { saveItem } from "../../utils/storage";
import { ACCESS_TOKEN, USER_INFO, GOOGLE_SUCCESS_MESSAGE, HOME } from "../../consts/consts";
import enviroment from "../../../env";
const { iosClientId, androidClientId, iosStandaloneAppClientId, androidStandaloneAppClientId } = enviroment();


export default function Login({ navigation }) {

    const handleLoginPress = async () => {

        try {

            //Son los id que nos dan la consola de Firebase y de Google en la pagina
            //Tambien los que vienen de los archivos descargados :)
            const { user, accessToken, type } = await Google.logInAsync({
                iosClientId,
                androidClientId,
                iosStandaloneAppClientId,
                androidStandaloneAppClientId

            });

            if (type === GOOGLE_SUCCESS_MESSAGE) {

                //El primer parametro puede ser nombrado como uno guste, el segundo es qué es lo que va almacenar
                const userResult = await saveItem(USER_INFO, JSON.stringify(user));
                const tokenResult = await saveItem(ACCESS_TOKEN, accessToken);


                if (userResult && tokenResult) {
                    navigation.navigate(HOME);
                } else {
                    alert("Error no se pudo navegar")
                }
            }

        } catch (error) {
            alert("Error:" + error);
        }

    };


    return (
        <View style={styles.content}>
            <Text style={styles.fontTitle}>Welcome!</Text>
            <Text >Inicia Sesion para continuar</Text>

            <Button
                buttonStyle={styles.googleBtn}
                icon={
                    <Icon
                        type="material-community"
                        name="gmail"
                        size={20}
                        color="white"
                        iconStyle={styles.iconGoogleBtn}
                    />
                }
                iconLeft
                title="Sign Up with Gmail"
                onPress={handleLoginPress}

            />

            {/* <Spinner /> */}
        </View>
    );
}
