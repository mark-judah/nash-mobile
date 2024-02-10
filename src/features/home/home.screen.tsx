import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {FONTS} from '../../utils/theme/fonts';
import {AppColors} from '../../utils/theme/app.colors';
import NavBar from '../../components/homeScreen/navBar';
import Balance from '../../components/homeScreen/balance';
import Swiper from 'react-native-swiper';
import Card1 from '../../components/homeScreen/card1';
import Actions from '../../components/homeScreen/actions';
import Transactions from '../../components/homeScreen/transactions';
import LoginScreren from '../../features/onboarding/login.screen';
import BottomNav from '../../components/bottomNav';

/**
 * Home UI.
 */
const Home = (props: Props) => {
  const navigation = props.navigation;
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      <NavBar />
      <Balance />
      <Swiper style={styles.swiper} height={0} dotColor={AppColors.darkblue} activeDotColor='#0E295487' showsButtons={false}>
        <Card1 />
        <Card1 />
        <Card1 />
      </Swiper>
      <Actions />
      <Transactions/>
      <BottomNav/>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  swiper:{
    marginBottom:0
  }
});

type StackProps = NativeStackScreenProps<
  OnboardingNavigationStackParamsList,
  'HomeScreen'
>;
// type Props = ReduxProps & StackProps;
type Props = StackProps;

export default Home;
