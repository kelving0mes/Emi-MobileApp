import { Button, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

export default function Dashboard() {
    const {toggleTheme} = useTheme()
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#BFB39B',
          alignItems: 'center',
          justifyContent: 'center',
        },
    
      });
    return(
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <Button title="Alterar Tema" onPress={toggleTheme}/>
        </View>
    )
}