import { Image, StyleSheet, Text, View } from "react-native";


export default function LoginHeader(){
    return (
        <View style={styles.background}>
            <Image 
            source={require('../../assets/EmiAvatar.png')} // Substitua pelo caminho correto da sua imagem
            style={styles.emiIcon}
            />
            <Text style={styles.text}>Emi</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    emiIcon:{
        alignSelf: 'center',
        position: 'absolute',
        top: '20%',
        zIndex: 1,
        width: 120,
        height: 120,
    },
    background:{
        backgroundColor: '#F2600C',
        height:'100%',
        minWidth:'100%',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    text:{
        color: '#FFF',
        fontSize: 28,
        alignSelf: 'center',
        position: 'absolute',
        bottom: '5%',
    },
})