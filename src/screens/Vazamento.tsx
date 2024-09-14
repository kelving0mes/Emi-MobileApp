import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import LeakedDataCard from "../components/LeakedDataCard";
import SearchBtn from "../components/SearchBtn";

export default function VazamentoDado() {
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
          gap: 12,
          paddingBottom: 80,
          minWidth:'90%',
          maxWidth:'90%',
        },
        text:{
          color: theme === 'light'? '#1B1A26' :'#F5F5F5',
          fontSize: 21,
          alignSelf: 'flex-start',
          marginTop: 56,
        },
        textInput: {
          backgroundColor: theme === 'light'? '#DDDDDD' :'#32313c',
          width: '75%',
          padding: 12,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#F2600C',
      },
      });
    return(
      <SafeAreaView style={styles.container}>
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.text}>Pesquisar vazamento de dados</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', }}>
            <TextInput placeholder="Email, Nome, CNPJ..." style={styles.textInput} placeholderTextColor={theme === 'light'? '#1B1A26' :'#F5F5F5'}/>
            <SearchBtn/>
          </View>
          <Text style={styles.text}>Últimos dados vazados</Text>
            <LeakedDataCard
              dataTypeTitle='Tipo de dado'
              dataTypeText='Informações pessoais'
              amountDataTitle='Quantidade de registros encontrados'
              amountDataText='100 registros'
              amountSizeTitle='Tamanho dos dados'
              amountSizeText='190 MB'
              statusTitle='Status'
              statusText='Mitigado'
              dateTitle='Encontrado em'
              dateText='10/10/2021'
              urlTitle='URL do vazamento'
              urlText='https://example.com'
            />
            <LeakedDataCard
              dataTypeTitle='Tipo de dado'
              dataTypeText='Informações pessoais'
              amountDataTitle='Quantidade de registros encontrados'
              amountDataText='100 registros'
              amountSizeTitle='Tamanho dos dados'
              amountSizeText='190 MB'
              statusTitle='Status'
              statusText='Mitigado'
              dateTitle='Encontrado em'
              dateText='10/10/2021'
              urlTitle='URL do vazamento'
              urlText='https://example.com'
            />
        </ScrollView>
      </SafeAreaView>
    )
}