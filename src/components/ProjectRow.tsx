
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
`
const Content = styled.div`
    display: flex;
    padding: 15px 10px;
    gap:50px;
    border-bottom: 1px solid #FFFFFF;
    width:100%;
    h3 {
        font-family: 'Yeseva One';  
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        line-height: 28px;
    }
    h2 {
        font-family: 'Yeseva One';
        font-weight: 400;
        font-size: 32px;
        color: #FFFFFF; 
    }
    p {
        font-family: 'Yeseva One';
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
    }
`
const FirstBox = styled.div`
    width:35%;
`
type AppProps = {
    status: boolean;
    socity: string;
    title: string;
    skills: string;
    productTypeValue?: string;
    onProductTypeChange?: (newType: string) => void;
};
export const ProjectRow = ({ status, socity, title, skills, productTypeValue,
    onProductTypeChange }: AppProps) => {
    return (
        <Container>
            <Content>
                <FirstBox>
                    <h3>{status ? 'School' : 'Work'} Project</h3>
                    <h3>{socity}</h3>
                </FirstBox>
                <div>
                    <h2>{title}</h2>
                    <p>{skills}</p>
                </div>
            </Content>
        </Container>
    )
}
