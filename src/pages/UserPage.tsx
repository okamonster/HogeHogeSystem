import { BottomBar } from "../parts/BottomBar";
import { ProfileHeader } from "../parts/ProfileHeader";
import { UserView } from "../views/UserView";

export const UserPage = () => {
    return(
        <>
            <ProfileHeader/>
            <UserView/>
            <BottomBar/>
        </>
    );
}