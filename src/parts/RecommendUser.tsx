import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

export const RecommendUser = () => {
    return(
        <SUser>
            <Avatar src="" sx={{width:70,height:70,marginBottom:"10px"}}/>
            <BoldText>UserName</BoldText>
        </SUser>
    );
}


const SUser = styled.div`
    border:solid 1px #e0e8e8;
    height:140px;
    padding:10px;
    display:inline-block;
    border-radius:5px;
    margin-right:5px;
    background-color:#fff;
`;

const BoldText = styled.p`
    font-weight:bold;
    font-size:14px;
    margin:0;

`;