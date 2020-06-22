import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
} from 'react-native';
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {useDispatch} from 'react-redux';

const Welcome = () => {
  const [btn_name, setBtnName] = useState('Next');
  const [index, setIndex] = useState(0);
  const [name, setName] = useState('');
  let swiper = undefined;

  const dispatch = useDispatch();

  const onIndexChanged = (i) => {
    if (i === 2) {
      setBtnName('Mulai');
    } else {
      setBtnName('Next');
    }
    setIndex(i);
  };

  const onButtonPress = () => {
    if (index === 2) {
      if (name.trim() !== '') {
        dispatch({type: 'ADD_NAME', name: name});
      } else {
        Alert.alert('Hallo!', 'jangan lupa masukan namamu ya!');
      }
    } else {
      swiper.scrollBy(1);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#00cdac" barStyle="light-content" />
      <LinearGradient colors={['#00cdac', '#02aab0']} style={styles.container}>
        <Swiper
          ref={(ref) => (swiper = ref)}
          activeDotColor={'white'}
          onIndexChanged={(i) => onIndexChanged(i)}
          loop={false}>
          <View style={styles.slide}>
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.descText}>
              Cek paket anda yang dikirim dengan
            </Text>
          </View>
          <View style={styles.slide}>
            <TextInput
              value={name}
              onChangeText={(value) => setName(value)}
              style={styles.inputname}
              placeholder={'masukan nama anda'}
            />
          </View>
        </Swiper>
        <TouchableOpacity onPress={onButtonPress} style={styles.mulaiButton}>
          <Text style={styles.textButton}>{btn_name}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default Welcome;
