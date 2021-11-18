import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Button from "../common/Button";

import Arrow from "../../assets/recruitment/arrow.png";

const BannerBlock = styled.div`
    width: 100%;
    height: 50rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 3rem;
`;

const RecruitBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 35rem;
    padding: 1rem 5rem 1rem 5rem;
    background-color: rgba(225, 225, 225, 0.15);
    border-radius: 10px;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    align-items: flex-start;
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    height: 20rem;
    justify-content: space-between;
`;

const ButtonItems = styled.div`
    display: flex;
    flex-direction: column;
    height: 9rem;
    justify-content: space-between;
    align-items: center;
`;

const ListBox = styled.div`
    width: 14rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;
    text-align: end;
`;

const Text = styled.div`
    font-size: ${(props) => props.size || "30px"};
    font-family: ${(props) => props.font || "Montserrat"};
    margin-bottom: ${(props) => props.margin || "0px"};
    font-weight: bold;
`;

const buttons = [
    {
        name: "developer",
        text: "개발자로 지원하기",
        link: "/developer-apply",
    },
    {
        name: "designer",
        text: "디자이너로 지원하기",
        link: "/designer-apply",
    },
];

const Banner = () => {
    return (
        <BannerBlock>
            <Title>RECRUITMENT</Title>
            <RecruitBox>
                <TextBox>
                    <Text margin="30px">EFUB 1st Recruiting</Text>
                    <Text size="60px">EWHA</Text>
                    <Text size="60px">FRONT-END</Text>
                    <Text size="60px">UI/UX</Text>
                    <Text size="60px" margin="30px">BACK-END</Text>
                    <Text size="20px" font="Roboto" margin="15px">지원분야 | UI/UX 디자인, 프론트/백엔드 개발</Text>
                    <Text size="20px" font="Roboto">모집기간 | 2021/09/01 ~ 09/07 23:59까지</Text>
                </TextBox>
                <ButtonBox>
                    <Link to="/list">
                        <ListBox>
                            <div>
                                <Text size="30px" font="Roboto">합격자 조회</Text>
                                <Text size="30px" font="Roboto">바로가기</Text>
                            </div>
                            <img src={Arrow} alt="arrow" />
                        </ListBox>
                    </Link>
                    <ButtonItems>
                        {buttons.map((b) => (
                            <Link to={b.link}>
                                <Button
                                    width="15"
                                    height="4"
                                    filled
                                >
                                    {b.text}
                                </Button>
                            </Link>
                        ))}
                    </ButtonItems>
                </ButtonBox>
            </RecruitBox>
        </BannerBlock >
    );
};

export default Banner;