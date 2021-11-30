import axios from 'axios'

import { USER_SERVER } from '../config'

import { USER_INFO, CONTACT, SAVED_INFO_DES, SAVED_INFO_DEV } from './type'

//getIsMember 스터디 가입여부 확인
export const userInfo = (
  name,
  student_id,
  department,
  phone_no,
  password,
  position
) => {
  const request = axios
    .get(
      `${USER_SERVER}/api/recruitment/apply/user/${name}/${student_id}/${department}/${phone_no}/${password}/${position}`
    )
    .then(response => response.data)
  return {
    type: USER_INFO,
    payload: request,
  }
}

// contact 페이지에서 이메일 보내기
export const contact = (Writer_email, Content) => {
  const request = axios
    .post(`${USER_SERVER}/api/contact`, {
      writer_email: Writer_email,
      content: Content,
    })
    .then(response => response.data)
  return {
    type: CONTACT,
    payload: request,
  }
}

//디자이너 기존 정보 불러오기
export const savedInfoDes = User_id => {
  const request = axios
    .post(`${USER_SERVER}/api/recruitment/apply/get/des`, {
      user_id: User_id,
    })
    .then(response => response.data)
  return {
    type: SAVED_INFO_DES,
    payload: request,
  }
}

//개발자 기존 정보 불러오기
export const savedInfoDev = User_id => {
  const request = axios
    .post(`${USER_SERVER}/api/recruitment/apply/get/dev`, {
      user_id: User_id,
    })
    .then(response => response.data)
  return {
    type: SAVED_INFO_DEV,
    payload: request,
  }
}
