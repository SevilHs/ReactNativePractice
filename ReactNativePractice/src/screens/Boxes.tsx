import {StyleSheet, Button, View, FlatList} from 'react-native';
import React, {useState} from 'react';

export default function Boxes() {
  const [colors, setColors] = useState<string[]>([]);
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View>
      <Button
        title="Add Box"
        onPress={() => setColors([...colors, randomColor()])}
      />
      <FlatList
        data={colors}
        contentContainerStyle={styles.content}
        renderItem={({item}) => (
          <View style={[styles.box, {backgroundColor: item}]} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
});
