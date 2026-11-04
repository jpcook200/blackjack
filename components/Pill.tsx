import { View, Text } from 'react-native'
import React from 'react'

interface Props { 
  text: string;
}

const Pill = ({ text }: Props) => {
  return (
    <View className='bg-green-600 rounded-full px-3 py-1 w-auto self-start'>
      <Text className='text-white font-bold text-xs'>{ text }</Text>
    </View>
  )
}

export default Pill