import styled from "@emotion/styled";
import { Feed } from "../parts/Feed";
import { UserTemplate } from "../templates/UserTemplate";

export const UserView = ( ) => {
    return(
        <SUserView>
            <UserTemplate/>
            <UserPostTemplate>
                <Feed/>
            </UserPostTemplate>
        </SUserView>
    );
}

const SUserView = styled.div`
    overflow-y:scroll;
    margin-top:60px;
    margin-bottom:40px;
`;

const UserPostTemplate= styled.div``;
