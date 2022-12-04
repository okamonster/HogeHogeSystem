import styled from "@emotion/styled";
import { Feed } from "../parts/Feed";

export const FeedTemplate = () => {
    return(
        <SFeedTemplate>
            <Feed/>
            <Feed/>
            <Feed/>   
        </SFeedTemplate>
    );
}

const SFeedTemplate = styled.div``;
