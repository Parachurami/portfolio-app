import { AntDesign } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, Switch, Text, TouchableOpacity, View } from 'react-native';
import useThemeContext from '../hooks/useTheme';
//@ts-ignore
const Settings = () => {
  
  const {toggleDarkMode, colors, isDarkMode} = useThemeContext()
  useEffect(()=>{
    setSwitchValue(isDarkMode)
  },[isDarkMode])
  const navigation = useNavigation();
  const toggleDrawer = () =>{
    navigation.dispatch(DrawerActions.toggleDrawer);
  }
  const [switchValue, setSwitchValue] = useState<boolean>(false)

  const toggleSwitch = () =>{
    setSwitchValue(prev => !prev)
    toggleDarkMode()
  }
  return (
    <View className='flex flex-1 relative' style={{backgroundColor:colors.gradients.surface[0]}}>
      <View className='flex flex-1 flex-row z-0 absolute top-0 bottom-0 left-0 right-0'>
        <View className='flex flex-1' style={{backgroundColor:colors.gradients.surface[0]}}/>
        <View className='flex flex-1' style={{backgroundColor:colors.gradients.surface[1]}}/>
      </View>
      <View className='flex flex-1 z-50 flex-col relative w-full h-full pl-4 pr-4'>
          <View className='w-full flex flex-row items-center px-3 absolute left-2'>
            <TouchableOpacity onPress={toggleDrawer}>
              <AntDesign name='align-left' size={20} color={colors.text}/>
            </TouchableOpacity>
          </View>
          <Text style={{color:colors.text}} className='self-center text-4xl font-bold'>Settings</Text>
          <View className='w-full flex flex-col mt-10'>
            <Pressable style={{backgroundColor:colors.backgrounds.input}} onPress={toggleSwitch} className='w-full flex flex-row justify-between items-center pl-5 pr-5 pt-3 pb-3 shadow shadow-black bg-white rounded-md'>
              <Text style={{color:colors.text}} className='text-xl'>Toggle Theme</Text>
              <Switch value={switchValue} onChange={toggleSwitch}/>
            </Pressable>
          </View>
      </View>
    </View>
  )
}

export default Settings