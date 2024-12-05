import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../style';

export default function DiscoverCard(props) {
  return (
    <View style={styles.cardCompany}>
      <Image source={{ uri: props.company.companyLogo }} style={styles.imgCompany}/>
      <View style={styles.contentCompany}>
        <Text style={styles.titleCompany}>{props.company.name}</Text>
        <Text style={styles.locationCompany}>{props.company.location}</Text>
        <Text style={styles.descriptionCompany}>{props.company.description}</Text>
        <Text style={styles.emailCompany}>Email: {props.company.email}</Text>
      </View>
    </View>
  );
}