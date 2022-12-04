import styled from "@emotion/styled";
import { SearchOutlined } from "@mui/icons-material";

export const SearchHeader = () => {
    return(
        <SSearchHeader>
            <SearchBar>
                <SearchOutlined sx={{fontSize:30,margin:"0 10px"}}/>
                <SearchInput type={"search"} placeholder={"検索"}/>
            </SearchBar>
        </SSearchHeader>
    );

}

const SSearchHeader = styled.header`
    background-color:#fff;
    width:100%;
    height:80px;
    border-bottom:solid 1px #e0e8e8;
    position:fixed;
    top:0;
    padding:25px 25px 15px 25px;
    z-index:3;
`;

const SearchBar = styled.form`
    background-color:#e0e8e8;
    width:100%;
    height:100%;
    border-radius:8px;
    display:flex;
    align-items:center;
 
`;

const SearchInput = styled.input`
    background-color:#e0e8e8;
    padding:10px 0;
    border:none;
    width:100%;
`;
