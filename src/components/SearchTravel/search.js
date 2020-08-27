import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    contenedor: {
        width: windowWidth / 1.2

    },
    inp: {
        marginTop: 30,
        marginBottom: 15,

    },
    bo: {
        height: 30,

        marginRight: 25
    }
})