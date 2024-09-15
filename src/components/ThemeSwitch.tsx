import { useState } from "react";
import { Switch, View } from "react-native";
import Icon from 'react-native-vector-icons/Octicons'
import { useTheme } from "../hooks/useTheme";

export default function ThemeSwitch() {
    const {theme, toggleTheme} = useTheme()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <View style={{flexDirection:'row', alignItems:'center', gap:4}}>  
          <Icon name='sun' size={22} color={theme === 'light'? '#1B1A26' :'#F5F5F5'}/>
            <Switch
              trackColor={{false: '#F2600C', true: '#F2600C'}}
              thumbColor={isEnabled ? '#DDDDDD' : '#DDDDDD'}
              onChange={toggleTheme}	
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Icon name='moon' size={22} color={theme === 'light'? '#1B1A26' :'#F5F5F5'}/>
          </View>
    )
}