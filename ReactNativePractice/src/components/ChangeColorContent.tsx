import {StyleSheet, Button, Text, View} from 'react-native';
import React from 'react';

interface Props {
  color: string;
  onIncreaseColor: () => void;
  onDecreaseColor: () => void;
}

const ChangeColorContent: React.FC<Props> = ({
  color,
  onIncreaseColor,
  onDecreaseColor,
}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncreaseColor} />
      <Button title={`Decrease ${color}`} onPress={onDecreaseColor} />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    rowGap: 7,
    margin: 7,
  },
  text: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: 'black',
    textAlign: 'center',
  },
});
export default ChangeColorContent;
