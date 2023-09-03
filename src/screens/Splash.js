import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Splash = () => {
  const navigation = useNavigation();
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationEnabled, setAnimationEnable] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (authLoaded && animationEnabled) {
      navigation.replace('Galeria');
    }
  }, [animationEnabled, authLoaded, navigation]);

  const onAnimationFinish = () => {
    setAnimationEnable(true);
  };

  return (
    <View style={styles.root}>
      <LottieView
        source={require('../assets/animation.json')}
        autoPlay
        loop={false}
        style={styles.Image}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image:{
    width:"50%"
  }
});
export default Splash;
