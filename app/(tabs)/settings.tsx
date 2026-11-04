import { View, ScrollView } from 'react-native'
import { useColorScheme } from 'nativewind';
import { SafeAreaView } from 'react-native-safe-area-context'
import ThemedView from 'components/theme/ThemedView'
import ThemedText from 'components/theme/ThemedText'

import ListButton from '@/components/buttons/ListButton';
import ListToggle from '@/components/buttons/ListToggle';

const settings = () => {
  // use the native wind colour scheme hook to change the device colour scheme
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className='flex-1 bg-bg-light dark:bg-bg-dark px-4'>
      <ThemedText variant='title' className='font-bold pb-2'>Settings</ThemedText>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View className='gap-4 pb-20'>
          {/*Settings Section - APPEARANCE*/}
          <View>
            <ThemedText className='my-2 font-semibold'>Appearance</ThemedText>
            <ThemedView className='px-4'>
              <ListToggle
                text="Theme"
                iconName={ colorScheme === "dark" ? "Moon" : "Sun" }
                value={colorScheme === "dark"}
                onValueChange={() => toggleColorScheme()}
              />
            </ThemedView>
          </View>
          
          {/*Settings Section - SUBSCRIPTION*/}
          <View>
            <ThemedText className='my-2 font-semibold'>Subscription</ThemedText>
            <ThemedView className='px-4'>
              <ListButton
                text="Manage Subscription"
                iconName='CreditCard'
                border
              />
              <ListButton
                text="Restore Purchase"
                iconName='ShoppingBag'
              />
            </ThemedView>
          </View>

          {/*Settings Section - SUBSCRIPTION*/}
          <View>
            <ThemedText className='my-2 font-semibold'>Notifications & Sounds</ThemedText>
            <ThemedView className='px-4'>
              <ListToggle
                text='Daily Reminder'
                iconName="BellRing"
                value
                onValueChange={() => { }}
                border
              />
              <ListToggle
                text='Sounds'
                iconName="Volume2"
                value
                onValueChange={() => { }}
                border
              />
              <ListToggle
                text='Haptics'
                iconName="Vibrate"
                value
                onValueChange={() => { }}
              />
            </ThemedView>
          </View>

          {/*Settings Section - Policies*/}
          <View>
            <ThemedText className='my-2 font-semibold'>Privacy & Security</ThemedText>
            <ThemedView className='px-4'>
              <ListButton
                text="Privacy Policy"
                iconName='HatGlasses'
                border
              />
              <ListButton
                text="Terms of Service"
                iconName='Handshake'
                border
              />
              <ListButton
                text="Erase Your Data"
                iconName='Eraser'
              />
            </ThemedView>
          </View>

          {/*Settings Section - Support*/}
          <View>
            <ThemedText className='my-2 font-semibold'>Privacy & Security</ThemedText>
            <ThemedView className='px-4'>
              <ListButton
                text="FAQs"
                iconName='CircleQuestionMark'
                border
              />
              <ListButton
                text="FeedBack"
                iconName='MessageCircle'
              />
            </ThemedView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default settings