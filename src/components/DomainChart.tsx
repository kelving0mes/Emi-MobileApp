import { StyleSheet, Text, View } from "react-native";
import { LineChart, PieChart } from "react-native-gifted-charts";
        
export default function DomainChart(){
    const lineData = [
        {value: 9, label: 'Mai'},
        {value: 10, label: 'Jun'},
        {value: 14, label: 'Jul'},
        {value: 11, label: 'Ago',},
        {value: 6, label: 'Set'},
      ];
      const pieData = [
        {value: 82.4, color: '#F2600C'},
        {value: 17.6, color: '#32313c'}
    ];
    const renderLegend = (text: string, color: string) => {
        return (
          <View style={{flexDirection: 'row', marginBottom: 12}}>
            <View
              style={{
                height: 18,
                width: 18,
                marginRight: 10,
                borderRadius: 4,
                backgroundColor: color,
              }}
            />
            <Text style={{color: '#32313c', fontSize: 16}}>{text || ''}</Text>
          </View>
        );
      };
    return(
        <View style={styles.container}>
            <Text style={styles.textLabel}>Subdomínios detectados</Text>
            <LineChart
                data={lineData}
                initialSpacing={40}
                spacing= {55}
                hideRules={true}
                thickness={3}
                color1="#F2600C"
                showYAxisIndices={true}
                yAxisColor="#F2600C"    
                showXAxisIndices={true}
                xAxisColor="#F2600C"
                isAnimated={true}
                dataPointsRadius={4}
            />
            <Text style={styles.textLabel}>Eficiência do Takedown</Text>
            <PieChart
                data={pieData}
                donut
                backgroundColor="#DDDDDD"
                innerRadius={80}
                centerLabelComponent={() => {
                return <Text style={{fontSize: 30}}>{pieData[0].value}%</Text>;
                }}
            />
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              {renderLegend('Ativos', '#32313c')}
              {renderLegend('Derrubados', '#F2600C')}
            </View>
    </View>
)
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        gap: 12,
        borderWidth: 1,
        borderColor: '#F2600C',
    },
    textLabel:{
        color: '#1B1A26', 
        fontSize: 22, 
        fontWeight: 'bold', 
        alignSelf: 'center', 
        margin: 12
    }
})