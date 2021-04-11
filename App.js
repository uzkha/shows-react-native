import React, { useReducer } from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home";
import ShowsScreen from "./src/screens/Shows";
import NewShowScreen from "./src/screens/NewShow";
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'; 
import { AppContext, appReducer, initialState } from "./src/context/AppContext";




const TabNav = createBottomTabNavigator();

const tabBarStyles = StyleSheet.create({
  viewStyle:{
    flexDirection:"row",
    justifyContent:"space-around"
  }
})
const TabBar = ({navigation, state}) => {

  return(
    <View style={tabBarStyles.viewStyle}>
      <>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" size={30} color={state.index===0?"blue":"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Shows")}>
          <Feather name="list" size={30} color={state.index===1?"blue":"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("NewShow")}>
          <Ionicons name="md-add" size={30} color={state.index===2?"blue":"black"} />
        </TouchableOpacity>
       
      </>
    </View>
  )
}

function App() {
  const [state,dispatch] = useReducer(appReducer,initialState);
  return (

    <AppContext.Provider value={{state,dispatch}}>
      <NavigationContainer>
        <TabNav.Navigator tabBar={props=> <TabBar {...props}/>}>
          <TabNav.Screen name={"Home"} component={HomeScreen}/>
          <TabNav.Screen name={"Shows"} component={ShowsScreen}/>
          <TabNav.Screen name={"NewShow"} component={NewShowScreen}/>
        </TabNav.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}

export default App;