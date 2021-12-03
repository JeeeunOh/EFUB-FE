import React, { useState ,useEffect, useContext} from 'react'
import { useLocation } from "react-router";

import styled from 'styled-components'
import Button from '../../components/common/Button'
import InputBox from '../../components/common/InputBox'
import InputLine from '../../components/common/InputLine'
import { Link } from 'react-router-dom'
import Checkbox from '../../components/common/CheckBox'
import MeetingTime from '../../components/recruitment/MeetingTime'
import axios from 'axios'

import AppContext from "../../components/common/AppContext";


const BannerBlock = styled.div`
    width: 100%;
    position: relative;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 1.5rem;
`;

const Subtitle = styled.div`
    font-size: 1.25rem;
    font-family: Roboto;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Bottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8rem;
    margin-bottom: 5rem;
    justify-content: space-between;
`

const Question = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    margin-top: 6rem;
`
const Text = styled.div`
    font-family: Roboto;
    font-weight: 500;
    font-size: 1rem;
`

const DeveloperApplyLeadPage = () => {
    const location = useLocation();
    const userId = location.state;

    const [inputs, setInputs] = useState({
        first: '',
        second: '',
    });

    const { first, second } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [timeList, setTimeList] = useState([
        { id: 0, label: "3월 13일 토요일 오전 (9AM~12PM)", checked: false },
        { id: 1, label: "3월 14일 일요일 오전 (9AM~12PM)", checked: false },
        { id: 2, label: "3월 13일 토요일 오후 (1PM~6PM)", checked: false },
        { id: 3, label: "3월 14일 일요일 오후 (1PM~6PM)", checked: false },
        { id: 4, label: "3월 13일 토요일 저녁 (7PM~10PM)", checked: false },
        { id: 5, label: "3월 14일 일요일 저녁 (7PM~10PM)", checked: false },
        { id: 6, label: "모두 가능합니다!", checked: false },
    ]);

    const [check, setCheck] = useState(false);

    const onToggle = (id) => {
        setTimeList(
            timeList.map(time =>
                time.id === id ? { ...time, checked: !time.checked } : time
            )
        );
    };

    const onToggleCheck = () => {
        setCheck(!check);
    };

    useEffect(()=> {
        console.log("hi");
        console.log(userId);
        axios
        .post('http://3.34.222.176:8080/api/recruitment/apply/get/dev',{user_id: userId})
        .then((response) => {
          console.log(response);
          //text box 값 할당하기 
          if(response.data.exp !== null) setInputs(inputs.first = response.data.exp);
          if(response.data.link !== null) setInputs(inputs.second = response.data.link);
          //참가
          if(response.data.orientation !== null) setCheck(check = response.data.orientation);
          //면접 
        //   setTimeList(
        //     timeList.map(time =>
        //         time.id === response.data.interview.interview_id? { ...time, checked: !time.checked } : time
        //     ));
        });   
      }, []);   

    //   {
// 		"user_id": 32,
// 		"dev_id": 17,
// 		"created_at": "2021-11-17 00:12:38",
// 		"modified_at": "2021-11-20 16:58:59",
// 		"motive": "이펍 지원 동기(500자 이내)",
// 		"project_topic": "프로젝트 주제",
// 		"application_field": "리드개발자-백엔드",
// 		"language": "Java, python, C++",
// 		"confidence_lang": 5,
// 			"tool": {
// 			{
// 				"user_id": 32,
// 				"tool_id": 1,
// 				"tool_name": "C언어"
// 			},
// 			{
// 				"user_id": 32,
// 				"tool_id": 10,
// 				"tool_name": "스프링"
// 			}
// 		}
// 		"exp": "지금까지의 프로젝트 경험(500자 내외)",
// 		"link": "https://github.com/efubefub, https://dev-EFUB.tistory.com/",
// 		"orietation": true
// 		"interview": {
// 				{
// 					"interview_id": 1,
// 					"user_id": 32,
// 					"date": "3월 13일 토요일 오전(9AM-12PM)" 
// 				},
// 				{
// 					"interview_id": 5,
// 					"user_id": 32,
// 					"date": "3월 14일 일요일 저녁(7PM-10PM)" 
// 				}
// 		}
// }


    return (
        <>
            <BannerBlock>
                <Title>LEAD DEVELOPER</Title>
                <Subtitle>지원서 작성</Subtitle>
            </BannerBlock>
            <Main>
                <Question>1. 지금까지의 프로젝트 경험을 서술해주세요. (500자 내외)</Question>
                <InputBox name="first" value={first} onChange={onChange} />
                <Question>2. 깃허브 또는 기술블로그 링크를 적어주세요.</Question>
                <InputLine name="second" value={second} onChange={onChange} />
                <Question>3. 세미나와 프로젝트에 참가 가능한지, 공지사항에 있는 모든 일정을 확인하셨습니까?</Question>
                <Checkbox onToggle={() => { onToggleCheck() }} label="네, 확인했습니다." checked={check} />
                <Question style={{ marginTop: "10rem", marginBottom: "5px" }}>4. 다음 중 면접이 '불가능한' 시간을 선택해주세요.</Question>
                <Text style={{ marginBottom: "3rem" }}>불가능한 시간을 모두 선택해주시고, 모두 가능하다면 '모두 가능합니다'를 선택해주세요. </Text>
                <MeetingTime timeList={timeList} onToggle={onToggle} />
                <Bottom>
                    <Text>3/3 페이지</Text>
                    <div>
                        <Button blue style={{ marginRight: 15 }}>저장</Button>
                        {/* <Button filled onClick={() => { alert(`1번 : ${first} / 2번: ${second}`) }}>다음</Button> */}
                        <Link to="/thankyou">
                            <Button width="8" filled>
                                제출하기
                            </Button>
                        </Link>
                    </div>
                </Bottom>
            </Main>
        </>
    )
}

export default DeveloperApplyLeadPage;
