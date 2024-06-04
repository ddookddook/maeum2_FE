import {Keyboard} from 'react-native';

// 설정 페이지 EndPoint
export const settingList1 = [
  {key: '도움말', icon: 'help', screen: 'tutorial'},
  {key: '회원정보 수정', icon: 'person', screen: 'info'},
  {key: '로그아웃', icon: 'logout'},
];

// 유효성 검사 리스트
export const kidInfoValidation = [
  {
    key: 'child_last_name',
    placeholder: '성을 입력해주세요.',
    Regex: /^[가-힣]{1,10}$/,
    errormsg: '성은 한글로 시작하고, 1자 이상 10자 이하로 입력해주세요.',
  }, // 한글로 10글자 이하
  {
    key: 'child_first_name',
    placeholder: '이름을 입력해주세요.',
    Regex: /^[가-힣]{1,20}$/, // 한글 또는 영문으로 시작하고, 2자 이상 20자 이하
    errormsg: '이름은 한글로 시작하고, 1자 이상 20자 이하로 입력해주세요.',
  },
];

export const guardianInfoValidation = [
  {
    key: 'email',
    placeholder: '이메일을 입력해주세요.',
    Regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    errormsg: '올바른 이메일 주소를 입력해주세요.',
    keyboardType: 'default',
  },
  {
    key: 'phone_number',
    placeholder: '전화 번호를 입력해주세요.',
    Regex: /^\d{11}$/,
    errormsg: '특수문자 제외, 숫자 11자리로 입력해주세요.',
    keyboardType: 'numeric',
  },
];
