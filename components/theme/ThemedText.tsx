
import { Text, type TextProps } from 'react-native';

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  classname?: string;
}

const ThemedText = ({ children, className, ...props }: ThemedTextProps) => {
  return (
    <Text className={`text-text-light dark:text-text-dark ${className}`} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
