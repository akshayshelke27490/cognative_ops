import React from 'react';

interface CognitiveOpsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const CognitiveOpsLogo: React.FC<CognitiveOpsLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const emblemSizes = {
    sm: { width: 32, height: 26 },
    md: { width: 38, height: 32 },
    lg: { width: 54, height: 44 },
  };

  const { width, height } = emblemSizes[size] || emblemSizes.md;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* 3-Tier Architectural Strata Emblem */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="strata-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#00A3FF" />
          </linearGradient>
          <filter id="strata-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Top Strata Pill with glow and right node */}
        <rect
          x="25"
          y="14"
          width="46"
          height="13"
          rx="6.5"
          fill="url(#strata-cyan-grad)"
          filter="url(#strata-glow)"
        />
        <circle cx="62" cy="20.5" r="2.5" fill="#FFFFFF" />

        {/* Angled Vector Beam */}
        <path
          d="M 33 60 L 46 22"
          stroke="#00F0FF"
          strokeWidth="2"
          strokeDasharray="2.5 2.5"
          strokeLinecap="round"
        />
        {/* Vector Chevron Arrow */}
        <path
          d="M 77 14 L 85 20.5 L 77 27"
          stroke="#00F0FF"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Middle Strata (Charcoal left + Cyan gradient right) */}
        <rect
          x="13"
          y="34"
          width="68"
          height="13"
          rx="6.5"
          fill="#182030"
          stroke="#28354D"
          strokeWidth="1"
        />
        <circle cx="24" cy="40.5" r="2.5" fill="#6366F1" />
        <rect
          x="34"
          y="34"
          width="47"
          height="13"
          rx="6.5"
          fill="url(#strata-cyan-grad)"
        />

        {/* Bottom Strata (Cyan gradient left + Charcoal right with cyan node) */}
        <rect
          x="3"
          y="54"
          width="88"
          height="13"
          rx="6.5"
          fill="#131A26"
          stroke="#222E42"
          strokeWidth="1"
        />
        <rect
          x="3"
          y="54"
          width="38"
          height="13"
          rx="6.5"
          fill="url(#strata-cyan-grad)"
        />
        <circle cx="76" cy="60.5" r="2.5" fill="#00F0FF" />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center text-lg font-bold tracking-tight leading-none text-[#dbfcff]">
          <span>Cognitive</span>
          <span className="text-[#00dbe9]">Ops</span>
        </div>
        {showSubtitle ? (
          <span className="text-[9px] font-mono tracking-wider text-[#b9cacb] mt-1 leading-none">
            Websites • CRM • Smart PM
          </span>
        ) : null}
      </div>
    </div>
  );
};
