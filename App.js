import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'

if (__DEV__) {
  import('./src/reactotron-config').then(() =>
    console.log('Reactotron Configured'),
  );
}

const App = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()

      setData(data)
    })();
  }, [])


  if (!data) return <View><Text>Loading...</Text></View>
  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => <Text style={{height: 200}}>{item.title}</Text>}></FlatList>
    </View>
  )
}

export default App