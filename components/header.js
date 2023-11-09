import { View, Text, StyleSheet} from "react-native"

const Header = () =>{
    return(
        <View style={styles.header}>
            <Text style={styles.text}>My Todos</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        backgroundColor: "coral",
        paddingTop: 18,
        height: 60,
        marginBottom: 16,
        marginTop:30,
    },
    text:{
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default Header;