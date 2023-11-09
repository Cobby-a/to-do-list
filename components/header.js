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
        backgroundColor: "orange",
        paddingTop: 30,
        height: 80,
        marginBottom: 16,
    },
    text:{
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default Header;