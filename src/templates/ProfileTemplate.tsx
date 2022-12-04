import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Profile } from "../parts/Profile";
import { ProfileMode } from "../parts/ProfileMode";

export const ProfileTemplate = () => {
    return(
        <SProfileTemplate>
            <Profile/>
            <Button variant="contained" sx={{backgroundColor:"#e0e8e8",color:"#000",width:"100%"}}>
                プロフィールを編集
            </Button>
            <ProfileMode/>
        </SProfileTemplate>
    );
}

const SProfileTemplate = styled.div`
    padding:10px 15px 0;
    border-bottom:solid 1px #e0e8e8;
`;