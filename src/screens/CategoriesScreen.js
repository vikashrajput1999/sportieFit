import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context'
const {height, width} = Dimensions.get('window');

export function CategoriesScreen({navigation}) {
  const {state,setState} = React.useContext(TakeHolidayContext)
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {details: item})}
      style={{
        width: width * 0.9,
        alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.15,
        borderRadius: 30,
        backgroundColor: '#006b76',
        justifyContent: 'space-between',
        borderWidth: 5,
        marginTop: height * 0.015,
        shadowColor: 'white',
        shadowOffset: {width: 1, height: 10},
        shadowOpacity: 20,
        shadowRadius: 5
      }}>
      
          <View
        style={{
          width: width * 0.5,
          height: height * 0.11,
          borderRadius: 25,
          marginLeft: 10,
          borderWidth :4,
          borderColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#83c684',
        }}>
        <Text style={{fontSize: height * 0.03, fontWeight: 'bold',textDecorationLine: 'underline',color : 'black'}}>
          {item}
        </Text>
      </View>
      <Image
          source={require('../assets/fiticns.png')}
          style={{height: height * 0.13, width: width * 0.28}}
        />
        
      
      
    </TouchableOpacity>
  );
  return (
    
    <SafeAreaView style={{width, height}}>
      <ImageBackground style={{width, height}} blurRadius={2} source={require('../assets/ftbkd.jpg')}>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: '#006b76',
          height: height * 0.065,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{justifyContent: 'center', padding: 5}} onPress={() => navigation.goBack()}>
          <Icon
            name="ios-arrow-back-outline"
            type="ionicon"
            size={height * 0.05}
            color="#fff"
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontSize: height * 0.03, fontWeight:'bold'}}>
            Categories
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text></Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#f5fa',
          height: height * 0.85,
        }}>
        {/* <Text style={{fontSize: height * 0.1}}>slfj</Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[
            'Games','Athletics','Gymnastics','Dance','Swimming','Zumba','Skipping','Jumping','Exercises','others']}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
      </ImageBackground>
    </SafeAreaView>
    
  );
}
