import { AsyncStorage } from 'react-native';


//El key Name es el identificador del valor que esta en base de datos
//Segundo parametro que es keyValue


//Salvar un valor
//Se coloca la palabra export para que pueda ser utilizado en los demás componentes
export const saveItem = async (keyName, keyValue) => {
    try {
        await AsyncStorage.setItem(keyName, keyValue);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

//Metodo para obtener un valor
export const getItem = async (keyName) => {
    try {

        return await AsyncStorage.getItem(keyName);

    } catch (error) {
        return false;
    }

}
export const clearAll = async () => {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (error) {
        return false;
    }

}