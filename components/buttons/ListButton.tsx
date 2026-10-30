import {TouchableOpacity } from 'react-native'
import ThemedIcon from '../theme/ThemedIcon'
import ThemedText from '../theme/ThemedText'

interface ListButtonProps { 
  text: string;
  iconName?: string;
  stateLabel?: string;
  border?: boolean
}

const ListButton = ({ text, iconName, stateLabel, border }: ListButtonProps) => {
  return (
    <TouchableOpacity className={`flex-row items-center gap-4 h-20 ${border && "border-b border-border-light dark: border-border-dark"}`}>
      {iconName && <ThemedIcon name={iconName} size={20} />}
      <ThemedText className='text-lg font-medium'>{ text }</ThemedText>
      {stateLabel && <ThemedText className='ml-auto'>Free</ThemedText>}
      <ThemedIcon className='ml-auto' name='ChevronRight' size={20} />
    </TouchableOpacity>
  )
}

export default ListButton;