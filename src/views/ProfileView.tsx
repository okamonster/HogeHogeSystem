import styled from "@emotion/styled";
import { Feed } from "../parts/Feed";
import { ProfileTemplate } from "../templates/ProfileTemplate";

export const ProfileView = ( ) => {
    return(
        <SProfileView>
            <ProfileTemplate/>
            <UserPostTemplate>
                <Feed/>
            </UserPostTemplate>
        </SProfileView>
    );
}

const SProfileView = styled.div`
    overflow-y:scroll;
    margin-top:60px;
    margin-bottom:40px;
`;



const UserPostTemplate= styled.div``;