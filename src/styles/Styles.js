import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bigContainer:{
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbfcff',
  },
  boton : {
    margin: 10,
    width: '100%',
    height: '8%'
  },
  bienvenido:{
     alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', marginTop: 5
  },
  rectangle:{
    backgroundColor: '#19727850',
    padding: '10%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  images:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxes:{
      flex: 1,
      flexDirection:'row',
      justifyContent: 'center'
    },
  logoContainer : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo : {
    width: '40%',
    height: '40%',
  },
  backgroundImage:{
    flex: 1,
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  spinner:{
      marginTop: 15
  }
});
