import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native'
import useThemeContext from './hooks/useTheme'

const Contacts = () => {
  const LINKEDIN_URL = 'https://www.linkedin.com/in/james-kaile';
const GITHUB_URL = 'https://github.com/Parachurami';

const GMAIL_ADDRESS = 'mailto:kailedev3@gmail.com?subject=App Inquiry&body=Hello, I have a question...';

const PHONE_NUMBER = 'tel:+2348104517357'; 

const WHATSAPP_NUMBER = "whatsapp://send?phone=2348104517357&text='Hello there"; 

const openLink = async (url:string) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    // Show an alert if the URL can't be handled
    // This is common for app-specific links if the app is not installed
    Alert.alert(`Error`, `Sorry, we can't open this URL: ${url}`);
  }
};
  const {colors} = useThemeContext()
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
            <View style={{backgroundColor:colors.gradients.surface[1]}} className='h-full pl-3 pr-3 pt-6 flex flex-col gap-4 w-full rounded-t-3xl static -top-5 z-20 bg-white'>
              <View style={{backgroundColor:colors.backgrounds.input}}className='w-full flex flex-col items-start justify-center gap-4 pl-5 pr-5 pt-3 pb-3 shadow shadow-black bg-white rounded-md'>
                <Text style={{color:colors.text}} className='text-2xl self-start font-bold'>Mobile</Text>
                <View className='flex flex-row gap-5'>
                  <TouchableOpacity onPress={()=>openLink(PHONE_NUMBER)}>
                    <FontAwesome name='phone-square' size={30} color={colors.text}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>openLink(WHATSAPP_NUMBER)}>
                    <FontAwesome6 name='square-whatsapp' size={30} color={colors.text}/>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{backgroundColor:colors.backgrounds.input}}className='w-full flex flex-col items-start justify-center gap-4 pl-5 pr-5 pt-3 pb-3 shadow shadow-black bg-white rounded-md'>
                <Text style={{color:colors.text}} className='text-2xl self-start font-bold'>Social</Text>
                <View className='flex flex-row gap-5'>
                  <TouchableOpacity onPress={()=>openLink(GITHUB_URL)}>
                    <Ionicons name='logo-github' size={30} color={colors.text}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>openLink(LINKEDIN_URL)}>
                    <Ionicons name='logo-linkedin' size={30} color={colors.text}/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>openLink(GMAIL_ADDRESS)}>
                    <Ionicons name='mail' size={30} color={colors.text}/>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>
        </View>
  )
}

export default Contacts