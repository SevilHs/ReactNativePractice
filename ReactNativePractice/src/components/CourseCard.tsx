import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

interface CourseProps {
  course: CourseItem;
}

export default function CourseCard({course}: CourseProps) {
  let imageSource;
  switch (course.courseName) {
    case 'JavaScript':
      imageSource = require('../assets/Javascript.png');
      break;
    case 'React':
      imageSource = require('../assets/React.png');
      break;
    default:
      imageSource = require('../assets/Typescript.png');
  }
  return (
    <ScrollView>
      <Image style={styles.img} source={imageSource} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{course.courseName}</Text>
        <Text>{course.courseDescription}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  img: {
    width: '100%',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
});
