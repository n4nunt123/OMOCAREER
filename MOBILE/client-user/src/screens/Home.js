import * as React from 'react';
import { Text, Button, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import homeImg from '../../assets/home-image.jpg'
import styles from '../style';


export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.homePage}>
      <ImageBackground source={homeImg} style={styles.imageHome}>
        <Text style={styles.titleHome}>OMOCAREER</Text>
        <Text style={styles.contentHome}>Welcome to your opportunity{'\n'}make your own miracle with us!</Text>
        <Button 
          title='Discover'
          color='#d2706d'
          onPress={() => navigation.navigate('Job')}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}