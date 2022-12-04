import styled from "@emotion/styled";
import { HomeOutlined, SearchOutlined, PersonOutlined } from "@mui/icons-material";
import { Button } from "@mui/material"
import Link from "next/link";

export const BottomBar = () => {
    return(
        <SBottomBar>
            <Link href={"/Feed"}>
                <Button>
                    <HomeOutlined sx={{fontSize:30}}/>    
                </Button>
            </Link>
            
            <Link href={"/Search"}>
                <Button>
                    <SearchOutlined sx={{fontSize:30}}/>
                </Button>
            </Link>
    
            <Link href={"/Profile"}>
                <Button>
                    <PersonOutlined sx={{fontSize:30}}/>
                </Button>
            </Link>

        </SBottomBar>
    )
}


const SBottomBar = styled.div`
    width:100%;
    height:40px;
    margin-top:40px;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    border-top:solid 1px #e0e8e8;
    position:fixed;
    bottom:0;
    z-index:3;
`;