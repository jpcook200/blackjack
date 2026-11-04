import { ArrowRight } from 'lucide-react-native';
import { TouchableOpacity, View, Text, useColorScheme } from 'react-native';

interface MainButtonProps {
  onPress: () => void;
  next?: boolean;
  text: string;
  className?: string;
  accessibilityHint?: string;
  accessibilityLabel?: string;
  variant?: "green" | "mono"
}

const MainButton = ({ onPress, next, text, className = '', accessibilityHint, accessibilityLabel, variant = "green" }: MainButtonProps) => {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${variant === "mono" ? "bg-white dark:bg-black border border-border-light dark:border-border-dark" : "bg-primary"} h-14 w-full flex-row justify-center items-center text-center rounded-lg px-6 ${className}`}
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      style={{ boxShadow: `${variant === "mono" ? "" : "0 4px 0 rgb(29, 150, 83)"}` }}
    >
      <Text className={`${variant === "mono" && "dark:text-text-dark"} text-text-light font-bold`}>{ text }</Text>
      {next && (
        <View className="absolute right-6">
          <ArrowRight size={20} color={ `${variant === "mono" && colorScheme === "light" ? "black" : "white"}` } />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;