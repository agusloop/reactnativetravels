import React, { useState, useEffect } from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import MyStyle from "./search";
import { View } from "react-native";

export default function SearchTravel() {
    const [useInput, setUseInput] = useState("");

    const handleUseInput = text => {
        setUseInput(text);
        console.log(text);
    }

    return (

        <View style={MyStyle.contenedor}>
            <Input
                value={useInput}
                onChangeText={handleUseInput}
                placeholder='Origen'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                        style={MyStyle.bo}
                    />

                }

            />
        </View>

    )
}

