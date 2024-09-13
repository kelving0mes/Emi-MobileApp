import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tabs.routes";
import StackNavigation from "./stack.routes";

export default function Routes() {
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    )
  }