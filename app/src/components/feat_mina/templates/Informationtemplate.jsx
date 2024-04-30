import React from "react";
import { View, VirtualizedList} from "react-native"; 
import { styled } from "nativewind";
import CustomTitle from "../../common/atom/CustomTitle";
import Container from "../../common/atom/Container";
import CustomBtn from "../../common/atom/CustomBtn";
import ProfileImage from "../molecules/ProfileImage";
import CustomText from "../../common/atom/CustomText";
import { scale } from "../../../utils/Scale";
import { kidInformationData } from "../mocks/mockdata";
import { guardianInformationData } from "../mocks/mockdata";

const Header = styled(View);
const Section = styled(View);

const renderItem = ({ item }) => (

  <Section className="w-full flex-row justify-between items-end" style={{ padding: scale(20)}}>
    <CustomText color={item.color}>{item.key}</CustomText>
    <CustomText>{item.data}</CustomText>
  </Section>
);


const Informationtemplate = ({ navigation }) => {

  const moveInformationFixScreen = () => {
    navigation.navigate('infofix');
  };


  return (
    <Container>
      <VirtualizedList
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        getItemCount={() => kidInformationData.length + guardianInformationData.length + 2}
        getItem={(data, index) => {
          if (index === 0) {
            return { key: "아이 정보", data: "", color:"darkgray" }; 
          } else if (index < kidInformationData.length + 1) {
            return kidInformationData[index - 1]; 
          } else if (index === kidInformationData.length + 1) {
            return { key: "보호자 정보", data: "", color:"darkgray" };
          } else {
            const guardianIndex = index - kidInformationData.length - 2; 
            return guardianInformationData[guardianIndex];
          }
        }}
        getItemLayout={(data, index) => ({
          length: scale(20), 
          offset: scale(20) * index,
          index,
        })}
        ListHeaderComponent={
          <>
            {/* 타이틀 */}
            <Header className="w-full flex-row" style={{ marginBottom: scale(20) }}>
              <CustomTitle>회원 정보</CustomTitle>
            </Header>
            {/* 섹션 */}
            <Section className="w-full flex-row justify-between items-end" style={{ padding: scale(6) }}>
              <ProfileImage size="lg" />
              <CustomBtn
                size="xs"
                color="buttonpink"
                rounded={true}
                title="수정"
                onPress={moveInformationFixScreen}
              />
            </Section>
          </>
        }
        ListHeaderComponentStyle={{ marginBottom: scale(20) }} 
      />
    </Container>
  );
};


export default Informationtemplate;