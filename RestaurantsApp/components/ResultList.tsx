import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import RestaurantCard from './RestaurantCard';

interface ResultListProps {
  title: string;
  result: restaurant[];
}

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SearchScreen'
>;

export default function ResultList({title, result}: ResultListProps) {
  const navigation: HomeScreenNavigationProp = useNavigation();
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result}
        contentContainerStyle={{gap: 15}}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailsScreen', {id: item.id})}>
            <RestaurantCard restaurant={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    color: 'black',
    marginVertical: 7,
  },
});
