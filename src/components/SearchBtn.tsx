import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../hooks/useTheme";

type onPressProps = {
    onPress?: () => void
}
export default function SearchBtn({onPress}: onPressProps) {
    const {theme} = useTheme()
    const styles = StyleSheet.create({
        searchBtn: {
            backgroundColor: '#F2600C',
            width: '20%',
            padding: 12,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return (
        <TouchableOpacity style={styles.searchBtn} onPress={onPress} >
            <Icon name='search' size={22} color={theme === 'light'? '#F5F5F5' :'#1B1A26'}/>
        </TouchableOpacity>
    )
}