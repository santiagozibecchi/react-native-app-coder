import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { PrincipalLayout } from '../../components/layout/PrincipalLayout'
import { Title } from '../../components/ui/Title'
import { useGetAllPlacesQuery } from '../../services/placeService'
import { useEffect, useState } from 'react'


const groupedByProperty = (array, property) => {
  const result = array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
  return result;
}

export const HomeScreen = () => {
  const { data: allPlaces, isSuccess } = useGetAllPlacesQuery();

  const [categories, setCategories] = useState([]);
  const [placeByCategory, setPlaceByCategory] = useState({})

  const showAvaiblePlaces = () => {
    if (isSuccess) {
      const placeByCategory = groupedByProperty(allPlaces, "category");
      setPlaceByCategory(placeByCategory);
      const categories = Object.keys(placeByCategory)
      setCategories(categories);
    }
  }

  useEffect(() => {
    showAvaiblePlaces()
  }, [isSuccess])

  return (
    <ScrollView>
      <PrincipalLayout style={{marginBottom: 40}}>
        <Title text='Encuentra los lugares más cercanos a tu dirección' center />

        {
          categories.map((category) => <Text key={category}>{placeByCategory[category].map((place) => (`${place.title}\n` ))}</Text>)
        }

      </PrincipalLayout>
    </ScrollView>
  )
}
