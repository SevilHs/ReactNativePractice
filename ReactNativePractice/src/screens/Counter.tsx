import {StyleSheet, Text, View, Button, Pressable} from 'react-native';
import React, {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <View>
      <View style={styles.counterContent}>
        <Button title="-" onPress={() => setCount(count - 1)} />
        <Text style={styles.text}>{count}</Text>
        <Button title="+" onPress={() => setCount(count + 1)} />
      </View>
      <Pressable
        style={({pressed}) => [
          styles.resetBtnCommon,
          pressed ? styles.pressedResetBtn : styles.defaultResetBtn,
        ]}
        onPress={() => setCount(0)}>
        <Text style={styles.text}>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  counterContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  defaultResetBtn: {
    backgroundColor: 'gray',
  },
  pressedResetBtn: {
    backgroundColor: 'lightgrey',
  },
  resetBtnCommon: {
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
});
