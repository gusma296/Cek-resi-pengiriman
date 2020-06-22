import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import Modalcourier from './modalcourier';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
let inputResi = undefined;
let interval = null;

const apikey =
  '47a651bbbc5017933e2a7d8056e3b341d6b6163556e19feb6b87711feb790a02';

const Dashboard = (props) => {
  const {user, history} = useSelector((state) => state);
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [courier, setCourier] = useState({
    id: '',
    name: 'Pilih Jasa Pengiriman',
    image: null,
  });
  const [resi, setResi] = useState('');
  const [loadData, setLoadData] = useState(false);

  const onModalOpen = () => {
    setModalVisible(true);
  };

  const onModalClose = () => {
    setModalVisible(false);
  };

  const onPressModal = (item) => {
    setCourier({id: item.id, name: item.name, image: item.image});
    setModalVisible(false);
    interval = setInterval(() => {
      inputResi.focus();
    }, 200);
  };

  const cekResi = (resi, apikey, kurir, image, name) => {
    clearInterval(interval);
    setLoadData(true);
    if (kurir === '') {
      Alert.alert('Hallo!', 'jangan lupa pilih jasa pengiriman ya');
      setLoadData(false);
    } else if (resi.trim() === '') {
      Alert.alert('Hallo!', 'jangan lupa masukan resi ya');
      setLoadData(false);
    } else {
      fetch(
        `https://api.binderbyte.com/cekresi?awb=${resi}&api_key=${apikey}&courier=${kurir}`,
      )
        .then((resp) => resp.json())
        .then((res) => {
          if (res.result) {
            setLoadData(false);
            props.navigation.navigate('DetailResi', {
              data: res.data,
              courier_name: name,
              courier_image: image,
              resi: resi,
              id: kurir,
            });
            console.log(JSON.stringify(res, null, 2));
            setCourier({
              id: '',
              name: 'Pilih Jasa Pengiriman',
              image: null,
            });
            setResi('');
            dispatch({
              type: 'ADD_HISTORY',
              id: kurir,
              image: courier.image,
              name: courier.name,
              resi: resi,
            });
          } else {
            console.log(res);
            setCourier({
              id: '',
              name: 'Pilih Jasa Pengiriman',
              image: null,
            });
            setResi('');
            Alert.alert('Yaahh!', 'Nomor resi yang kamu masukan tidak valid');
            setLoadData(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoadData(false);
          Alert.alert('Internet!', 'Sepertinya internet anda bermasalah!');
        });
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#00cdac" barStyle="light-content" />
      <SafeAreaView edges={['top']} style={styles.safearea}>
        <View style={styles.container}>
          <LinearGradient
            colors={['#00cdac', '#02aab0']}
            style={styles.formarea}>
            <Text style={styles.text}>Hallo!</Text>
            <Text style={styles.textname}>{user.name}</Text>
            {/* <Button
              color="red"
              title="Log out"
              onPress={() => dispatch({type: 'LOG_OUT'})}
            /> */}
            <View
              style={[styles.inputForm, {marginTop: 32, paddingVertical: 0}]}>
              <TouchableOpacity onPress={onModalOpen} style={styles.row}>
                <View style={styles.rowCourier}>
                  {courier.image !== null && (
                    <Image
                      resizeMode="center"
                      style={styles.image}
                      source={
                        courier.image === null
                          ? {uri: 'google.com'}
                          : courier.image
                      }
                    />
                  )}
                  <Text
                    style={[
                      styles.picker,
                      {
                        color:
                          courier.image !== null
                            ? '#000000'
                            : 'rgba(000, 000, 000,0.2)',
                      },
                    ]}>
                    {courier.name}
                  </Text>
                </View>
                <Icon name="md-arrow-dropdown" size={25} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.inputForm}>
              <TextInput
                ref={(ref) => (inputResi = ref)}
                style={styles.input}
                value={resi.toUpperCase()}
                onChangeText={(v) => setResi(v.toUpperCase())}
                placeholder={'Masukan nomor resi anda'}
                placeholderTextColor="rgba(000, 000, 000,0.2)"
                returnKeyType="search"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                  cekResi(
                    resi,
                    apikey,
                    courier.id,
                    courier.image,
                    courier.name,
                  );
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  cekResi(resi, apikey, courier.id, courier.image, courier.name)
                }
                activeOpacity={0.6}>
                <Icon name="ios-search" size={25} color="black" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
          {history.length > 0 ? (
            <View style={styles.listcontent}>
              <View style={styles.titleHistory}>
                <Text style={styles.textHistory}>Pencarian sebelumnya</Text>
                <Text
                  onPress={() => dispatch({type: 'CLEAR_HISTORY'})}
                  style={styles.textHapus}>
                  Hapus
                </Text>
              </View>
              <ScrollView
                style={styles.contentHistory}
                contentContainerStyle={{paddingBottom: 16}}
                showsVerticalScrollIndicator={false}>
                {history.map((item, i) => (
                  <TouchableOpacity
                    onPress={() =>
                      cekResi(item.resi, apikey, item.id, item.image, item.name)
                    }
                    activeOpacity={0.5}
                    style={styles.rowHistory}
                    key={i}>
                    <Image
                      resizeMode="center"
                      style={styles.image}
                      source={item.image}
                    />
                    <View>
                      <Text>{item.name}</Text>
                      <Text>{item.resi}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          ) : null}
        </View>
        {loadData ? (
          <View style={styles.loading}>
            <ActivityIndicator color="#00cdac" size="large" />
          </View>
        ) : null}
        <Modalcourier
          isVisible={modalVisible}
          onSwipeMove={onModalClose}
          onBackdropPress={onModalClose}
          onPressItem={(item) => onPressModal(item)}
        />
      </SafeAreaView>
    </>
  );
};

export default Dashboard;
