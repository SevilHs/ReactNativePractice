import {FlatList} from 'react-native';
import React from 'react';
import coursesData from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  return (
    <FlatList
      data={coursesData}
      renderItem={({item}) => <CourseCard course={item} />}
      keyExtractor={item => item.id}
    />
  );
}
