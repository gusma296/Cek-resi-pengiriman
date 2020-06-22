import React from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
Icon.loadFont();
import moment from 'moment';

const DetailResi = (props) => {
  const {courier_name, data, courier_image, resi, id} = props.route.params;
  const tracking =
    id !== 'jnt' && id !== 'tiki' && id !== 'wahana'
      ? data.tracking.reverse()
      : data.tracking;
  return (
    <SafeAreaView style={styles.safearea} edges={['top']}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={styles.backButton}>
        <Icon name="chevron-left" size={35} color="white" />
        <Text style={styles.textBack}>TRACKING</Text>
      </TouchableOpacity>
      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <View style={styles.imageLine}>
            <Image
              resizeMode="center"
              style={styles.imageCourier}
              source={courier_image}
            />
          </View>
          <View>
            <View style={styles.rowText}>
              <Icon name="car-pickup" size={20} color="#00cdac" />
              <Text style={styles.textCourir}>{courier_name}</Text>
            </View>
            <View style={styles.rowText}>
              <Icon name="progress-alert" size={20} color="#00cdac" />
              <Text style={styles.textResi}>{resi}</Text>
            </View>
            <View style={styles.rowText}>
              <Icon name="cube-send" size={20} color="#00cdac" />
              <Text style={styles.textResi}>
                {id === 'jnt' ? data.received.status : data.status}
              </Text>
            </View>
          </View>
        </View>
        {tracking.map((item, i) => (
          <View style={styles.flex} key={i}>
            <View style={styles.row}>
              <View style={styles.date}>
                <Text style={styles.textDesc}>
                  {moment(item.date).format('DD-MM-YYYY')}
                </Text>
                <Text style={styles.textDesc}>
                  {moment(item.date).format('HH:mm')}
                </Text>
              </View>
              <View style={styles.viewDivider}>
                <Icon
                  size={18}
                  color={i === 0 ? '#00cdac' : '#abdbd4'}
                  name={i === 0 ? 'checkbox-marked-circle' : 'circle-slice-8'}
                />
                {i < data.tracking.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
              {id === 'jnt' ? (
                <View style={styles.flex}>
                  <Text style={styles.textDesc}>{item.desc}</Text>
                  <Text style={styles.textDesc}>{item.status}</Text>
                </View>
              ) : (
                <View style={styles.flex}>
                  <Text style={styles.textDesc}>{item.desc}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailResi;
