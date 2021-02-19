import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {TakeHolidayContext} from './context';

const {height, width} = Dimensions.get('window');

export function AddDetails({navigation, route}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const {details, item} = route.params;
  const [formState, setFormState] = React.useState({
    place: '',
    from: '',
    to: '',
    by: '',
    information: '',
    image: '',
  });
  React.useEffect(() => {
    if (item) {
      setFormState(item);
    }
  }, []);

  const handleSubmit = () => {
    if (item) {
      const index = state[details].findIndex((e) => e.place === item.place);
      [...state[details].splice(index, 1, formState)];
      setState(state);
    } else {
      setState({...state, [details]: [...state[details], {...formState}]});
    }
    navigation.goBack();
  };
  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setFormState({...formState, image: image.path});
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView>
      <ImageBackground
        style={{width, height}}
        source={require('../assets/ftbkd.jpg')}>
        <KeyboardAwareScrollView style={{width, height}}>
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
              {item ? (
                <Text
                  style={{
                    color: '#fff',
                    fontSize: height * 0.035,
                    fontWeight: 'bold',
                  }}>
                  Update Details
                </Text>
              ) : (
                <Text
                  style={{
                    color: '#fff',
                    fontSize: height * 0.035,
                    fontWeight: 'bold',
                  }}>
                  Add Details
                </Text>
              )}
            </View>
            <View style={{padding: 20}}>
              <Text></Text>
            </View>
          </View>

          <View
            style={{
              marginTop: height * 0.01,
              height: height * 0.1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#b8e986',
              padding: height * 0.02,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                height: height * 0.09,
                width: height * 0.1,
                borderWidth: 5,
                justifyContent: 'center',
              }}>
              {formState.image ? (
                <Image
                  source={{uri: formState.image}}
                  resizeMode="stretch"
                  style={{height: height * 0.08, width: height * 0.09}}
                />
              ) : (
                <Icon
                  type="ionicon"
                  name="ios-image-outline"
                  size={height * 0.07}
                />
              )}
            </TouchableOpacity>
            <View>
              <Icon type="ionicon" name="arrow-back" />
            </View>
            <View>
              <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
                Add Image
              </Text>
            </View>
          </View>

          <View
            style={{
              // backgroundColor: '#f5fa',
              height: height * 0.9,
              width: width * 0.94,
              alignSelf: 'center',
              marginTop: height * 0.01,
            }}>
            <View
              style={{
                marginTop: height * 0.01,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.1,
                // backgroundColor: 'light red',
                borderRadius: 10,
                borderColor: 'white',
                borderWidth: 3
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#006b76',
                  height: height * 0.08,
                  borderRadius: 20,
                  width: width * 0.2,
                  marginRight: 5,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 18
                  }}>
                  Exercise
                </Text>
              </View>
              <View>
                <TextInput
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      place: text,
                    })
                  }
                  value={formState.place}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 5,
                    backgroundColor: '#fff',
                    borderWidth: 3,
                    width: width * 0.7,
                    height: height * 0.07,
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: height * 0.01,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.1,
                // backgroundColor: 'light red',
                borderRadius: 10,
                borderColor: 'white',
                borderWidth: 3
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#006b76',
                  height: height * 0.08,
                  borderRadius: 20,
                  width: width * 0.2,
                  marginRight: 5,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20
                  }}>
                  Drinks
                </Text>
              </View>
              <View>
                <TextInput
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      from: text,
                    })
                  }
                  value={formState.from}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 5,
                    backgroundColor: '#fff',
                    borderWidth: 3,
                    width: width * 0.7,
                    height: height * 0.07,
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: height * 0.01,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.1,
                // backgroundColor: 'light red',
                borderRadius: 10,
                borderColor: 'white',
                borderWidth: 3
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#006b76',
                  height: height * 0.08,
                  borderRadius: 20,
                  width: width * 0.2,
                  marginRight: 5,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 18
                  }}>
                  Practice
                </Text>
              </View>
              <View>
                <TextInput
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      to: text,
                    })
                  }
                  value={formState.to}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 5,
                    backgroundColor: '#fff',
                    borderWidth: 3,
                    width: width * 0.7,
                    height: height * 0.07,
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: height * 0.01,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.1,
                // backgroundColor: 'light red',
                borderRadius: 10,
                borderColor: 'white',
                borderWidth: 3
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#006b76',
                  height: height * 0.08,
                  borderRadius: 20,
                  width: width * 0.2,
                  marginRight: 5,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize:22
                  }}>
                  Extra
                </Text>
              </View>
              <View>
                <TextInput
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      by: text,
                    })
                  }
                  value={formState.by}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 5,
                    backgroundColor: '#fff',
                    borderWidth: 3,
                    width: width * 0.7,
                    height: height * 0.07,
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: height * 0.01,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: height * 0.1,
                // backgroundColor: 'light red',
                borderRadius: 10,
                borderColor: 'white',
                borderWidth: 3
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#006b76',
                  height: height * 0.08,
                  borderRadius: 20,
                  width: width * 0.2,
                  marginRight: 5,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 22
                  }}>
                  Diet
                </Text>
              </View>
              <View>
                <TextInput
                  onChangeText={(text) =>
                    setFormState({
                      ...formState,
                      information: text, 
                    })
                  }
                  value={formState.information}
                  style={{
                    alignSelf: 'flex-end',
                    marginRight: 5,
                    backgroundColor: '#fff',
                    borderWidth: 3,
                    width: width * 0.7,
                    height: height * 0.07,
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                justifyContent: 'center',
                height: height * 0.11,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={{
                  backgroundColor: '#006b76',
                  height: height * 0.07,
                  width: width * 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: height * 0.03,
                  borderColor: 'white',
                  borderWidth: 4,
                }}>
                <Text
                  style={{
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
