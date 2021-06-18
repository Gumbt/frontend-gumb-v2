import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    height: calc(100% - 70px);
`;
