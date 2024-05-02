import React, { useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text,Button } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomSlide from '../atom/CustomSlide';
import { styled } from 'nativewind';

const SlideBox=styled(View)
const ImageSlide = () => {
    const swiperRef = useRef(null);

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(-1, true);
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };
  
  return (
    <View>
     <SlideBox className='flex-1 justify-center'>
      <Swiper autoplay={false} circleloop={true} ref={swiperRef}>
            <CustomSlide source={require('./../../../assets/Images/Tutorial1.png')} text="음성과 카메라 접근에 허용해주세요!" />
            <CustomSlide source={require('./../../../assets/Images/Tutorial2.png')} text="똑똑이와 스무고개를 시작해보세요!" />
            <CustomSlide source={require('./../../../assets/Images/Tutorial3.png')} text="원하는 순서와 주제를 고를땐아래의 버튼을 클릭해요"/>
            <CustomSlide source={require('./../../../assets/Images/Tutorial4.png')} text="게임을 할 땐 마이크 버튼을 꾹 누르고 이야기 해보세요!" />
            <CustomSlide source={require('./../../../assets/Images/Tutorial5.png')} text="똑똑이와 눈을 마주치면서 대화해보세요!" />
            <CustomSlide source={require('./../../../assets/Images/Tutorial6.png')} text="질문 횟수 설명 정답이면 버튼을 눌러줘" />
    </Swiper>
    </SlideBox>
    <View style={styles.buttonContainer}>
    <Icon name='arrow-circle-left' size={50} color='#FFA8BA' onPress={goToPreviousSlide} />
    <Icon name='arrow-circle-right' size={50} color='#FFA8BA' onPress={goToNextSlide} /> 
  </View>
  </View>
  );
};



const styles = StyleSheet.create({
  
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
   justifyContent: 'space-between',
   height: '5%'
  },
 });

export default ImageSlide;