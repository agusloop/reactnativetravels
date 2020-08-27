import React from 'react';
import { Header, Image } from "react-native-elements";
import MyStyles from "./style";
import { COLOR_PRIMARY } from "../../consts/consts";

export default function header({ imageUri }) {
    return (

        <Header

            statusBarProps={{ backgroundColor: COLOR_PRIMARY }}
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={< Image source={{ uri: imageUri && imageUri }} borderRadius={25} style={MyStyles.imgs} />}
        />


    )
}
