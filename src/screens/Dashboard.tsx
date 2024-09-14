import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import LogoutBtn from "../components/LogoutBtn";

export default function Dashboard() {
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
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle= {theme === 'light'? 'dark-content':'light-content'} backgroundColor={theme === 'light'? '#F5F5F5':'#1B1A26'} />
            <Text>Dashboard</Text>
            <Button title="Alterar Tema" onPress={toggleTheme}/>
            <LogoutBtn/>
        </SafeAreaView>
    )
}