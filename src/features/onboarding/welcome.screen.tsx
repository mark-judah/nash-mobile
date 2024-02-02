import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppColors } from '../../utils/theme/app.colors';
import { OnboardingNavigationStackParamsList } from './navigation/navigation.params.type';
import Screen from '../screen';
import { FONTS } from '../../utils/theme/fonts';
import { RootState } from '../../app-redux-store/store';
import { useDispatch, connect, ConnectedProps } from 'react-redux'
import { actionSetLanguage } from '../user.profile/action.generators';


/**
 * Contains the onboarding UI.
 */
const WelcomeScreen = (props: Props) => {

    const navigation = props.navigation;

    return (
        <Screen>
            <View style={style.container}>
                <Text style={style.header}>Welcome Screen  {props.language}</Text>


                <Button
                    title="Log In"
                    onPress={() =>
                        props.dispatchSetLanguage("English")
                        // navigation.navigate('LoginScreen')
                    }
                />

                <Button
                    title="Register"
                    onPress={() =>
                        // navigation.navigate('RegisterScreen')
                        props.dispatchSetLanguage("Swahili")
                    }
                />
            </View>
        </Screen>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: AppColors.background,
    },
    header: {
        ...FONTS.body1,
        color: AppColors.darkblue
    }
});

/**
 *
 * @param state the applications state.
 * @returns the props intended to be passed to the component from state variables.
 */
const mapStateToProps = (state: RootState) => ({
    language: state.user_profile.language,
    publicAddress: state.user_profile.public_address,
});

const mapDispatchToProps = {
    dispatchSetLanguage: actionSetLanguage,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

type StackProps = NativeStackScreenProps<
    OnboardingNavigationStackParamsList,
    'WelcomeScreen'
>;

type Props = ReduxProps & StackProps;
export default connector(WelcomeScreen);
