import {View, Button,StyleSheet} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
        <Button
          title="Courses"
          onPress={() => navigation.navigate('Courses')}
        />
        <Button
          title="Counter"
          onPress={() => navigation.navigate('Counter')}
        />
        <Button
          title="Random Box"
          onPress={() => navigation.navigate('Boxes')}
        />
        <Button
          title="Change Color"
          onPress={() => navigation.navigate('ChangeColor')}
        />
        <Button
          title="Password Compliance"
          onPress={() => navigation.navigate('PasswordCompliance')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer:{
    rowGap:7,
  }
});

export default Home;
