import { ActivityIndicator, View, Text } from 'react-native';
import { router } from "expo-router"
import { useEffect } from 'react';

const Index = () => {

  useEffect(() => {
    router.replace('/(tabs)');
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="small" color="#23DB7F" />
    </View>
  );
};

export default Index;