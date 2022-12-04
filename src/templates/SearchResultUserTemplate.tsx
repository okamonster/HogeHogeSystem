import styled from "@emotion/styled";
import { SearchUser } from "../parts/SearchUser";

export const SearchResultUserTemplate = () => {
    return(
        <SSearchResultUserTemplate>
            <SearchUser/>
            <SearchUser/>
        </SSearchResultUserTemplate>
    );
}

const SSearchResultUserTemplate = styled.div``;