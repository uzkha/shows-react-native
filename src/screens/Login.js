
import React, { useContext, useState } from "react";
import {View, Button, StyleSheet, Text, TextInput} from "react-native";
import show from "../api/show";
import Input from "../components/form/Input";
import { AppContext } from "../context/AppContext";




const LoginScreen = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const {dispatch} = useContext(AppContext);
    
    const handleLogin = async () => {

        if( (!userName) || (!password)){
            setErrorMessage("Usuário e senhão são obrigatórios.");
            return;
        }

        const loginData = {
            email: userName,
            password
        };
    
        try{
            const response = await show("").post("auth/signin", loginData);
            const action = {
                type: "login",
                payload:response.data.acess_token
            }   
            dispatch(action);

        }catch(error){            
            setErrorMessage("Usuário ou senha inválidos");
        }


    }

    return(
        <View style={styles.containerStyle}>
            <View style={styles.itemSyle}>
                <View style={styles.inputStyle} >
                    <Input label={"Usuario"} initialValue={""} onChange={(text)=>setUserName(text)} />                  
                </View>
                <View style={styles.inputStyle} >
                    <Input label={"Senha"} initialValue={""} onChange={(text)=>setPassword(text)} />         
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
        padding: 5,
        marginTop:20
     
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