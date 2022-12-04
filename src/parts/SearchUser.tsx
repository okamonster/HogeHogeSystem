import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

export const SearchUser = () => {
    return(
        <SSearchUser>
            <Avatar src={""} sx={{width:45,height:45,marginRight:"5px"}}/>
            <BoldText>ユーザーネーム</BoldText>
        </SSearchUser>
    )
}

const SSearchUser = styled.div`
    padding:10px 15px;

    border-bottom:solid 1px #e0e8e8;
    display:flex;
    align-items:center;
`;


const BoldText = styled.p`
    font-weight:bold;
    font-size:14px;
    margin:0;

`;