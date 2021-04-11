import React, { useState } from "react";
import {StyleSheet, Text, View} from "react-native";
import { AntDesign } from "@expo/vector-icons"; 
import GenericInput from "./GenericInput";


const SearchInput = (props) => {
    const onChange = (text)=>{
        if(props.onChange){
            props.onChange(text);
        }
        
    }
    return(
        <>  
            <View style={styles.viewStyle}>
                <AntDesign name="search1" size={24} color="black" />
                <Text style={styles.textStyle}>{props.label}</Text>
                <GenericInput initialValue={props.initialValue}
                        style={styles.textInputStyle}
                        onChangeText={onChange} />
            </View>
        </>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection: "row",
        backgroundColor:"#d1cdcd",
        borderRadius:50
    },
    textInputStyle:{
        marginLeft: 5
    },
    textStyle:{
        alignSelf:"center"
    }
})