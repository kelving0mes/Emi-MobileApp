import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function LoginBtn() {
    return (
    <TouchableOpacity style={styles.loginBtn} onPress={() => { }}>
        <Text style={{ color: '#FFF' }}>Entrar</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: '#F2600C',
        width: '65%',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
});