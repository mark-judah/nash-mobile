import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../utils/theme/app.colors';
import {FONTS} from '../utils/theme/fonts';

/**
 * BottomNav UI.
 */
const BottomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../../assets/images/home.png')}
          style={{backgroundColor: '#0E295421'}}
        />

        <Image
          source={require('../../assets/images/notifications.png')}
          style={{backgroundColor: '#0E295421'}}
        />

        <Image
          source={require('../../assets/images/history.png')}
          style={{backgroundColor: '#0E295421'}}
        />

        <Image
          source={require('../../assets/images/settings.png')}
          style={{backgroundColor: '#0E295421'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.darkblue,
    bottom: 0,
    height: 55,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:15,
    marginHorizontal:20,
    justifyContent: 'space-between',
  },
});

export default BottomNav;
