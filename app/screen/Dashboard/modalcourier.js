import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import RnModal from 'react-native-modal';
import {courierData} from '../../constant/courierData';

const Modalcourier = (props) => {
  const {isVisible, onBackdropPress, onSwipeMove, onPressItem} = props;
  return (
    <RnModal
      onBackdropPress={onBackdropPress}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.3}
      swipeDirection={'down'}
      onSwipeComplete={onSwipeMove}
      isVisible={isVisible}
      style={styles.modal}>
      <View style={styles.modalContent}>
        <View style={styles.swipestick} />
        <View style={styles.content}>
          <Text style={styles.textTitle}>Pilih Jasa Pengiriman</Text>
          {courierData.map((item, i) => (
            <View key={i}>
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                style={styles.courirList}>
                <Image
                  resizeMode="center"
                  style={styles.image}
                  source={item.image}
                />
                <Text style={styles.textCourir}>{item.name}</Text>
              </TouchableOpacity>
              {i < courierData.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
      </View>
    </RnModal>
  );
};

export default Modalcourier;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  swipestick: {
    alignSelf: 'center',
    height: 6,
    width: 70,
    backgroundColor: '#dbdbdb',
    borderRadius: 3,
    marginTop: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  courirList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  image: {
    width: 50,
    height: 25,
  },
  textCourir: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#e6e6e6',
  },
});
