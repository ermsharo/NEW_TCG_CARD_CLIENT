
import styled from "styled-components";
import { useMyContext } from "../context/context";
import React from "react";
import Board from "../components/board";




const DashboardBox = styled.div`
padding: 8rem 3rem;

margin: auto;


`

function NewCards() {
    const { isLoading, error } = useMyContext();


    if (isLoading) return (<div>loading</div>)
    if (error) return (<div>Error</div>)

    return (
        <>
    <Board/>

        </>

    );

}

export default NewCards;

