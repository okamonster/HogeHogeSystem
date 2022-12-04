import styled from "@emotion/styled";

export const ProfileMode = () => {
    return(
        <SProfileMode>
            <Text>ルーム</Text>
        </SProfileMode>
    );
}

const SProfileMode = styled.div`
    padding:10px 0;
`;

const Text = styled.p`

    font-size:14px;
    margin:0;
`;