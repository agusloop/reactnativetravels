import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import MyHeader from "../../components/header/header";
import { getItem } from "../../utils/storage"
import { USER_INFO } from "../../consts/consts"
import SearchComp from "../../components/SearchTravel"
import InputStyle from "../../components/SearchTravel/search"


export default function Home() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {

        if (!userInfo) {
            loadUserInfo();
            console.log(userInfo);

        }


    }, [userInfo])

    const loadUserInfo = async () => {
        let userInfo = await getItem(USER_INFO);
        userInfo = JSON.parse(userInfo);
        console.log(userInfo);
        setUserInfo(userInfo)

    }


    return (
        <View style={{ flex: 1 }}>
            {/* Hacer validacion para ver si user info existe entonces lo envía */}
            <MyHeader imageUri={userInfo && userInfo.photoUrl} />
            <View style={{ marginTop: 24, alignItems: "center", justifyContent: "center" }}>
                <Text>We're Home Screen</Text>
                <SearchComp></SearchComp>
            </View>
        </View>
    );
}