import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import AlertCard from "../components/AlertCard";

export default function Alertas() {
  const {theme} = useTheme()
  const styles = StyleSheet.create({
      container: {
        backgroundColor: theme === 'light'? '#F5F5F5' :'#1B1A26',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        color: theme === 'light'? '#1B1A26' :'#F5F5F5',
        fontSize: 21,
        alignSelf: 'flex-start',
        marginTop: 56,
        marginLeft: 20,
      },
      contentContainer:{
        marginTop: 16,
        gap: 12,
        paddingBottom: 80,
      },
    });
  return(
      <View style={styles.container}>
          <Text style={styles.text}>Últimos alertas</Text>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <AlertCard 
              title="Alerta 1"
              message="Mensagem do alerta 1"
              date="10/10/2021"
              />
            <AlertCard 
              title="Alerta 2"
              message="Mensagem do alerta 2"
              date="10/10/2021"
              />
            <AlertCard 
              title="Alerta 3"
              message="Mensagem do alerta 3"
              date="10/10/2021"
              />
            <AlertCard 
              title="Alerta 4"
              message="Mensagem do alerta 4"
              date="10/10/2021"
              />
            <AlertCard 
              title="Alerta 5"
              message="Mensagem do alerta 5"
              date="10/10/2021"
              />
            <AlertCard 
              title="Alerta 6"
              message="Mensagem do alerta 6"
              date="10/10/2021"
              />
            <AlertCard 
            title="Alerta 7"
            message="Mensagem do alerta 7"
            date="10/10/2021"
            />             
          </ScrollView>
      </View>
  )
}