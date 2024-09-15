import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

type AlertCardProps = {
    title: string;
    message: string;
    date: string;
}
export default function AlertCard(AlertCardProps: AlertCardProps){  {
    const {theme} = useTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme === 'light'? '#DDDDDD' :'#32313c',
            alignItems: 'flex-start',
            justifyContent: 'center',
            minWidth: '90%',
            height: 'auto',
            padding: 12,
            borderColor: '#F2600C',
            borderWidth: 1,
            borderRadius: 10,
            gap: 8,
        },
        textTitle:{
            color: theme === 'light'? '#1B1A26' :'#F5F5F5',
            fontSize: 18,
            fontWeight: 'bold',
        },
        textMessage:{
            color: theme === 'light'? '#1B1A26' :'#F5F5F5',
            fontSize: 14,
        }
    });
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>{AlertCardProps.title}</Text>
            <Text style={styles.textMessage}>{AlertCardProps.message}</Text>
            <Text style={styles.textMessage}>{AlertCardProps.date}</Text>
        </View>
    )
}}