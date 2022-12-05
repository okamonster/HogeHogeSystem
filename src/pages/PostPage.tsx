import styled from "@emotion/styled";
import { ArrowBack, ArrowBackIos, ArrowDownward, ArrowForward, ArrowForwardIos, ArrowUpward, List } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Joystick } from 'react-joystick-component';

export const PostPage = () => {
    const handleMove = (e: any) => {
        console.log(e);
    }

    const handleStart = (e: any) => {
        console.log(e);
    }

    const handleStop = (e: any) => {
        console.log(e);
    }

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
            
            <Controller>
                <Joystick size={80} move={handleMove} start={handleStart} stop={handleStop}
                baseColor={"#808080"} stickColor={"#000"}/>
                
            </Controller>
            <SlotBar>
                    <OptionSlot>
                        <List sx={{color:"#fff",fontSize:30}}/>
                    </OptionSlot>
                    <Slot/>
                    <Slot/>
                    <Slot/>
                    <Slot/>
                </SlotBar>
            
            
        </>
    );
}

const PostHeader = styled.header`
    display:flex;
    height:60px;
    justify-content:space-between;
    padding:0 15px;
    width:100%;
`;

const Controller = styled.div`
    padding:0 15px;
    text-align:center;
    width:100%;
`;

const SlotBar = styled.div`
    display:inline-flex;
    background-color:#000;
    border-radius:3px;

`;

const Slot = styled.div`
    height:40px;
    width:40px;
    boeder-radius:5px;
    border:solid 2px #e0e8e8;
    background-color:#808080;
    margin:5px 3px;
`

const OptionSlot = styled.div`
    height:40px;
    width:40px;
    boeder-radius:5px;
    border:solid 2px #e0e8e8;
    background-color:#000;
    margin:5px 3px;
    display:flex;
    align-items:center;
    justify-content:center;
`