import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

type numberProps = {
    detectedSubdomain: number;
    takedownNumber: number;
    activeSubdomain: number;
    }

export default function DomainStatistics(number: numberProps) {
    const { theme } = useTheme()
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
            alignSelf: 'center',
            color: theme === 'light'? '#1B1A26' :'#F5F5F5',
            fontSize: 14,
        },
        numbertext:{
            color: 'red',
            fontSize: 16,
            fontWeight: 'bold',
        },
    })
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textTitle}>Últimos 30 dias</Text>
                <Image source={require('../../assets/signal-live.gif')} style={{width: 30, height: 30}}/>
            </View>
            <View style={{flexDirection: 'row', alignSelf:'center'}}>
                <Text style={styles.numbertext}>{number.detectedSubdomain}</Text>
                <Text style={styles.textMessage}> subdomínios detectados</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf:'center'}}>
                <Text style={styles.numbertext}>{number.takedownNumber}</Text>            
                <Text style={styles.textMessage}> subdomínios derrubados</Text> 
            </View>
            <View style={{flexDirection: 'row', alignSelf:'center'}}>
                <Text style={styles.numbertext}>{number.activeSubdomain}</Text>
                <Text style={styles.textMessage}> subdomínios ativos</Text>
            </View>
        </View>
    )
}