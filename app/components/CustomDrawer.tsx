import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const CustomDrawer = (props:any) => {
    const {top} = useSafeAreaInsets()
  return (
    <View className='flex flex-1 bg-[#fbdcb1]'>
        <View style={{paddingTop:top}} className='w-full h-40 bg-[#f9ebd6] flex flex-row items-center justify-start'>
            <Text className='text-[45px] text-[#010101] font-bold mb-5 ml-4'>My Portfolio</Text>
        </View>
        <DrawerContentScrollView
        contentContainerStyle={{
            marginTop:0
        }}
         {...props}
         >
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer