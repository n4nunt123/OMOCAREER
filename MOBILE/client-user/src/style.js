import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  homePage: {
    flex: 1,
  },
  imageHome: {
    flex: 1,
    alignItems: 'center',
    padding: 5
  },
  titleHome: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 42,
    marginTop: 162
  },
  contentHome: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 5
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  customCard: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    padding: 3,
    borderRadius: 12,
    width: 345
  },
  imageCardContainer: {
    paddingRight: 15,
    marginRight: 7.6,
    marginLeft: 7.6,
    width: 100
  },
  imageCard: {
    width: 100,
    height:100,
    resizeMode: 'contain'
  },
  contentCard: {
    padding: 6,
    marginRight: 5,
    marginLeft: 5,
    width:210
  },
  titleCard: {
    marginTop: 10,
    marginBottom: 4,
    paddingBottom: 2,
    borderBottomColor: '#d2706d',
    borderBottomWidth: 0.2
  },
  titleTextCard: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#d2706d',
  },
  descriptionCard: {
    marginBottom: 3,
  },
  imageDisplay: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'contain',
    width: '100%',
    backgroundColor: '#174666'
  },
  homeText: {
    marginBottom: 10,
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomColor: '#d2706d',
    borderBottomWidth: 0.6
  },
  companyTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    borderBottomColor: '#d2706d',
    borderBottomWidth: 0.6
  },
  containerCompany: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#174666'
  },
  cardCompany: {
    marginVertical: 20,
    borderRadius: 8,
    width: '80%',
    height: 'auto',
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    backgroundColor: '#FFF'
  },
  imgCompany: {
    width: '100%',
    height:200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  contentCompany: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  titleCompany:{
    fontSize: 19,
    fontWeight: 'bold',
    color: '#d2706d',
  },
  locationCompany: {
    fontSize: 12,
    marginBottom: 15
  },
  descriptionCompany: {
    fontSize: 14,
    fontWeight: '350',
    lineHeight: 21,
    textAlign: 'justify'
  },
  emailCompany: {
    marginTop: 15,
    marginBottom: 3
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles
