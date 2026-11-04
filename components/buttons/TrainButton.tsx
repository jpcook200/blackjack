import { View, Text, TouchableOpacity, ImageSourcePropType, Image } from 'react-native'
import ThemedText from '../theme/ThemedText'
import ThemedView from '../theme/ThemedView'
import MainButton from './MainButton';
import Pill from '../Pill';

interface TrainButtonProps { 
  title: string;
  subtitle: string;
  iconSource: ImageSourcePropType;
}

const TrainButton = ({ title, subtitle, iconSource }: TrainButtonProps) => {
  return (
    <ThemedView className='p-4'>
      <View className='flex-row gap-4 mb-4'>
        <View className='w-24 h-24 rounded-lg border border-border-light dark:border-border-dark bg-gray-800'>
          <Image
            source={iconSource}
            className='w-full h-full'
          />
        </View>
        <View>
          <ThemedText variant='subtitle'>{ title }</ThemedText>
          <ThemedText className='mb-2' variant='secondary'>{subtitle}</ThemedText>
          <View>
            <Pill
              text="Beginner"
            />
          </View>
        </View>
      </View>
      <MainButton
        text="Select"
        onPress={() => { }}
        variant='mono'
        next
      />
    </ThemedView>
  )
}

export default TrainButton