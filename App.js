import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { fetchPesantrenData } from './src/ApiManager';
import CustomCard from './components/Card';

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
    <View>
      {pesantrenData.map((pesantren) => (
        <CustomCard key={pesantren.id} pesantren={pesantren} />
      ))}
    </View>
  );
};

export default App;

