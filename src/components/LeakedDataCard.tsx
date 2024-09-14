import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../hooks/useTheme";

type LeakedDataCardProps = {
    dataTypeTitle: string;
    dataTypeText: string;
    amountDataTitle: string;
    amountDataText: string;
    amountSizeTitle: string;
    amountSizeText: string;
    statusTitle: string;
    statusText: string;
    dateTitle: string;
    dateText: string;
    urlTitle: string;
    urlText: string;
}
export default function LeakedDataCard(LeakedDataCardProps: LeakedDataCardProps){  {
    const {theme} = useTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme === 'light'? '#DDDDDD' :'#32313c',
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
            fontSize: 16,
            fontWeight: 'bold',
        },
        textContent:{
            color: theme === 'light'? '#1B1A26' :'#F5F5F5',
            fontSize: 14,
        },
        containerRow:{
            minWidth: '90%',
            flexDirection:"row",
            justifyContent: 'space-between',
        },
    });
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>{LeakedDataCardProps.dataTypeTitle}</Text>
            <Text style={styles.textContent}>{LeakedDataCardProps.dataTypeText}</Text>
            <Text style={styles.textTitle}>{LeakedDataCardProps.amountDataTitle}</Text>
            <Text style={styles.textContent}>{LeakedDataCardProps.amountDataText}</Text>
            <View style={styles.containerRow}>
                <Text style={styles.textTitle}>{LeakedDataCardProps.amountSizeTitle}</Text>
                <Text style={styles.textContent}>{LeakedDataCardProps.amountSizeText}</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.textTitle}>{LeakedDataCardProps.statusTitle}</Text>
                <Text style={styles.textContent}>{LeakedDataCardProps.statusText}</Text>
            </View>
            <View style={styles.containerRow}>
                <Text style={styles.textTitle}>{LeakedDataCardProps.dateTitle}</Text>
                <Text style={styles.textContent}>{LeakedDataCardProps.dateText}</Text>
            </View>
                <Text style={styles.textTitle}>{LeakedDataCardProps.urlTitle}</Text>
                <Text style={styles.textContent}>{LeakedDataCardProps.urlText}</Text>
        </View>
    )
}}