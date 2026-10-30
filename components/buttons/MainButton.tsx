import { ArrowRight } from 'lucide-react-native';
import { TouchableOpacity, View, Text } from 'react-native';

interface MainButtonProps {
    onPress: () => void;
    next?: boolean;
    text: string;
    className?: string;
    accessibilityHint?: string;
    accessibilityLabel?: string;
}

const MainButton = ({ onPress, next, text, className = '', accessibilityHint, accessibilityLabel  }: MainButtonProps) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            className={`bg-primary h-16 w-full flex-row justify-center items-center text-center rounded-lg px-6 ${className}`}
            accessibilityHint={accessibilityHint}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="button"
            style={{ boxShadow: '0 4px 0 rgb(29, 150, 83)' }}
        >
        <Text className='text-text-dark font-bold'>Next</Text>
        {next && (
          <View className="absolute right-6">
            <ArrowRight size={20} color="white" />
          </View>
        )}
        </TouchableOpacity>
    );
};

export default MainButton;