import { StyleSheet, Text, TextInput, View } from "react-native";
import LoginBtn from "../components/LoginBtn";
import LoginHeader from "../components/LoginHeader";


export default function Login() {
    return (
        <View style={styles.container}>
            <View style={{flex:2}}>
                <LoginHeader />
            </View>
            <View style={styles.viewContainer}>
                <Text style={styles.loginText}>Faça seu login</Text>
                <TextInput placeholder="email" style={styles.textInput} />
                <TextInput placeholder="senha" secureTextEntry={true} style={styles.textInput} />
                <LoginBtn />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2ECE4',
    },
    viewContainer:{
        flex:6, 
        backgroundColor: '#F2600C',
        width:'100%', 
        alignItems:"center",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
    },
    loginText: {
        fontSize: 24,
        color: '#F2ECE4',
        marginVertical: 80,
    },
    textInput: {
        backgroundColor: '#FFF',
        width: '65%',
        padding: 12,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#1B1A26',
        marginBottom: 8,
    },
});
