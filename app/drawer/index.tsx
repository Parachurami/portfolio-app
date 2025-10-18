import { AntDesign } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
//@ts-ignore
import profile from '@/assets/images/profile.jpg';
const Index = () => {
  const navigation = useNavigation();
  const router = useRouter()

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
            <TouchableOpacity className='bg-[#E2B082FF] p-3 rounded-2xl flex flex-row gap-2 items-center' onPress={()=>router.push("../contacts")}>
              <Text className='text-xl'>Contacts</Text>
              <AntDesign name='arrow-right' size={18} color={'black'}/>
            </TouchableOpacity>
          </View>
          <View className='mt-10 pl-3 pr-3'>
            <Text className='text-[73px] font-extrabold text-wrap whitespace-pre-wrap text-[#202020]'>KAILE <Text className='text-[#010101]'>JAMES</Text></Text>
            <Text className='text-[24px] mt-1 text-[#202020]'>SOFTWARE DEVELOPER</Text>
          </View>
        </View>
        <View className='w-full bg-[#474747] h-[400px] rounded-tr-[70px] relative'>
          <Image source={profile} resizeMode='cover' className='size-44 rounded-full absolute -top-20 '/>
          <View className='w-full flex flex-row justify-end mt-7'>
            <TouchableOpacity className='flex flex-row gap-5 mr-14 p-5 bg-[#E2B082FF] rounded-full' onPress={() => router.push('../details')}>
              <AntDesign name='arrow-right' size={24} color={'black'}/>
            </TouchableOpacity>
          </View>
          <View className='w-full mt-5 pl-5 pr-5'>
            <Text className='text-white text-xl text-justify' style={{fontFamily:'sans-serif'}}>
              Full-stack Front-End and Mobile Developer with 4+ years building production React.js, 
Next.js, React Native, and Flutter applications. Skilled at delivering cross-platform apps, 
high-performance websites, and scalable UI components with a focus on performance, 
accessibility, SEO, and maintainable code. 
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Index