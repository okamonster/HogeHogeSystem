import styled from "@emotion/styled";
import { SearchResultUserTemplate } from "../templates/SearchResultUserTemplate";

export const SerachResultView = () => {
    return(
        <SSerachResultView>
            <SearchResultUserTemplate/>
           
        </SSerachResultView>
    );
}

const SSerachResultView = styled.div`
    margin-top:80px;
    margin-bottom: 40px;
    overflow-y:scroll;
`;