import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

import SearchBtn from '../components/SearchBtn';
import DomainStatistics from '../components/DomainStatistics';

export default function MonitorarDominios() {
  const { theme } = useTheme()
  const [domain, setDomain] = useState<string>('');
  const [showText, setShowText] = useState(false);

  const handlePress = () => {
    setShowText(true);
  };
  useEffect(() => {
    if (domain === '') {
      setShowText(false);
    }
  }, [domain]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'light' ? '#F5F5F5' : '#1B1A26',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      marginTop: 12,
      gap: 12,
      paddingBottom: 80,
      minWidth: '90%',
      maxWidth: '90%',
    },
    textInput: {
      backgroundColor: theme === 'light' ? '#DDDDDD' : '#32313c',
      width: '75%',
      padding: 12,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#F2600C',
    },
    text: {
      color: theme === 'light' ? '#1B1A26' : '#F5F5F5',
      fontSize: 21,
      alignSelf: 'flex-start',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <DomainStatistics detectedSubdomain={17} takedownNumber={14} activeSubdomain={3}/>
        <Text style={styles.text}>Pesquisar domínios</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <TextInput placeholder="Ex: fiap.com.br" style={styles.textInput}
            placeholderTextColor={theme === 'light' ? '#1B1A26' : '#F5F5F5'}
            value={domain} onChangeText={setDomain} />
          <SearchBtn onPress={handlePress}/>
        </View>
      {showText && <Text style={styles.text}>Buscando por {domain}</Text> &&
        <ActivityIndicator size="large" color="#F2600C" />}
      </ScrollView>
    </SafeAreaView>
  )
}