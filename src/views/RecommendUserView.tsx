import styled from "@emotion/styled";
import { RecommendUserTemplate } from "../templates/RecommendUserTemplate";

export const RecommendUserView = () => {
    return(
        <SRecommendUserView>
            <BoldText>おすすめユーザー</BoldText>
            <RecommendUserTemplate/>
        </SRecommendUserView>
    );
}

const SRecommendUserView = styled.div`
    background-color:#e0e8e8;
    padding:5px 0;
    padding:15px;
`;

const BoldText = styled.p`
    font-weight:bold;
    font-size:14px;
    margin:0;

`;