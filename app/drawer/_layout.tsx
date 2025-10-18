import { Feather, Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomDrawer from '../components/CustomDrawer'
import useThemeContext from '../hooks/useTheme'

const DrawerLayout = () => {
  const top = useSafeAreaInsets().top
  const {colors, isDarkMode} = useThemeContext()
  return (
    <Drawer
    drawerContent={CustomDrawer}
    screenOptions={
      {
        headerShown:false, 
        sceneStyle:{
          paddingTop:top+30,
          backgroundColor:colors.bg
        },
        drawerActiveTintColor:isDarkMode ?'#efefef': '#412D0AFF',
        // drawerActiveBackgroundColor:'transparent',
        drawerInactiveTintColor:'#484747FF'
      }
    }>
        <Drawer.Screen name='index' options={{title:'Home', drawerIcon:({color, size}) => (
          <Feather color={color} size={size} name='home'/>
        )}}/>
        <Drawer.Screen options={{title:'Settings', drawerIcon:({color, size}) => (
          <Ionicons color={color} size={size} name='settings-outline'/>
        )}} name='settings'/>
    </Drawer>
  )
}

export default DrawerLayout