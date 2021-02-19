import { Assets } from '@react-navigation/stack';
import React from 'react';
import { CheckBox } from 'react-native';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

const {height, width} = Dimensions.get('window');
export function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <ImageBackground
      source={require('../assets/ftbkd.jpg')}
      style={{height, width, flex: 1}}>
      <View
        style={{
          // backgroundColor: 'red',
          width: width,
          height: height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            // backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundColor: '#d9e3f0',
            borderWidth: 5,
            borderColor: '#f4d34b',
            height: height * 0.1,
            width: width * 0.9,
            borderRadius: height * 0.02,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#f4d34b',
            shadowOffset: {width: 3, height: 5},
            shadowOpacity: 5
          }}>
          <Text
            style={{
              fontSize: height * 0.06,
              padding: 5,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Sportie Fit
          </Text>
        </TouchableOpacity>
      </View>
        
       <View style={{width: width * 0.5, height: height * 0.2, justifyContent: 'center', alignItems: 'center', marginTop: -45, marginLeft: 90}}>
 
           <Image source={require('../assets/fiticns.png')}
             style={{ justifyContent: 'center', shadowOpacity: 10, shadowOffset: {width: 5, height: 10}, shadowColor: 'white'   }}>
             </Image>


       </View>

      <View
        style={{
          width,
          height: height * 0.5,
          //  backgroundColor: 'pink',
          paddingTop: height * 0.05,
          marginTop: 5,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <View style={{height: height * 0.13, alignItems:'center', marginTop: -25, padding: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriesScreen')}
            activeOpacity={0.7}
            style={{ 
              width: width * 0.83,
              height: height * 0.11,
              backgroundColor: '#beccd8',
              marginLeft: -60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.02,
              borderWidth: 5,
              borderColor: '#f74682'
              
            }}>
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold'}}>
              Add Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: height * 0.15, alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewDetails')}
            activeOpacity={0.7}
            style={{
              backgroundColor: '#beccd8',
              width: width * 0.85,
              height: height * 0.11,
              marginRight: -50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.02,
              borderWidth: 5,
              borderColor: '#f74682'
            }}>
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold'}}>
              View Details
            </Text>

          </TouchableOpacity>
        </View>
        <View style={{marginTop: -10, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{
              width: width * 0.83,
              height: height * 0.11,
              backgroundColor: '#beccd8',
              marginLeft: -60,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: height * 0.02,
              borderWidth: 5,
              borderColor: '#f74682'
            }}>
            
            <Text style={{fontSize: height * 0.05, fontWeight: 'bold' }}>About Us</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>


    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

