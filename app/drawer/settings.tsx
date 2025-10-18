import { AntDesign } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
//@ts-ignore
const Settings = () => {
  const navigation = useNavigation();
  const toggleDrawer = () =>{
    navigation.dispatch(DrawerActions.toggleDrawer);
  }
  return (
    <View className='flex flex-1 relative'>
      <View className='flex flex-1 flex-row z-0 absolute top-0 bottom-0 left-0 right-0'>
        <View className='flex flex-1 bg-white'/>
        <View className='flex flex-1 bg-[#ebebeb'/>
      </View>
      <View className='flex flex-1 z-50 flex-col justify-between'>
        <View>
          <View className='w-full flex flex-row items-center justify-between px-3'>
            <TouchableOpacity onPress={toggleDrawer}>
              <AntDesign name='align-left' size={20}/>
            </TouchableOpacity>
          </View>
          <Text>Settings</Text>
        </View>
      </View>
    </View>
  )
}

export default Settings