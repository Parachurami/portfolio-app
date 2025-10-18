import React from 'react'
import { Text, View } from 'react-native'
import useThemeContext from '../hooks/useTheme'

export interface ExperienceCardProp{
    jobTitle:string
    companyName:string
    startMonth:string
    endMonth:string
}

const ExperienceCard = ({jobTitle, companyName, startMonth, endMonth}:ExperienceCardProp) => {
  const {colors} = useThemeContext()
  return (
    <View style={{backgroundColor:colors.shadow}} className='w-full flex flex-row p-3 rounded-2xl shadow-black shadow bg-white justify-between items-center'>
        <View className='h-full flex flex-row' style={{gap:15}}>
            <View className='h-full bg-[#d3935a] rounded-xl' style={{width:5}}/>
            <View className='flex flex-col p-0 m-0'>
                <Text style={{color:colors.text}} className='text-[24px] font-extrabold'>{jobTitle}</Text>
                <Text className='text-[16px] text-[#959595FF] font-bold'>{companyName}</Text>
                <Text className='font-xl text-[#d3925acd] mt-3'>{startMonth} - {endMonth}</Text>
            </View>
        </View>
    </View>
  )
}

export default ExperienceCard