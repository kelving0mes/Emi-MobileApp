import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../hooks/useTheme';

type RootStackParamList = {
  Login: any;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList,'Login'>;

export default function LogoutBtn() {
    const {theme} = useTheme()
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const styles = StyleSheet.create({
        loginBtn: {
            backgroundColor: '#F2600C',
            width: '65%',
            padding: 12,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    return (
        <TouchableOpacity 
            style={styles.loginBtn} 
            onPress={() => navigation.navigate("Login")}>
            <Text style={{ fontSize:20, color: theme === 'light'? '#F5F5F5' :'#1B1A26' }}>Sair</Text>
        </TouchableOpacity>
    );
}