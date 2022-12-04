import styled from "@emotion/styled";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Button } from "@mui/material";
import Link from "next/link";
export const Header = () => {
    return(
        <SHeader>
            <h3>HogeHogeSystem</h3>
            <Link href="Post">    
                <Button>
                    <AddBoxOutlinedIcon sx = {{fontSize:30}}/>
                </Button>
            </Link>
        </SHeader>
    );
}


const SHeader = styled.header`
    width:100%;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    border-bottom:solid 1px #e0e8e8;
    padding:0 8px;
    height:60px;
    position:fixed;
    top:0;
    z-index:3;
`;