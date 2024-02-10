import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * Actions UI.
 */
const Actions = () => {
  const items = [
    {
      logo: require('../../../assets/images/send.png'),
      title: 'Send Money',
      color:AppColors.darkblue

    },
    {
      logo: require('../../../assets/images/request.png'),
      title: 'Request Money',
      color:'#0E295421'

    },
    {
      logo: require('../../../assets/images/withdraw.png'),
      title: 'Withdraw',
      color:'#0E295421'

    },
    {
      logo: require('../../../assets/images/buy.png'),
      title: 'Buy Airtime',
      color:'#0E295421'

    },
  ];
  return (
    <View>
      <View style={styles.row}>
        {items.map(item => (
          <View
            style={{
              flexDirection: 'column',
              padding: 10,
              borderRadius: 15,
              backgroundColor: item.color,
              height:70,
              width:80,
              marginHorizontal:4
            }}>
            <Image
              source={item.logo}
              style={{ alignSelf: 'center'}}
            />
            <Text
              style={{
                marginTop: 20,
                marginLeft: 10,
                ...FONTS.body8,
                color: '#ffffff',
              }}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Actions;
