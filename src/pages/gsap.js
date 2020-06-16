import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import Logo from "../static/logoCodetain.svg";
import LogoPC from "../static/logoPC.svg";

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #fff;
  flex-flow: column;
`;

export default function Animations() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements, p] = wrapper.current.children;
    const firstLetter = elements.getElementById("firstletter");
    const lastLetter = elements.getElementById("lastletter");
    const space = elements.getElementById("space");
    // const span = p.getElementsByTagName('span');
    //console.log('getbytag',span);
    gsap.set([firstLetter, space, lastLetter], { autoAlpha: 0 });
    gsap.set(space, { transformOrigin: '50% 100%' });
    const tl = gsap.timeline({ defaults: { ease: "power3.input" } });

    tl.fromTo(firstLetter, {x: '-=250'}, {duration: 1.5, autoAlpha: 1, x: '+=150'})
      .fromTo(space, {x: '-=50'}, {duration: .5, autoAlpha: 1, scaleX: 2})
      .fromTo(lastLetter, {x: '+=250'}, {duration: .5, autoAlpha: 1, x: '-=250'})
  }, []);

  return (
    <StyledContainer ref={wrapper}>
      <Logo />
      <LogoPC />
    </StyledContainer>
  );
}
