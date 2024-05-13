import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import InputContainer from '../../common/molecules/InputContainer';
import InformationForm from '../molecules/InformationForm';
import CustomText from '../../common/atom/CustomText';
import RadioButton from '../../common/atom/RadioButton';
import { scale, moderateScale } from '../../../utils/Scale';

const InformationValidationForm = ({ navigation, data, onSubmit, renderItem }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm();

  // 성별 값 data 폼 객체에 추가 
  useEffect(() => {
    const initialGender = data.kidInformationData.find(item => item.key === '성별')?.data;
    setValue('성별', initialGender);
  }, [setValue]);

  return (
    <InformationForm
      navigation={navigation}
      data={data}
      moveScreen={handleSubmit(onSubmit)}
      isFix={false}
      renderItem={({ item, index }) => {
        if (index === 0 || index === 5) {
          return (
            <View
              className="w-full flex-row"
              style={{
                padding: scale(12),
                marginBottom: scale(6),
                backgroundColor: item.color,
              }}>
              <CustomText>{item.key}</CustomText>
            </View>
          );
        } else if (item.key === '성별') {
          return (
            <View
              className="w-full flex-row justify-center items-center"
              style={{
                padding: scale(12),
                marginBottom: scale(6),
                backgroundColor: item.color,
              }}>
              <RadioButton
                options={['남', '여']}
                onChange={selectedOption => {
                  setValue('성별', selectedOption);
                }}
                initialValue={item.data}
              />
            </View>
          );
        } else {
            const informationItem = data.InformationList[index - 1];
          return (
            <View className="w-full flex-col justify-center items-center">
              <InputContainer
                inputs={[
                  {
                    name: item.key,
                    rules: {
                      required: { value: true, message: informationItem?.errormsg },
                      pattern: { value: informationItem?.Regex, message: informationItem?.errormsg }
                    },
                    placeholder: item.key,
                    autoFocus: index === 1,
                    defaultValue: item.data,
                  },
                ]}
                control={control}
                register={register}
              />
              {errors[item.key] && (
                <View className="flex-row" style={{ marginBottom: scale(10), width: moderateScale(327, 0.3) }}>
                  <CustomText size="xs" color="red">{errors[item.key].message}</CustomText>
                </View>
              )}
            </View>
          );
        }
      }}
    />
  );
};

export default InformationValidationForm;