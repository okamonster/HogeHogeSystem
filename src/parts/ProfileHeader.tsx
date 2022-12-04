import styled from "@emotion/styled";
import { ArrowBackIos } from "@mui/icons-material";
import { Button } from "@mui/material";
import router from "next/router";

export const ProfileHeader = () => {
    return(
        <SProfileHeader>
            <Button onClick = {router.back}>
                <ArrowBackIos/>
            </Button>
            <BoldText>ユーザーネーム</BoldText>
        </SProfileHeader>
    );
}

const SProfileHeader = styled.header`
    padding:0 15px;
    background-color:#fff;
    width:100%;
    height:60px;
    display:flex;
    align-items:center;
    position:fixed;
    top:0;
    border-bottom:solid 1px #e0e8e8;
    z-index:3;
`;

const BoldText = styled.p`
    font-weight:bold;
    font-size:14px;
    margin:0;

`;