import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login'
import TabNavigation from './tabs.routes'

const StackNavigator = createStackNavigator()

export default function StackNavigation() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <StackNavigator.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }}/>
    </StackNavigator.Navigator>
  )
}