import { StyleSheet, TouchableOpacity, Text, Pressable } from "react-native"

const Todo = ({item, deleteHandler}) => {
    return(
        <Pressable onPress={()=>deleteHandler(item.id)}>
            <Text style={styles.forT}>{item.text}</Text>
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
    },
})