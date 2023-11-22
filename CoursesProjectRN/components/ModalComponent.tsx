import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

interface ModalProps {
  visible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  addCourse: (courseTitle: string) => void;
  closeModal: () => void;
}

export default function ModalComponent({
  visible,
  setModalVisible,
  addCourse,
  closeModal,
}: ModalProps) {
  const [inpValue, setInpValue] = useState<string>('');

  const handleSubmit = (title: string) => {
    title == 'add' ? addCourse(inpValue) : closeModal();
    setInpValue('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!visible);
      }}>
      <View style={styles.centeredView}>
        <Image style={styles.image} source={require('../assets/logo.png')} />
        <TextInput
          placeholder="Add Course..."
          style={styles.input}
          autoCapitalize="none"
          value={inpValue}
          onChangeText={setInpValue}
        />
        <View style={styles.buttonsContainer}>
          <Pressable
            style={[styles.button, styles.buttonAdd]}
            onPress={() => handleSubmit('add')}>
            <Text style={styles.textStyle}>Add</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => handleSubmit('cancel')}>
            <Text style={styles.textStyle}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    gap: 30,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonAdd: {
    backgroundColor: '#F194FF',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  input: {
    borderColor: '#bababa',
    borderWidth: 1,
    width: '100%',
    borderRadius: 7,
    paddingHorizontal: 15,
  },
});
