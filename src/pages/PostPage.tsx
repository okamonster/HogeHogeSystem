import styled from "@emotion/styled";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Button } from "@mui/material";

export const PostPage = () => {
    return(
        <>
            <PostHeader>
                <Button>
                    <ArrowBackIos/>
                </Button>
                <Button>
                    <ArrowForwardIos/>
                </Button>
            </PostHeader>
        </>
    );
}

const PostHeader = styled.header`
    display:flex;
    height:60px;
    justify-content:space-between;
    padding:0 15px;
`;



