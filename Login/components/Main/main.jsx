import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function RegisterScreen({ navigation }) {

    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.TodoList}>TODO LIST</Text>
            </View>
            <View style={styles.List}>
                <Text style={styles.List_Text}>이름</Text>
            </View>
            <View>
               
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      TodoList: {
        fontSize:30,
      },
      List: {
        backgroundColor:"#F0F0F0",
        width:500,
        height:500,
        marginBottom:20,
      },
      List_Text : {
        zIndex:5,
      }
})