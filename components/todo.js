import { StyleSheet, TouchableOpacity, Text, Pressable, View } from "react-native"
import {MaterialIcons} from "@expo/vector-icons"

const Todo = ({item, deleteHandler}) => {
    return(
        <Pressable >
            <View style={styles.forT}>
            <Text >{item.text}</Text>
            <MaterialIcons onPress={()=>deleteHandler(item.id)} name='delete' size={20} color='red'/>
            </View>
        </Pressable>
    )
}

export default Todo;

const styles = StyleSheet.create({
    forT:{
        padding:16,
        marginTop: 10,
        borderWidth:1,
        borderStyle: "dashed",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})