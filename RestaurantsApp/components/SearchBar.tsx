import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

type SearchBarProps = {
  term: string;
  onTermChange: React.Dispatch<React.SetStateAction<string>>;
  onTermSubmit: () => void;
};

export default function SearchBar({
  term,
  onTermChange,
  onTermSubmit,
}: SearchBarProps) {
  return (
    <View style={styles.searchBar}>
      <Text style={styles.searchIcon}>🔎</Text>
      <TextInput
        style={styles.searchInp}
        placeholder="Search..."
        autoCapitalize="none"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 50,
  },
  searchIcon: {
    marginHorizontal: 17,
  },
  searchInp: {
    fontSize: 18,
    flex: 1,
  },
});
