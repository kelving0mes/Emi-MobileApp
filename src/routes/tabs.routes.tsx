import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/dashboard'
import MonitorarDominios from '../screens/dominios'
import { Feather } from '@expo/vector-icons'
import VazamentoDado from '../screens/vazamento'
import Alertas from '../screens/alertas'

const TabNavigator = createBottomTabNavigator()

export default function TabNavigation() {
    return (
      <TabNavigator.Navigator>
        <TabNavigator.Screen name='Feed' component={Dashboard} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
        }} />
        <TabNavigator.Screen name='New' component={MonitorarDominios} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Feather name='plus-circle' size={size} color={color} />
        }} />
        <TabNavigator.Screen name='Vazamento' component={VazamentoDado} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
        }} />
        <TabNavigator.Screen name='Alerta' component={Alertas} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
        }} />
      </TabNavigator.Navigator>
    )
  }