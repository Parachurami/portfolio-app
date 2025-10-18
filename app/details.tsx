import React from 'react'
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
// @ts-ignore
import profile from '@/assets/images/profile.jpg'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import EducationPacket from './components/EducationPacket'
import ExperienceCard, { ExperienceCardProp } from './components/ExperienceCard'
import useThemeContext from './hooks/useTheme'

const Details = () => {
    const {colors} = useThemeContext()
     const {top} = useSafeAreaInsets();
    const router = useRouter()
    const skills:string[] = ['JavaScript(ES6)', 
        'React.js', 'Next.js', 'Dart', 
        'Flutter', 'React Native', 'Web development', 
        'Mobile Development', 'HTML5', 'CSS3'];
    const experienceList:ExperienceCardProp[] = [
        {
            jobTitle:'Mobile Developer',
            companyName:'Brightfort Fellowship',
            endMonth:'March 2025',
            startMonth:'Jan 2025'
        },
        {
            jobTitle:'Mobile Developer',
            companyName:'Petabyte Esports',
            startMonth:'Dec 2024',
            endMonth:'Feb 2025'
        },
        {
            jobTitle:'Mobile Developer',
            companyName:'Zkyte Technologies',
            startMonth:'September 2025',
            endMonth:'Present'
        },
    ]
  return (
    <>
    <StatusBar barStyle={colors.statusBarStyle}/>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:85, paddingTop:top, backgroundColor:colors.bg}}>
        <View className='flex flex-1 pl-5 pr-5 pt-5' style={{backgroundColor:colors.bg}}>
            <View style={{backgroundColor:colors.success}} className='bg-[#E2B082FF] flex items-center flex-col justify-center rounded-2xl w-full h-fit p-10 relative'>
                <TouchableOpacity onPress={()=>router.back()} className='absolute top-5 left-5 bg-[#eecaa8] p-3 rounded-full'>
                    <Ionicons name='chevron-back' size={24} color={'black'}/>
                </TouchableOpacity>
                <View className='flex flex-col mt-10'>
                    <Image source={profile} className='size-44 rounded-full'/>
                    <Text style={{color:colors.text}} className='text-[32px] font-bold'>Kaile James</Text>
                    <Text style={{color:colors.text}} className='text-[16px] text-center'>Software Developer</Text>
                </View>
            </View>
            <View className='mt-8 w-full'>
                <Text style={{color:colors.text}} className='text-4xl mb-5 font-bold'>Skills</Text>
                <View className='flex flex-row gap-5 flex-wrap items-center'>
                    {
                        skills.map(
                            (s, i) =>{
                                return(
                                    <View style={{backgroundColor:colors.border}} className='p-3 bg-[#dcdbdb] rounded-2xl' key={i}>
                                        <Text style={{color:colors.text}}>{s}</Text>
                                    </View>
                                )
                            }
                        )
                    }
                </View>
                <Text style={{color:colors.text}} className='text-4xl mb-5 font-bold mt-8'>Experience</Text>
                <View className='w-full flex flex-col gap-5'>
                    {
                        experienceList.map(
                            (e, i) => <ExperienceCard key={i} {...e}/>
                        )
                    }
                </View>
                <Text style={{color:colors.text}} className='text-4xl mb-5 font-bold mt-8'>Education</Text>
                <EducationPacket degree='Bsc. Computer Science' school='Landmark University, Omu-aran' year='2025'/>
            </View>
        </View>
    </ScrollView>
    </>
  )
}

export default Details