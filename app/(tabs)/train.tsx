import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainButton from '@/components/buttons/MainButton'
import ThemedText from '@/components/theme/ThemedText'
import ThemedView from '@/components/theme/ThemedView'
import TrainButton from '@/components/buttons/TrainButton'

const train = () => {
  return (
    <SafeAreaView className='flex-1 bg-bg-light dark:bg-bg-dark px-4'>
      { /*Header Section*/ }
      <View className='flex-row items-center mb-4'>
        <Image
          source={require("@/assets/images/logo.png")}
          className='w-16 h-16'
        />
        <ThemedText variant='title'>Train</ThemedText>
      </View>

      { /*Training Modes Section*/}
      <View className='gap-4'>
        <TrainButton
          title='Card Counting'
          subtitle='Swipe through cards and keep the count'
          iconSource={require("@/assets/images/counting_icon.png")}
        />
        <TrainButton
          title='Basic Strategy'
          subtitle='Recieve random hands and choose the correct play'
          iconSource={require("@/assets/images/basic_strat_icon.png")}
        />
        <TrainButton
          title="Full Strategy"
          subtitle="Perform correct play including count"
          iconSource={require("@/assets/images/combo_icon.png")}
        />
      </View>
    </SafeAreaView>
  )
}

export default train