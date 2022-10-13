import styled from "styled-components";
import Link from "next/link";

export const NavbarContainer = styled.nav`
 width: 100%;
 height: ${(props) => (props.click ? "100vh" : "80px" )};
 /* background-color: black; */
 display: flex;
 flex-direction: column;
`
export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
export const RightContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;
`;

export const NavbarInnerConatiner = styled.div`
  width: 100%;
  height:  80px;
  display: flex;
`
export const NavbarLinkContainer = styled.div`
   display: flex;
`
export const NavbarLink = styled.a`
 cursor: pointer;
 font-weight: 500;
 font-size: 15px;
 line-height: 21px;
 color: #782475;
 text-decoration: none;
 margin: 19px;

 &:hover {
  color: #000000;
  border-bottom: 1px solid #000000;
 }

   @media (max-width: 700px) {
     display: none;
  }
`
export const NavbarButton = styled.button`
  margin-top: 10px;
  position: relative;
  border:  none;
  background: linear-gradient(90deg, #902784 27.93%, #68299A 68.66%, #68299A 71.62%);
  border-radius: 10px;
  width: 180px;
  height: 60px;
  font-weight: 500px;
  font-size: 14px;
  line-height: 60px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  transition: all 200ms ease-out;

  @media (max-width: 700px) {
     margin-bottom: -20px;
  }
`
export const NavbarLinkExtended = styled.a`
 cursor: pointer;
 font-weight: 500;
 font-size: 15px;
 line-height: 21px;
 color: #782475;
 text-decoration: none;
 margin: 19px;
`
export const NavbarLinkRightContainer = styled.div`
 display: flex;
 margin-top: 10px;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
     display: none;
  }
`

export const NavbarExtendedConatiner = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 @media (min-width: 700px) {
     display: none;
 }

`
