import { Pressable, Text } from 'react-native'
import { styles, colors } from '../../config/theme/app-theme'

interface Props {
    label: string;
    color?: string;
    size?: number;
    blackText?: boolean;
    onPress: () => void;
}


export const CalculatorButton = ({
    label,
    color = colors.darkGray,
    size = styles.button.width,
    blackText = false,
    onPress

}: Props) => {
  return (
    <Pressable 
        onPress={ () => onPress()}
        style={ ({pressed}) => ({
        ...styles.button,
        width: size,
        backgroundColor: color,
        opacity: (pressed) ? 0.8 : 1,
    })}>
        <Text style={{
            ...styles.buttonText,
            color: (blackText) ? 'black' : 'white',
        }}>{label}</Text>
    </Pressable>
  )
}
