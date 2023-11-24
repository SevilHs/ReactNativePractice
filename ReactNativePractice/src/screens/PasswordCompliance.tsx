import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function PasswordCompliance() {
  const [password, setPassword] = useState<string>('');
  return (
    <View>
      <Text style={styles.title}>Password Compliance</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password..."
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 6 ? (
        <Text>Password must be at least 6 characters</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    marginVertical: 15,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});
