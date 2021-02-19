import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function ViewDetails({navigation}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const [dataItems, setDataItems] = React.useState([]);
  const AllData = Object.values(state);
  const allKeys = Object.keys(state);
  let mArray = [];
  React.useEffect(() => {
    allKeys.map((key) => {
      state[key].map((e) => {
        mArray.push({...e, type: key});
      });
    });
    setDataItems(mArray);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          // backgroundColor: 'black',
          flexDirection: 'row',
          width: width * 0.96,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
        
          style={{
            width: width * 0.8,
            height: height * 0.22,
            borderWidth: 5,
            borderColor: 'black',
            borderTopStartRadius: 40,
            borderBottomEndRadius: 40,
            elevation: 1,
            // borderRadius: 15,
            backgroundColor: '#028c9a',
            justifyContent: 'space-between',
            shadowColor: 'black',
            shadowOffset: {width: 4, height: 8},
            shadowOpacity: 20,
            shadowRadius: 5,

            marginTop: height * 0.02,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>

            <View
              style={{
                width: width * 0.52,
                height: height * 0.07,
                borderBottomWidth: 5,
               borderTopLeftRadius: 20,
               borderTopRightRadius: 20,
               borderBottomColor: 'red',
                justifyContent: 'center',
                backgroundColor: '#fff',
                marginLeft: 10,
                marginTop: 1,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {item.place}
              </Text>
            </View>

            <View>

              
              {item.image.length ? (
                <Image
                  source={{uri: item.image}}
                  style={{
                    // flexDirection: 'row',
                    marginTop: 7,
                    marginRight: 5,
                    height: height * 0.09,
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 40,
                    width: width * 0.2,
                  }}
                />
              ) : (
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  No Image
                </Text>
              )}
            </View>
          </View>

          <View
            style={{
              width: width * 0.7,
              height: height * 0.065,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              borderBottomWidth: 5,
              borderBottomColor: 'red',
              justifyContent: 'center',
              backgroundColor: '#fff',
              alignContent: 'center',
              marginLeft: 15,
              marginTop: 10,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                Drinks:
              </Text>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.from}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold'}}></Text>

            {/* <View style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 'auto',
                  alignItems: 'center',
                  padding: height * 0.01,
                  borderWidth: 2,
                  borderRadius: height * 0.2,
                  backgroundColor: '#ff9',
                }}>
                <Text style={{color: '#000', fontSize: height * 0.02}}>
                  {item.from}
                </Text>
              </View>
            </View> */}
          </View>
        </View>
      
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width, height}}
        blurRadius={0}
        source={require('../assets/ftbkd.jpg')}>
      <View style={{width, height}}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: '#006b76',
            height: height * 0.065,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() => navigation.goBack()}>
            <Icon
              name="ios-arrow-back-outline"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={{
                color: '#fff',
                fontSize: height * 0.03,
                fontWeight: 'bold',
              }}>
              View Details
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
            // backgroundColor: '#f5fafa',
            height: height * 0.9,
          }}>
          {dataItems.length ? (
            <FlatList
              data={dataItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <View
              style={{
                width: width * 0.8,
                height: height * 0.18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#006b76',
                 borderTopRightRadius: height * 0.03,
                 borderBottomLeftRadius: height * 0.03,
                // borderRadius: 20,
                borderColor: 'black',
                borderWidth: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                No Data Found , Please click on ' + ' to add data in category
                details page
              </Text>
            </View>
          )}
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
