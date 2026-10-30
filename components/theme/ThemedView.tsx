// import required modules
import { View, ViewProps } from "react-native"

// types for the props of themed view - extends from the react native view props
interface ThemedViewProps extends ViewProps { 
  children?: React.ReactNode;
  className?: string;
}

const ThemedView = ({ children, className, ...props }: ThemedViewProps) => {
  // return TSX with children prop to allow view to be populated with other components
  return (
    <View className={`bg-item-light dark:bg-item-dark shadow-sm shadow-black/10 dark:shadow-white/10 px-4 rounded-2xl border border-border-light dark:border-border-dark ${className}`} {...props}>
      { children }
    </View>
  );
}

export default ThemedView;