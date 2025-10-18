import React from 'react'
import { Text, View } from 'react-native'

export interface EducationPacketProps{
    degree:string
    school:string,
    year:string
}

const EducationPacket = ({degree, school, year}:EducationPacketProps) => {
  return (
    <View className='flex flex-row w-full gap-5 items-start'>
      <View className='h-full flex flex-col items-center'>
        <View className='flex items-center justify-center flex-1'>
            <View className='bg-[#ec924a] rounded-full size-3'/>
        </View>
        {/* <View style={{width: 2,
        flexGrow: 1,
        minHeight: 30,
        backgroundColor: '#d3d3d3',
        // marginTop: -4,
    }}/>
        <View className='flex items-center justify-center flex-1'>
            <View className='bg-[#ec924a] rounded-full size-3'/>
        </View> */}
      </View>
      <View className='flex flex-col justify-between'>
        <Text className='text-xl font-extrabold'>{degree}</Text>
        <Text>{school}</Text>
      </View>
    </View>
  )
}

export default EducationPacket