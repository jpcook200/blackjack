import { Switch, View, SwitchProps } from 'react-native'
import ThemedIcon from '../theme/ThemedIcon'
import ThemedText from '../theme/ThemedText'

interface ListToggleProps { 
  text: string;
  iconName?: string;
  onValueChange: SwitchProps['onValueChange'];
  value: boolean;
  border?: boolean
}

const ListToggle = ({ text, iconName, onValueChange, value, border }: ListToggleProps) => {
  return (
    <View className={`flex-row items-center gap-4 h-20 ${border && "border-b border-border-light dark: border-border-dark"}`}>
      {iconName &&  <ThemedIcon name={iconName} size={20} />}
      <ThemedText className='text-lg font-medium'>{text}</ThemedText>
      <View className='ml-auto'>
        <Switch
          value={value}
          onValueChange={onValueChange}
        />
      </View>
    </View>
  )
}

export default ListToggle;