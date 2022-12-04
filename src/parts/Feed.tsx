import styled from "@emotion/styled";
import { PlayCircleFilled } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";

export const Feed = () => {
    return(
        <SFeed>
            <UserName>
                <Avatar src="" sx={{width:25,height:25,marginRight:"5px"}}/>
                <BoldText>UserName</BoldText>
            </UserName>
            <FeedImage/>
            <FeedDetail>
                <BoldText>UserName</BoldText>
                <Text>text</Text>
            </FeedDetail>
            <Button variant="outlined" sx={{padding:"3px 5px"}}>
                <PlayCircleFilled sx={{fontSize:25,marginRight:"5px"}}/>
                <BoldText>部屋へ行く</BoldText>
            </Button>
        </SFeed>
    );
}

const SFeed = styled.div`
    padding:20px 10px;
    border-bottom:solid 1px #e0e8e8;
`;

const Text = styled.p`
    font-size:14px;
    margin:0;
`;

const BoldText = styled.p`
    font-weight:bold;
    font-size:14px;
    margin:0;

`;

const UserName = styled.div`
    display:flex;
    align-items:center;
    line-height:0;
`;

const FeedImage = styled.img`
    max-height:300px;
    min-height:100px;
    border-radius:5px;
    background-color:#808080;
    margin:5px 0;
    width:100%;
`;

const FeedDetail = styled.div`
    display:flex;
    margin-bottom:5px;
`;
