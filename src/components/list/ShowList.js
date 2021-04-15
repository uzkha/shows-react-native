import React, { useContext } from "react";
import {FlatList, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import { AppContext } from "../../context/AppContext";
import {useShows} from "../../hooks/useShows"



export const ShowList = () => {

    const {shows} = useShows();
    const {dispatch} = useContext(AppContext);

   
    return (
        <>
            <View style={styles.listStyle}>
                <FlatList 
                    data={shows.sort((show1,show2)=>""+show1.name.localeCompare(show2.name))}
                    keyExtractor={(item)=> item.id}
                    renderItem={({item}) => <TouchableOpacity
                                                onPress={()=> dispatch({type: "setItemSelected", payload:item.id})}                             
                                            >
                                                <View style={styles.buttonStyle}>
                                                    <Text>{item.name}</Text>
                                                </View>
                                            </TouchableOpacity>}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        flexDirection: "row",
        justifyContent: "center",
        borderColor:"gray",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "#DCDCDC"
    },
    listStyle:{
        marginTop: 50
    }
})