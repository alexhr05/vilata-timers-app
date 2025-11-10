import { images } from '@/constants/images';
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fetchDevices } from '../api';

const devicesData = [
  {
    id: 1,
    name: "Бойлер Кухня",
    lastOff: "2025-10-27 17:45:29",
    times: [7, 15],
  },
  {
    id: 2,
    name: "Бойлер Баня",
    lastOff: "2025-10-27 05:49:29",
    times: [55, 85],
  },
  {
    id: 3,
    name: "Вилата Помпа",
    lastOff: "2025-10-27 05:49:29",
    times: [7, 20],
  },
  {
    id: 4,
    name: "Вилата Осветление откъм Двор",
    lastOff: "2025-10-24 18:57:29",
    times: [10, 180],
  },
  {
    id: 5,
    name: "Вилата Осветление откъм Улица",
    lastOff: "2025-10-24 18:57:35",
    times: [10, 180],
  },
  {
    id: 6,
    name: "Вилата Осветление Ограда",
    lastOff: "2025-10-24 19:10:22",
    times: [10, 180],
  },
];


const first = () => {
  const [activeDevices, setActiveDevices] = useState<{ [key: number]: boolean }>({});
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    async function loadDevices() {
      try {
        const data = await fetchDevices();
        setDevices(data);
      } catch (err) {
        console.log("Грешка при зареждане на устройствата:", err);
      } finally {
        setLoading(false);
      }
    }

    loadDevices();
  }, []);

  


  const toggleDevice = (id: number) => {
    setActiveDevices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if(loading){
    return(
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="blue" />
        <Text>Зареждане...</Text>
      </View>
    )
  }

  if (error)
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Грешка: {error}</Text>
      </View>
    );

  

  return (
    
    <ImageBackground className="flex-1 w-full h-full" source={images.ImageBackground}
        resizeMode='stretch'
        >
        <SafeAreaView className="flex-1 items-center justify-center bg-black/10 ">
        <ScrollView className="mt-10 mb-10" contentContainerStyle={{ paddingVertical: 20 }}>
        {devices.map((device) => (
          <View
            key={device.id}
            className="mx-4 mb-4 rounded-xl shadow-md bg-[#e9e8dd] overflow-hidden"
          >
            {/* Header */}
            <View className="bg-[#79aaa5] py-2 px-3">
              <Text className="text-xl font-semibold text-center text-gray-600">
                {device.name}
              </Text>
            </View>
            {/* Body of Every Box with buttons */}
            <View className="flex-row items-center p-2">
              
              <TouchableOpacity
                onPress={() => toggleDevice(device.id)}
                className="mr-2"
              >
                <Image
                  source={
                    activeDevices[device.id]
                      ? images.icon_on
                      : images.icon_off
                  }
                  className="w-16 h-16"
                  resizeMode="contain"
                />
              </TouchableOpacity>


              <View className="flex-1">
                  <Text className="text-md text-gray-700">
                    IP: {device.ip}
                  </Text>
                  <Text className="text-md text-gray-700">
                    Статус: {device.status}
                  </Text>
                <Text className="text-md text-gray-700">
                  Изключил: {device.lastOff}
                </Text>
                {/* Buttons */}
                <View className="flex-row mt-2 justify-between">
                  {device.times?.map((t:number) => (
                    <TouchableOpacity
                      key={t}
                      className="bg-gray-500 rounded-md px-3 py-1"
                    >
                      <Text className="text-white font-semibold">{t} мин</Text>
                    </TouchableOpacity>
                  ))}
                  <TouchableOpacity className="bg-gray-500 rounded-md px-3 py-1">
                    <Text className="text-white font-semibold">Изключи</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      </SafeAreaView>
    </ImageBackground>
    
  )
}

export default first

const styles = StyleSheet.create({})