import { useState } from 'react';
import styled from 'styled-components';
import Card from "./Card";

const BoardBox = styled.div`
  width: 80vw;
  margin: auto;
`;

const DisplayCardBox = styled.div`
 width: 100%; 
 grid-template-columns: 1fr 2fr;
`;

function Board() {
	
	return <BoardBox><DisplayCardBox>
    
    <div><Card/></div> <div>Forms</div>
    </DisplayCardBox></BoardBox>;
}

export default Board;
