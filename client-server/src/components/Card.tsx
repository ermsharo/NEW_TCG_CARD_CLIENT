import { useState } from 'react';
import styled from 'styled-components';



const CardDisplay = styled.div`
position: relative;

    `;


const CardStructure = styled.div`
color: white; 
aspect-ratio: 3/4;
width: 350px;
background-color: transparent;
border-image:  url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAAeBJREFUeF7t3UFuhDAUBNFw/0MTZQkjUSp9k5Ggsu3GTB62B2XhbD/ws+/7Tp035du2bVe/72X4d2GgR75AFy+fQL8N2hJ3T+A8Yz/20EADdQKL283Qu0GnS5y+9RZ//tuHG3uMB4AX3dsFFt9g7DEeINDDI90CPU7xsYcd4Gl7Ju0Y2kdf8LAlHigJLM71hNMXNEMvHxl+Kb1tz6QJThMwUBI85YFKMKoHSkIyD1SCUT1QEpJ5oBKM6oGSkMwDlWBUD5SEZB6oBKN6oCQk80AlGNUDJSGZByrBqB4oCck8UAlG9UBJSOaBSjCqB0pCMg9UglE9UBKSeaASjOqBkpDMA5VgVA+UhGQeqASjeqAkJPNAJRjVAyUhmQcqwageKAnJPFAJRvVASUjmgUowqgdKQjIPVIJRPVASknmgEozqgZKQzAOVYFQPlIRkHqgEo3qgJCTzQCUY1QMlIZkHKsGoHigJyTxQCUb1QElI5oFKMKoHSkIyH4Oe7/e2M0gI8MNHX9CpOJdzGg9xaYa6U9IDhT1Ur2B7wdNn7NhjPMDD9tSxx3iAQA+LVu+hLfnrTbdj1+WLPU2oQAMdCiy+vHPs/xv0fL/pW8Diz//14ehvGf0/JfmIApVgVA+UhGROoL/cEF9jjOXycAAAAABJRU5ErkJggg==") 28 /  28px / 0 round;
    border-width:  8px;
    border-style:  solid;
    position: absolute;
    z-index: 6;

    `;


const CardAtributes = styled.div`
color: white; 
aspect-ratio: 3/4;
width: calc(350px + 16px);

background-color: transparent;
position: relative;
z-index: 8;
display: grid;



    `;


const CardStructureInside = styled.div`
color: white; 

height: 100%;

display: grid;
grid-template-rows: 50% 12% 38%;
border-image:  url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAAZpJREFUeF7t3VEKwjAQRVGzjuL+FyZdh+JnImQY5tZqc/1tfNTTN6kIarsFj/u2PaM1Kx1/7Hubvd7pwfcTBe35BIXHR9CzQR3x3BUYG/uxhwoqaE4AXm1Djwatjnh014PP//C4qkerBgjaX2NBh85XCybo2aBXG/FoU842Nt1QQeeXQFD40zZBvw262ohX99SwoYL2xNFNStCoksm3VYIKmhSAlzvygsICcJwNFRQWgONsqKCwABxnQwWFBeA4GyooLADH2VBBYQE4zoYKCgvAcTZUUFgAjrOhgsICcJwNFRQWgONsqKCwABxnQwWFBeA4GyooLADH2VBBYQE4zoYKCgvAcTZUUFgAjrOhgsICcJwNFRQWgONsqKCwABxnQwWFBeA4GyooLADH2dBfAx3PZ/Wve5cbKmgvIKgjDwvAcTa0CBoBjvHhLzqsvocKWmzk+HRB/w306ltAtpHlPVTQ+Qikb0qCCpraVcsjX72rpc72gov9lXD4ogoqKCwAx4UNdU+di0efB/t/SsnGCpoEi5YLGgklj0egL6eUqizgzmDQAAAAAElFTkSuQmCC") 28 /  28px / 0 round;
    border-width:  8px;
    border-style:  solid;
    /* z-index: 4; */
    position: relative;

    `;


const CardImage = styled.div`
    /* position: absolute; */
    /* z-index: 2; */
img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    

    
}

    `;


const CardTitle = styled.div`

   
    text-align: center;
    font-family: 'Amiga Forever', sans-serif;
    background-color: white;
    color: #1b1a1a;
    width: calc(100% + 8px);
    margin-left: -8px;
    font-size: 0.8rem;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0.4rem;
    `;


const Description = styled.div`

 
   background-color: #1d1a1a !important;
   border-radius:  0px 0px 15px 15px;
   font-family: 'Amiga Forever', sans-serif !important;
   display: grid;
   text-align: left;
   font-size: 0.6rem;
   padding: 1rem;

   p{
    background-color: #1d1a1a !important;
    font-size: 0.6rem !important;
   }
    `;










function Card() {
	
	return (
    <CardDisplay>   <CardStructure>
    
    <CardStructureInside>
    
       <CardImage><img src = "https://raw.githubusercontent.com/ermsharo/cards_images_processing/main/image_%5B110%5D/0.jpeg"/></CardImage>
       <CardTitle>Charm of Invisibility: Shadow Cloak</CardTitle>
       <Description>
        
        
       <div className="nes-container with-title">
  <p className="title">Container.is-dark</p>
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>
        </Description>
    </CardStructureInside>
    
    
                </CardStructure>
                <CardAtributes>
                    
                </CardAtributes>
                </CardDisplay>
 )
}

export default Card;
