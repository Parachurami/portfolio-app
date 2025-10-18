import { Stack } from "expo-router";
//@ts-ignore
import { View } from "react-native";
import '../global.css';
import { ThemeContextProvider } from "./hooks/useTheme";
export default function RootLayout() {
 
  return(
    
    <ThemeContextProvider>

      <View
      //  style={{paddingTop:top}} 
      className={'flex flex-1'}>
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="index"/>
        </Stack>
      </View>
    </ThemeContextProvider>

  )

}
