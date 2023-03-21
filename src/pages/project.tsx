import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '@/components/Navbar';
import { ProjectRow } from '@/components/ProjectRow';
const Title = styled.h1`
    font-weight: 700;
    font-size: 60px;
    color: #FFFFFF;
    text-align:center;
`
const Wrap = styled.div`
    display:flex;
    margin:20px;
    gap:20px;
`
const Content = styled.div`
    width:60%;
    min-width:fit-content;
`
const Bar = styled.div`
    border: 1px solid #FFFFFF;
    width:100%;
`
const ImgContainer = styled.div`
    display:flex;
    width:40%;
    img {
        width:100%;
        height:100%;
    }
`
export default function Project() {
    const [productType, setProductType] = useState<undefined | string>('');
    return (
        <>
            <Navbar />
            <Title>
                Mes Projets
            </Title>
            <Wrap>
                <Content>
                    <Bar></Bar>
                    <ProjectRow status={true} socity="NEED FOR SCHOOL" title="League of legends" skills='Symfony API Front React axios' productTypeValue={productType}  onProductTypeChange={setProductType} />
                    <ProjectRow status={true} socity="NEED FOR SCHOOL" title="Creation of a CRM" skills='Symfony API Front Vue 2' />
                    <ProjectRow status={false} socity="MES PARENTS & MOI" title="WebSite M&M" skills='Wordpress' />
                    <ProjectRow status={false} socity="COURSES & MOI" title="WebSite C&M" skills='Wordpress' />
                    <ProjectRow status={true} socity="COURSES & MOI" title="WebSite C&M" skills='Wordpress' />
                </Content>
                <ImgContainer>
                    <img src="3fontainebleau.jpg" alt="" />
                </ImgContainer>
            </Wrap>
        </>
    )
}
