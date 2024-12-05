import { Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@apollo/client'
import { GET_JOBS } from '../query/query'
import styles from '../style';
import img from '../../assets/img-assets.png'
import JobCard from '../components/JobCard';

export default function JobScreen({ navigation }) {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) {
    return <ActivityIndicator size='large' color='#d2706d' style={styles.loader} />
  }

  const toDetailScreen = (id) => {
    return navigation.navigate('Detail', { id })
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => toDetailScreen(item.id)}>
        <JobCard jobs={item}/>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#174666', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={img} style={styles.imageDisplay}>
        </Image>
      </View>
      <View style={{ flex: 3, alignItems: 'center', backgroundColor: '#174666' }}>
        <Text style={styles.homeText}>Discover your opportunity</Text>
        <FlatList data={data.jobs} renderItem={renderItem} keyExtractor={ item => item.id }/>
      </View>
    </SafeAreaView>
  )
}