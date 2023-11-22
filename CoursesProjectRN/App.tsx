/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import ModalComponent from './components/ModalComponent';

type Course = {
  id: string;
  courseName: string;
};

function App(): JSX.Element {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [courses, setCourses] = useState<Course[]>([]);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addCourse = (courseTitle: string) => {
    setCourses((curr: Course[]) => [
      ...curr,
      {id: Math.random().toString(), courseName: courseTitle},
    ]);
    closeModal();
  };

  return (
    <View style={styles.sectionContainer}>
      <Button title="Add Course" onPress={handleShowModal} />
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <View style={styles.courseItem}>
            <Text style={styles.text}>{item.courseName}</Text>
          </View>
        )}
      />
      <ModalComponent
        visible={modalVisible}
        setModalVisible={setModalVisible}
        addCourse={addCourse}
        closeModal={closeModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  courseItem: {
    marginTop: 15,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 7,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default App;
