import React, { useState } from "react";
import {StyleSheet, Text, TextInput} from "react-native";
import GenericInput from "./GenericInput";


const Input = (props) => {

    const onChange = (text)=>{
       if(props.onChange){
        props.onChange(text);
       }
        
    }
    return(
        <>
            <Text>{props.label}</Text>
            <GenericInput style={styles.textInputStyle} initialValue={props.initialValue}
                       onChangeText={onChange} />
        </>
    )
}

export default Input;

const styles = StyleSheet.create({
    textInputStyle:{
        backgroundColor:"#d1cdcd"
    }
})