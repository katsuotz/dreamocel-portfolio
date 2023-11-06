'use client'

import Banner from "@/components/home/banner";
import TeamExperience from "@/components/home/team-experience";
import Achievement from "@/components/home/achievement";
import Footer from "@/components/home/footer";
import BackToTop from "@/components/home/back-to-top";
import Trivia from "@/components/home/trivia";
import JoinDiscord from "@/components/home/join-discord";
import YoutubeContent from "@/components/home/youtube-content";
import SignatureHero from "@/components/home/signature-hero";
import Moment from "@/components/home/moment";
import Image from "next/image";
// import {useEffect, useState} from "react";

export default function Home() {

  /*  disable mouse animation */

  // const [position, setPosition] = useState({ x: 0, y: 0 });
  //
  // let mousePosition = {
  //   x: 0,
  //   y: 0
  // }
  //
  // let ballPosition = {
  //   x: 0,
  //   y: 0
  // }
  //
  // let speed = 0.05
  //
  // const animate = () => {
  //   let distX = mousePosition.x - ballPosition.x;
  //   let distY = mousePosition.y - ballPosition.y;
  //
  //   ballPosition.x = ballPosition.x + (distX * speed)
  //   ballPosition.y = ballPosition.y + (distY * speed)
  //
  //   updatePosition()
  //
  //   requestAnimationFrame(animate)
  // }
  //
  // useEffect(() => {
  //   const handleMouseMove = async (e:MouseEvent) => {
  //     mousePosition.x = e.clientX
  //     mousePosition.y = e.clientY
  //   };
  //
  //   window.addEventListener('mousemove', handleMouseMove);
  //
  //   animate()
  //
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);
  //
  // const updatePosition = () => {
  //   setPosition({
  //     x: ballPosition.x,
  //     y: ballPosition.y,
  //   })
  // }

  return (
    <div>
      {/*<div*/}
      {/*  className="hidden sm:block w-[30px] h-[30px] z-[100] border border-white fixed rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none animate"*/}
      {/*  style={{*/}
      {/*    left: position.x + 'px',*/}
      {/*    top: position.y + 'px',*/}
      {/*  }}*/}
      {/*/>*/}
      <Banner/>
      <Image src="/bg-2.jpg" alt="" unoptimized={true} width={1920} height={1070} className="absolute w-full mt-[-350px]"/>
      <TeamExperience/>
      <Achievement/>
      <SignatureHero/>
      <YoutubeContent/>
      <Moment/>
      <Trivia/>
      <JoinDiscord/>
      <Footer/>
      <Image src="/bg-2.jpg" alt="" unoptimized={true} width={1920} height={1070} className="absolute bottom-0 -scale-y-100 h-[500px] w-full object-cover object-bottom -z-10"/>
      <BackToTop/>
    </div>
  )
}
