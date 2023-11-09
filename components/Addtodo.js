import { StyleSheet, TextInput, View } from "react-native"
import { useState } from "react"
const AddTodo = () =>{
    const [text, setText] = useState('')
    const changeText = (val)=>{
        setText(val)
    }
    return(
        <View>
            <TextInput
            placeholder="add new todo ..."
            onChangeText={changeText}
            style={styles.forInput}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    forInput:{
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginBottom: 10,
        borderBottomColor: "#000",
        borderBottomWidth: 1,
    }
})

export default AddTodo;