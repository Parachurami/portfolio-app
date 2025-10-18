import { Stack } from "expo-router";
//@ts-ignore
import { View } from "react-native";
import '../global.css';
export default function RootLayout() {
 
  return(
    <View
    //  style={{paddingTop:top}} 
     className={'flex flex-1'}>
      <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
      </Stack>
    </View>

  )

}
