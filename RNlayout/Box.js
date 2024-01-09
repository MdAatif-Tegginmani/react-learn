import { Text, View , StyleSheet } from "react-native";


export default function Box({children, style}){
    return(
        <View style = {[styles.box , style]}>
            <Text style = {[styles.boxText ]}>{children}</Text>
        
        
        
        </View>
    )
}

 const styles = StyleSheet.create({

    box: {
        backgroundColor:'#fff',
        padding: 20,

    },

    boxText :{
        fontSize:24,
        fontWeight:"bold" ,
        textAlign:'center',
        color: 'white', 

    },


 })