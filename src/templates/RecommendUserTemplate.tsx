import styled from "@emotion/styled";
import { RecommendUser } from "../parts/RecommendUser";

export const RecommendUserTemplate = () => {
    return (
        <SRecommendUserTemplate>
            <RecommendUser/>
             
        </SRecommendUserTemplate>
    );
}

const SRecommendUserTemplate = styled.div`
    display:flex;
    overflow-x:scroll;
`;