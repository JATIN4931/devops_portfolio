import React, { useRef } from "react";
import { useRouter } from 'next/navigation';

const PROFILE = {
  name: "Jatin Thakur",
  title: "DevOps Engineer",
  avatarUrl: "/pr.jpg",
  handle: "welcome to my portfolio",
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
      className="relative w-[450px] h-[500px] md:w-[430px] md:h-[600px] rounded-4xl bg-gradient-to-br from-[#181c2a] via-[#23243a] to-[#181c2a] border border-white-400/0 shadow-2xl flex flex-col items-center overflow-hidden transition-all duration-300"
      style={{ boxShadow: '0 0 32px 1 #fff' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Name and Title */}
      <div className="w-115 h-25 pt-3 pb-4 flex flex-col items-start z-10 pl-4 relative">
        {/* Header gradient overlay from left */}
        <div className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-black/60 via-black/40 via-black/40 to-transparent pointer-events-none z-5" />
        <h2 className="text-3xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg text-left relative z-10">
          {PROFILE.name}
        </h2>
        <p className="text-lg md:text-lg text-gray-300 font-medium drop-shadow text-left relative z-10">
          {PROFILE.title}
        </p>
      </div>
      {/* Large Profile Image filling lower half */}
      <div className="relative w-full flex-1 flex items-end justify-center z-0">
        <img
          src={PROFILE.avatarUrl}
          alt={PROFILE.name + ' avatar'}
          className="w-full h-[150%] object-cover object-top rounded-b-3xl filter grayscale"
          style={{ position: 'absolute', left: 0, bottom: 0, right: 0 }}
          loading="lazy"
          onError={e => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
        {/* Optional overlay for effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#23243a]/80 via-transparent to-transparent pointer-events-none" />
      </div>
      {/* Glassmorphic Footer overlays bottom of card, centered, with upward fade, and same margin as image */}
      <div className="absolute left-0 right-0 bottom-0 flex items-center justify-left bg-gradient-to-t from-black/100 via-black/60 to-transparent  border-white/0 rounded-b-3xl p-4 z-200">
        {/* Fading effect on top side of footer */}
        <div className="absolute left-0 right-0 top-0 h-8 bg-gradient-to-b from-transparent via-black/15 to-transparent pointer-events-none z-10" />
        <span className="text-white/90 font-semibold text-base text-center w-full block z-20 relative">{PROFILE.handle}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
