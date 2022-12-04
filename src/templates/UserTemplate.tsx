import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";
import { Profile } from "../parts/Profile";
import { ProfileMode } from "../parts/ProfileMode";

export const UserTemplate = () => {
    const [followFlag,setFollowFlag] = useState(false);
    return(
        <SUserTemplate>
            <Profile/>
            {
                followFlag ? 
                    <Button variant="contained" sx={{backgroundColor:"#000",color:"#fff"}}
                        onClick = {() => setFollowFlag(!followFlag)}
                    >
                        フォロー
                    </Button>
                :
                    <Button variant="outlined" sx={{borderColor:"#000",color:"#000"}}
                        onClick = {() => setFollowFlag(!followFlag)}
                    >
                        フォロー中
                    </Button>
            }
            
            <ProfileMode/>
        </SUserTemplate>
    );
}

const SUserTemplate = styled.div`
    padding:10px 15px 0;
    border-bottom:solid 1px #e0e8e8;
`;