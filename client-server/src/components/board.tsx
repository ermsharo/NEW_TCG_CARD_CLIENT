import { useState } from 'react';
import styled from 'styled-components';
import Card from "./Card";

const BoardBox = styled.div`
  width: 85vw;
  margin: auto;
  display: grid;
  grid-template-columns: 40px auto 40px;
`;

const DisplayCardBox = styled.div`
 width: 100%; 

 grid-template-columns: 1fr 2fr;
 padding: 1rem;
`;

const DisplayCardButton = styled.div`
width: 100%;
height: 100%;
border: 2px solid red; 
color: white;
display: flex;
flex-direction: column;
justify-content: center;

img{
  width: 100%;
}
`;

const RegularImage = styled.img`

`;


const ReflexedImage = styled.img`
 transform: rotate(180deg);
`;



function Board() {
	
	return <BoardBox>

    <DisplayCardButton> <div><RegularImage src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67170c34-1d99-4e71-9e95-49f54ccde997/ddmch16-160dda32-be57-489a-ab1d-bc4d3eae74de.png/v1/fill/w_300,h_300/left_arrow_sticker_by_s_a_r_c_ddmch16-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwIiwicGF0aCI6IlwvZlwvNjcxNzBjMzQtMWQ5OS00ZTcxLTllOTUtNDlmNTRjY2RlOTk3XC9kZG1jaDE2LTE2MGRkYTMyLWJlNTctNDg5YS1hYjFkLWJjNGQzZWFlNzRkZS5wbmciLCJ3aWR0aCI6Ijw9MzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.O6uJnA1LUVCj6MW64Xid2zJ6E7fzDKV-OGeRoWOCivY"/></div></DisplayCardButton>
    <DisplayCardBox>
    
    <div><Card/></div> <div>Forms</div>
    </DisplayCardBox>
    <DisplayCardButton><ReflexedImage src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67170c34-1d99-4e71-9e95-49f54ccde997/ddmch16-160dda32-be57-489a-ab1d-bc4d3eae74de.png/v1/fill/w_300,h_300/left_arrow_sticker_by_s_a_r_c_ddmch16-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwIiwicGF0aCI6IlwvZlwvNjcxNzBjMzQtMWQ5OS00ZTcxLTllOTUtNDlmNTRjY2RlOTk3XC9kZG1jaDE2LTE2MGRkYTMyLWJlNTctNDg5YS1hYjFkLWJjNGQzZWFlNzRkZS5wbmciLCJ3aWR0aCI6Ijw9MzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.O6uJnA1LUVCj6MW64Xid2zJ6E7fzDKV-OGeRoWOCivY"/></DisplayCardButton>
    </BoardBox>;
}

export default Board;
