import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

export default function MonitorarDominios() {
    const {theme, toggleTheme} = useTheme()
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme === 'light'? '#F5F5F5' :'#1B1A26',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    return(
        <View style={styles.container}>
            <Text>Monitoramento de domínios</Text>
        </View>
    )
}