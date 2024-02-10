import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * NavBar UI.
 */
const NavBar = () => {
  return (
    <View>
      <View style={styles.row1}>
        <View style={styles.row2}>
          <Image
            style={styles.jam}
            source={require('../../../assets/images/jam_menu.png')}
          />
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              ...FONTS.body4,
              color: AppColors.darkblue,
            }}>
            Welcome John
          </Text>
        </View>

        <Image
          style={styles.qr}
          source={require('../../../assets/images/qr.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jam: {
    marginLeft: 15,
    marginTop: 15,
  },
  qr: {
    margin: 15,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default NavBar;
