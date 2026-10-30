import { Tabs } from 'expo-router';

//import icons
import { House, PlayingCardsFan, CirclePlay, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#858B9A',

        tabBarStyle: {
          position: 'absolute',
          left: 24,
          right: 24,
          bottom: 24,

          height: 60,
          backgroundColor: '#060606',
          borderRadius: 32,
          elevation: 8, 
          marginInline: 12,

          borderTopWidth: 1,
          borderColor: "#888888",
          borderWidth: 1
        },

        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
        },

        tabBarIconStyle: {
          marginTop: 2,
          marginBottom: 2,
        },

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House color={color} size={22} strokeWidth={1.5} pointerEvents='none' />,
        }}
      />

      <Tabs.Screen
        name="train"
        options={{
          title: 'Train',
          tabBarIcon: ({color}) => <PlayingCardsFan color={color} size={22} strokeWidth={1.5} pointerEvents='none'/>
        }}
      />

      <Tabs.Screen
        name="play"
        options={{
          title: 'Play',
          tabBarIcon: ({color}) => <CirclePlay color={color} size={22} strokeWidth={1.5} pointerEvents='none'/>
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({color}) => <Settings color={color} size={22} strokeWidth={1.5} pointerEvents='none'/>
        }}
      />
    </Tabs>
  );
}