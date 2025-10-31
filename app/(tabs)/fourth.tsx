import { images } from '@/constants/images'
import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text } from 'react-native'

const fourth = () => {
  return (
        <ImageBackground className="flex-1 w-full h-full" source={images.ImageBackground}
            resizeMode='stretch'
            >
            <SafeAreaView className="flex-1 items-center justify-center bg-black/10">
                <Text className="text-white text-2xl font-bold">Hello from NativeWind</Text>
          </SafeAreaView>
        </ImageBackground>
  )
}

export default fourth

const styles = StyleSheet.create({})