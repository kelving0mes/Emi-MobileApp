import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useTheme } from '../hooks/useTheme'
import Alertas from '../screens/Alertas'
import Dashboard from '../screens/Dashboard'
import MonitorarDominios from '../screens/Dominios'
import VazamentoDado from '../screens/Vazamento'

const TabNavigator = createBottomTabNavigator()

export default function TabNavigation() {
    const {theme} = useTheme()
    return (
      <TabNavigator.Navigator screenOptions={{
        tabBarActiveTintColor: '#F2600C',
        tabBarInactiveTintColor: theme === 'light'? '#1B1A26' : '#FFF',
        tabBarBadgeStyle: { backgroundColor: '#F2600C'} ,
        tabBarStyle: { backgroundColor: theme === 'light'? '#FFF' :'#1B1A26' },
        
      }}>
        <TabNavigator.Screen name='Início' component={Dashboard} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name='home' size={size} color={color} />
        }} />
        <TabNavigator.Screen name='Monitoramento' component={MonitorarDominios} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name='globe' size={size} color={color} />
        }} />
        <TabNavigator.Screen name='Dados Vazados' component={VazamentoDado} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name='exclamation' size={size} color={color} />
        }} />
        <TabNavigator.Screen name='Alertas' component={Alertas} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <SimpleLineIcons name='bell' size={size} color={color} />,
          tabBarBadge: 3,
        }} />
      </TabNavigator.Navigator>
    )
  }