import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppColors } from '../../utils/theme/app.colors';
import { OnboardingNavigationStackParamsList } from './navigation/navigation.params.type';
import Screen from '../screen';
import { FONTS } from '../../utils/theme/fonts';
import { RootState } from '../../app-redux-store/store';
import { useSelector, useDispatch } from 'react-redux'
import { ACTION_SET_LANGUAGE, ACTION_SET_USER_DATA } from '../user.profile/onboading.actions';


/**
 * Contains the onboarding UI.
 */
const WelcomeScreen = (props: StackProps) => {

    const language = useSelector((state: RootState) => state.language)
    const dispatch = useDispatch()

    const navigation = props.navigation;

    return (
        <Screen>
            <View style={style.container}>
                <Text style={style.header}>Welcome Screen  {language}</Text>


                <Button
                    title="Log In"
                    onPress={() =>
                        dispatch(ACTION_SET_LANGUAGE("English"))
                        // navigation.navigate('LoginScreen')
                    }
                />

                <Button
                    title="Register"
                    onPress={() =>
                        // navigation.navigate('RegisterScreen')
                        dispatch(ACTION_SET_USER_DATA({
                            name: 'John Doe',
                            email: '',
                            phoneNumber: '',
                            publicAddress: ''
                        }))
                    }
                />
            </View>
        </Screen>
    );
};

type StackProps = NativeStackScreenProps<
    OnboardingNavigationStackParamsList,
    'WelcomeScreen'
>;

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

export default WelcomeScreen;
