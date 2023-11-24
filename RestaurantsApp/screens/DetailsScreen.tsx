import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import yelp from '../api/yelp';

type DetailsScreenParams = {
  route?: RouteProp<{DetailsScreen: {id: string}}, 'DetailsScreen'>;
};

export default function DetailsScreen({route}: DetailsScreenParams) {
  const [restaurant, setRestaurant] = useState<restaurant>();
  const id = route?.params.id;

  const getRestaunrantDetails = async (id: string) => {
    const response = await yelp.get(`${id}`);
    setRestaurant(response.data);
  };
  useEffect(() => {
    id && getRestaunrantDetails(id);
  }, []);
  if (!restaurant) {
    return null;
  }

  const {name, is_closed, phone, location, image_url} = restaurant;

  return (
    <View style={styles.detailsContainer}>
      <Image source={{uri:image_url}} style={styles.image} />
      <Text style={styles.name}>
        {name}{' '}
        <Text style={styles.detailsTitle}>
          {is_closed ? '(Close)' : '(Open)'}
        </Text>
      </Text>
      <Text>
        <Text style={styles.detailsTitle}>Phone:</Text> {phone}
      </Text>
      <Text>
        <Text style={styles.detailsTitle}>Address:</Text> {location.city},{' '}
        {location.address1}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    gap: 15,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 7,
  },
  name: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  detailsTitle: {
    fontSize: 18,
    color: 'black',
  },
});
