import styled from "@emotion/styled";
import { ArrowBack, ArrowBackIos, ArrowDownward, ArrowForward, ArrowForwardIos, ArrowUpward, List } from "@mui/icons-material";
import { Button } from "@mui/material";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { Suspense, useState } from "react";


export const PostPage = () => {
    const [hoverPointX,setHoverPointX] = useState(0.0);
    const [hoverPointY,setHoverPointY] = useState(0.0); 

    const hoverGround = (e:ThreeEvent<PointerEvent>) => {
        setHoverPointX(Math.floor(e.point.x)+0.5)
        setHoverPointY(Math.floor(e.point.z)+0.5)
        
    }

    const onClickGround = (e:ThreeEvent<PointerEvent>) => {
        
    }


    type Props = {
        count:number,
        x:number,
        y:number,
    }

    const Floor = (props:Props) => {
        const {count,x,y} = props;
        for(let i=0;i<count;i++) {
                
        }
       
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
            <Suspense>
                <Builder>
                    <Canvas>
                        <axesHelper args={[2]}/>
                        <gridHelper args={[10,10]}/>
                        <OrbitControls/>
                        <ambientLight/>
                        <Sky/>
                        <mesh rotation={[-Math.PI/2,0,0]} 
                            onPointerMove={hoverGround}
                            visible ={false}
                        >
                            <planeGeometry args={[10,10]}/>
                        </mesh>
                        <mesh rotation={[-Math.PI/2,0,0]} position={[hoverPointX,0,hoverPointY]}>
                            <planeGeometry args={[1,1]}/>
                            <meshStandardMaterial color={"#808080"}/>
                        </mesh>
                    </Canvas>
                </Builder>
            </Suspense>
            
        </>
    );
}

const PostHeader = styled.header`
    display:flex;
    height:60px;
    justify-content:space-between;
    padding:0 15px;
    width:100%;
    position:fixed;
    top:0;
    z-index:3;
`;


const Builder = styled.div`
    height:100vh;
`;