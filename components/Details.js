import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
export default class Details extends Component {
  render() {
    const {item} = this.props.route.params;
    return (
      <View style={styles.container}>
        <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => this.props.navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color={colors.white} />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.locationWrapper}>
              <Entypo name="location-pin" color={colors.white} size={24} />
              <Text style={styles.locationText}>{item.location}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.descriptionWrapper}>
          <View style={styles.heartWrapper}>
            <Entypo name="heart" size={32} color={colors.orange} />
          </View>
          <View style={styles.descriptionTextWrapper}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>PRICE</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.price}</Text>
                <Text style={styles.infoSubText}> /person</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>RATING</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.rating}</Text>
                <Text style={styles.infoSubText}> /5</Text>
              </View>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoTitle}>DURATION</Text>
              <View style={styles.infoTextWrapper}>
                <Text style={styles.infoText}>{item.duration}</Text>
                <Text style={styles.infoSubText}> hours</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => alert('You booked a trip')}>
            <Text style={styles.buttonText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
  },
  descriptionWrapper: {
    backgroundColor: colors.white,
    height: Dimensions.get('window').height * 0.4,
    marginTop: -20,
    borderRadius: 25,
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 5,
  },
  descriptionTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  descriptionTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.black,
  },
  descriptionText: {
    marginTop: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.darkGray,
    height: 85,
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  infoItem: {},
  infoTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.gray,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.orange,
  },
  infoSubText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: colors.orange,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
});
