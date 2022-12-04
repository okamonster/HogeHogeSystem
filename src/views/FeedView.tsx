import styled from "@emotion/styled";
import { FeedTemplate } from "../templates/FeedTemplate";
import { RecommendUserView } from "./RecommendUserView";

export const FeedView = () => {
    return(
        <SFeedView>
            <FeedTemplate/>
            <RecommendUserView/>

        </SFeedView>
    );
}

const SFeedView = styled.div`
    margin-top:60px;
    overflow-y:scroll;
    margin-bottom:40px;
`;