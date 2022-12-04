import styled from "@emotion/styled";

export const ProfileDetail = () => {
    return(
        <SProfileDetail>
            <BoldText>ユーザーネーム</BoldText>
            <Text>deicription</Text>
        </SProfileDetail>
    );
} 

const SProfileDetail = styled.div`
    margin-bottom:10px;
`;

const Text = styled.p`
    font-size:14px;
    margin:0;
`;

const BoldText = styled.p`
    font-weight:bold;
    font-size:14px;
    margin:0;

`;