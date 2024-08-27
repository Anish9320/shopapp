import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://192.168.1.6:4547/cats');
      const cats = await res.json();
      setData(cats);
      // console.log(cats)
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.CAT_ID.toString()}
      renderItem={({item}) => (
        <View>
          <Text>Name: {item.NAME}</Text>
          <Text>Breed: {item.BREED}</Text>
          <Text>Age: {item.AGE}</Text>
        </View>
      )}
    />
  );
}

export default App;