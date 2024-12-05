import * as React from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@apollo/client'
import { GET_COMPANIES } from '../query/query'
import DiscoverCard from '../components/DiscoverCard';
import styles from '../style';


export default function DiscoverScreen() {
  const { loading, error, data } = useQuery(GET_COMPANIES); 

  if (loading) {
    return <ActivityIndicator size='large' color='#d2706d' style={styles.loader} />
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.containerCompany}>
          <Text style={styles.companyTitle}>Discover our partners</Text>
          {data.companies.map(el => {
            return <DiscoverCard company={el} key={el.id}/>
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}