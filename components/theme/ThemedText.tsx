
import { Text, type TextProps } from 'react-native';

type TextVariant = 'title' | 'subtitle' | 'primary' | 'secondary';

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  classname?: string;
  variant?: TextVariant;
}

const ThemedText = ({ children, className, variant = "primary", ...props }: ThemedTextProps) => {
  const variants: Record<TextVariant, string> = {
    title: 'text-3xl font-bold',
    subtitle: 'text-xl font-semibold',
    primary: 'text-base font-normal',
    secondary: 'text-sm opacity-60',
  };

  return (
    <Text className={`text-text-light dark:text-text-dark ${variants[variant]} ${className}`} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
