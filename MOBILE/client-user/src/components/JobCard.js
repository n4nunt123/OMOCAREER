import { Text, View, Image } from 'react-native';
import styles from '../style';

export default function JobCard(props) {
  return(
    <View style={styles.customCard}>
      <View style={styles.imageCardContainer}>
        <Image 
          source={{ uri: props.jobs.Company.companyLogo }}
          style={styles.imageCard}
        />
      </View>
      <View style={styles.contentCard}>
        <View style={styles.titleCard}>
          <Text style={styles.titleTextCard}>{props.jobs.Company.name}</Text>
        </View>
        <View style={styles.descriptionCard}>
          <Text>{props.jobs.description}</Text>
        </View>
        <Text>Type: {props.jobs.jobType}</Text>
      </View>
    </View>
  )
}