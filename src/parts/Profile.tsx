import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

export const Profile = () => {
    return(
        <>
        <SProfile>
            <Avatar src={""} sx={{width:80, height:80,marginRight:"10px"}}/>
            <FollowWidget>
                <FollowText>0</FollowText>
                <Text>フォロー</Text>
            </FollowWidget>
            <FollowWidget>
                <FollowText>0</FollowText>
                <Text>フォロワー</Text>
            </FollowWidget>
        </SProfile>
        <SProfileDetail>
            <BoldText>ユーザーネーム</BoldText>
            <Text>deicription</Text>
        </SProfileDetail>
        </>
    );
}

const SProfile = styled.div`
    display:flex;
    margin-bottom:10px;
    align-items:center;
    
`;

const FollowWidget =styled.div`
    text-align:center;
    margin-right:10px;
`;

const FollowText = styled.p`
    font-size:30px;
    margin:0;

`;

const SProfileDetail = styled.div`
    margin-bottom:10px;
`;

const BoldText = styled.p`
    font-weight:bold;
    font-size:14px;
    margin:0;

`;

const Text = styled.p`
    font-size:14px;
    margin:0;
`;