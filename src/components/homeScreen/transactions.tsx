import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * Transactions UI.
 */
const Transactions = () => {
  const items = [
    {
      logo: require('../../../assets/images/send.png'),
      title: 'Send Money',
      caption: '',
      amount: '',
      date: '',
    },
    {
      logo: require('../../../assets/images/send.png'),
      title: 'Send Money',
      caption: '',
      amount: '',
      date: '',
      
    },
    {
      logo: require('../../../assets/images/send.png'),
      title: 'Send Money',
      caption: '',
      amount: '',
      date: '',
    },
    {
      logo: require('../../../assets/images/send.png'),
      title: 'Send Money',
      caption: '',
      amount: '',
      date: '',
    },
    {
      logo: require('../../../assets/images/send.png'),
      title: 'Send Money',
      caption: '',
      amount: '',
      date: '',
    },
    {
      logo: require('../../../assets/images/send.png'),
      title: 'Send Money',
      caption: '',
      amount: '',
      date: '',
    },
  ];
  type ItemProps = {title: string};

  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
  return (
    <View>
      <View style={styles.row}>
        <Text style={{...FONTS.body11,margin:8,fontWeight:'bold',color:AppColors.darkblue}}>TRANSACTIONS</Text>
        <Text style={{...FONTS.body11,color:AppColors.light_blue,margin:8}}>View All <Image
          source={require('../../../assets/images/filter.png')}
        /></Text>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        {items.map(item => (
          <View>
            <Text>''</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 2,
    marginHorizontal: 16,
  },
});

export default Transactions;
