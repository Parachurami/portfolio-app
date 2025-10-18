import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Contacts = () => {
  const router = useRouter()
  return (
    <View className='flex flex-1 relative'>
          
          <View className='flex flex-1 z-50 flex-col justify-between w-full relative'>
            <View className='w-full bg-[#494949] z-10 flex items-center justify-center p-5 pt-[75px] pb-12 relative'>
              <TouchableOpacity onPress={()=>router.back()} className='absolute top-[68px] left-5 bg-[#ac9680] p-3 rounded-full'>
                    <Ionicons name='chevron-back' size={24} color={'black'}/>
                </TouchableOpacity>
              <Text className='text-center text-white text-4xl'>Contacts</Text>
            </View>
            <View className='h-full w-full rounded-t-3xl static -top-5 z-20 bg-white'>
              
            </View>
          </View>
        </View>
  )
}

export default Contacts