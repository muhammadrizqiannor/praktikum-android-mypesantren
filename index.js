import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './src/components/Card';
import { fetchPesantrenData } from './src/ApiManager';

const App = () => {
  const [pesantrenData, setPesantrenData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPesantrenData();
      setPesantrenData(data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {pesantrenData.map((pesantren) => (
        <Card key={pesantren.id} pesantren={pesantren} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default App;
