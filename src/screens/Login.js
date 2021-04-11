
import React, { useState } from "react";
import {View, Button, StyleSheet, Text} from "react-native";
import Input from "../components/form/Input";




const LoginScreen = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleLogin = () => {
        if( (!userName) || (!password)){
            setErrorMessage("Usuário e senhão são obrigatórios.");
            return;
        }

        const loginData = {
            email: userName,
            password
        }

        console.log(userName);
        console.log(password);

    }

    return(
        <View style={styles.containerStyle}>
            <View style={styles.itemSyle}>
                <View style={styles.inputStyle} >
                    <Input label={"Usuario"} initialValue={""} onChange={(text) => setUserName(text)} />
                </View>
                <View style={styles.inputStyle} >
                    <Input label={"Senha"} initialValue={""} onChange={(text) => setPassword(text)} />
                </View>
                <View style={styles.buttonStyle} >
                    <Button onPress={handleLogin} title={"Entrar"} />
                </View>
                <View>
                    <Text>{errorMessage}</Text>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    containerStyle: {
        padding: 5
     
    },
    itemSyle:{
       margin:"auto"
    },
    inputStyle:{
        paddingBottom: 5
    },
    buttonStyle:{
        padding: 10
    }
})

export default LoginScreen;