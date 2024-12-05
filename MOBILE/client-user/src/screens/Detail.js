import { Text, View, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client'
import { GET_DETAIL_JOB } from '../query/query';

export default function HomeScreen({ route }) {
  const jobId = Number(route.params.id)
  const { loading, error, data } = useQuery(GET_DETAIL_JOB, { variables: { jobId } })

  console.log(loading, error, data, jobId)

  if (loading) {
    return <ActivityIndicator size='large' color='#d2706d' style={styles.loader} />
  }

  
  if (error) {
    return <Text>Someting Error</Text>
  }

  return (
    <View style={styles.containerDetail}>
      <View style={styles.cardDetail}>
        <ScrollView>
          <Image source={{ uri: data.job.Company.companyLogo }} style={styles.imgDetail}/>
          <View style={styles.contentDetail}>
            <Text style={styles.cardTitle}>{data.job.Company.name}</Text>
            <Text style={styles.smallDetail}>{data.job.Company.location}</Text>
            <Text style={styles.descriptionDetail}>{data.job.Company.description}</Text>
            <Text style={styles.smallDetail}>Email: {data.job.Company.email}</Text>
            <Text style={styles.titleDetail}>{data.job.title}</Text>
            <Text style={styles.descriptionDetail}>Description: {data.job.description}</Text>
            <View style={styles.requirement}>
              <Text style={styles.descriptionDetail}>Requirement:</Text>
              <View style={styles.skill}>
                {data.job.Skills.map((el, i) => {
                  return <Text style={styles.descriptionDetail} key={i}>{i+1}. {el.name} - {el.level}</Text>
                })}
              </View>
            </View>
            <Text style={styles.emailDetail}>Written By: {data.job.userMongo.email}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerDetail: {
    flex: 1,
    backgroundColor: '#174666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#d2706d',
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardDetail: {
    marginVertical: 20,
    borderRadius: 8,
    width: '100%',
    height: 'auto',
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: '#FFF'
  },
  imgDetail: {
    width: '100%',
    height:200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  contentDetail: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  titleDetail:{
    fontSize: 19,
    fontWeight: 'bold',
    color: '#d2706d',
  },
  smallDetail: {
    fontSize: 12,
    marginBottom: 15
  },
  descriptionDetail: {
    fontSize: 14,
    fontWeight: '350',
    lineHeight: 21,
    textAlign: 'justify'
  },
  emailDetail: {
    marginTop: 15,
    marginBottom: 3
  },
  requirement: {
    flexDirection: 'row',
    marginTop: 6.2
  },
  skill: {
    marginHorizontal: 7.2,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})