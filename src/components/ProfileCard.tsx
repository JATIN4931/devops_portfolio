"use client";

import React, { useRef } from "react";
import Image from 'next/image';

const PROFILE = {
  name: "Jatin Kumar",
  title: "DevOps Engineer",
  avatarUrl: "/pr.png",
  handle: "WELCOME TO MY PORTFOLIO",
};

const ProfileCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 18; // increased sensitivity
    const rotateY = ((x - centerX) / centerX) * 18;
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
       className="relative w-full max-w-sm sm:max-w-md h-[520px] sm:h-[650px] md:w-[380px] md:h-[520px] rounded-4xl bg-gradient-to-br from-[#181c2a] via-[#000000] to-[#181c2a] border border-white-400/0 shadow-2xl flex flex-col items-center overflow-hidden transition-all duration-300"
      style={{ boxShadow: '0 0 32px 1 #fff' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Name and Title */}
      <div className="w-500 h-25 pt-3 pb-4 flex flex-col items-center z-10 relative">
        {/* Header gradient overlay from top */}
        <div className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-b from-black/60 via-black/40 to-transparent pointer-events-none z-5" />
        <h2 className="text-3xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg text-center relative z-10">
          {PROFILE.name}
        </h2>
        <p className="text-lg md:text-lg text-gray-300 font-medium drop-shadow text-center relative z-10">
          {PROFILE.title}
        </p>
      </div>
      {/* Large Profile Image filling lower half */}
      <div className="relative w-full flex-1 flex items-end justify-center z-0">
        <Image src={PROFILE.avatarUrl} alt={PROFILE.name + ' avatar'} width={550} height={150} className="w-full h-[150%] object-cover object-top rounded-b-3xl" quality={100} priority />
        {/* Optional overlay for effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#23243a]/100 via-transparent to-transparent pointer-events-none" />
      </div>
      {/* Glassmorphic Footer overlays bottom of card, centered, with upward fade, and same margin as image */}
      <div className="absolute left-0 right-0 bottom-0 flex items-center justify-left bg-gradient-to-t from-black/100 via-black/60 to-transparent  border-white/0 rounded-b-3xl p-4 z-200">
        {/* Fading effect on top side of footer */}
        <div className="absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-transparent via-black/50 to-transparent pointer-events-none z-10" />
        <span className="text-white/90 font-semibold text-base text-center w-full block z-20 relative">{PROFILE.handle}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
