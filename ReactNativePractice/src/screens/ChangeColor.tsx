import {FlatList, StyleSheet, View} from 'react-native';
import React, {useReducer} from 'react';
import ChangeColorContent from '../components/ChangeColorContent';

const reducer = (state: ColorState, action: ColorAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state[action.color] + 10 <= 255 && 0 <= state[action.color] + 10
        ? {...state, [action.color]: state[action.color] + 10}
        : state;
    case 'DECREMENT':
      return state[action.color] - 10 <= 255 && 0 <= state[action.color] - 10
        ? {...state, [action.color]: state[action.color] - 10}
        : state;
    default:
      return state;
  }
};

export default function ChangeColor() {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const onIncreaseColor = (color: 'red' | 'green' | 'blue') => {
    dispatch({type: 'INCREMENT', color});
  };
  const onDecreaseColor = (color: 'red' | 'green' | 'blue') => {
    dispatch({type: 'DECREMENT', color});
  };
  return (
    <View>
      <FlatList
        data={['red', 'green', 'blue']}
        renderItem={({item}) => (
          <ChangeColorContent
            color={item}
            onIncreaseColor={() =>
              onIncreaseColor(item as 'red' | 'green' | 'blue')
            }
            onDecreaseColor={() =>
              onDecreaseColor(item as 'red' | 'green' | 'blue')
            }
          />
        )}
      />
      <View style={styles.content}>
        <View
          style={[
            styles.box,
            {
              backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
            },
          ]}
        />
      </View>
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
