import React, { useContext } from "react";
import {Text} from "react-native";
import { AppContext } from "../../context/AppContext";

const ShowDetail = () => {
    const {state} = useContext(AppContext);
    return(
        <>
            <Text>{state.itemSelected}</Text>
        </>
    )

}


export default ShowDetail;