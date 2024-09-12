import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tabs.routes";

export default function Routes() {
    return (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    )
  }