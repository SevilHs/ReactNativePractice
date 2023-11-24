import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

export default function RestaurantCard({restaurant}: any) {
  return (
    <ImageBackground style={styles.image} source={{uri: restaurant?.image_url}}>
      <View style={styles.content}>
        <Text style={[styles.text, styles.name]}>{restaurant.name}</Text>
        <Text style={[styles.text, styles.review]}>
          {restaurant.rating}⭐, {restaurant.review_count} Review
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(0, 0, 0, .4)',
    flex: 1,
  },
  image: {
    height: 150,
    width: 250,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    left: 15,
  },
  name: {
    top: 10,
    fontFamily: 'cursive',
    fontSize: 24,
  },
  review: {
    bottom: -80,
    fontWeight: '700',
    fontSize: 18,
  },
});
