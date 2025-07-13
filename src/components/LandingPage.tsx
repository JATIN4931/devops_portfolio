'use client';

import ProfileCard from './ProfileCard';

interface LandingPageProps {
  onNavigateToPortfolioAction: () => void;
}

export default function LandingPage({ onNavigateToPortfolioAction }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center flex-col">
      <ProfileCard />
      <button
        className="mt-8 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg"
        onClick={onNavigateToPortfolioAction}
      >
        Go to Portfolio
      </button>
    </div>
  );
} 