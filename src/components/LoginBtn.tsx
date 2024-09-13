import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';  // Importação do hook de navegação

// Tipagem da navegação
type RootStackParamList = {
  TabNavigation: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TabNavigation'
>;

export default function LoginBtn() {
    // Usando o hook para acessar a navegação
    const navigation = useNavigation<LoginScreenNavigationProp>();

    return (
        <TouchableOpacity 
            style={styles.loginBtn} 
            onPress={() => navigation.navigate('TabNavigation')}  // Navega para o TabNavigator
        >
            <Text style={{ color: '#FFF' }}>Entrar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: '#1B1A26',
        width: '65%',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
});
