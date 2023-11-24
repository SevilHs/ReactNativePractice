import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import UseResults from '../hooks/UseResults';
import ResultList from '../components/ResultList';

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = UseResults();
  const [term, setTerm] = useState<string>('');

  const filterResultByPrice = (price: string) => {
    return results.filter((result: restaurant) => result.price === price);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : results.length == 0 ? (
        <></>
      ) : (
        <>
          <ResultList
            title="Budget-friendly restaurant(€)"
            result={filterResultByPrice('€')}
          />
          <ResultList
            title="Moderate-priced restaurant(€€)"
            result={filterResultByPrice('€€')}
          />
          <ResultList
            title="High-end restaurant(€€€)"
            result={filterResultByPrice('€€€')}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorText: {
    marginTop: 15,
  },
});
