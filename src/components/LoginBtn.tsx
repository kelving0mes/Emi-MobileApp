import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  TabNavigation: any;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList,'TabNavigation'>;

export default function LoginBtn() {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    return (
        <TouchableOpacity 
            style={styles.loginBtn} 
            onPress={() => navigation.navigate('TabNavigation')}>
            <Text style={{ fontSize:20, color: '#F5F5F5' }}>Entrar</Text>
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
