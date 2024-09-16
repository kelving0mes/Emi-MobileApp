import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import LogoutBtn from "../components/LogoutBtn";
import ThemeSwitch from "../components/ThemeSwitch";
import DomainChart from "../components/DomainChart";

export default function Dashboard() {
    const {theme} = useTheme()

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: theme === 'light'? '#F5F5F5' :'#1B1A26',
        alignItems: 'center',
        justifyContent: 'center',
      },
      contentContainer:{
        marginTop: 12,
        gap: 20,
        paddingBottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        color: theme === 'light'? '#1B1A26' :'#F5F5F5',
        fontSize: 21,
      },
      });
    return(
      <SafeAreaView style={styles.container}>
          <StatusBar barStyle= {theme === 'light'? 'dark-content':'light-content'} backgroundColor={theme === 'light'? '#F5F5F5':'#1B1A26'} />
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.text}>Estatísticas do Monitoramento</Text>
            <DomainChart/>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", minWidth:'90%' }}>
              <Text style={styles.text}>Alterar tema</Text>
              <ThemeSwitch/>
            </View>
            <LogoutBtn/>
          </ScrollView>
        </SafeAreaView>
    )
}