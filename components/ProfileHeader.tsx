import { PROFILE_CONFIG } from '@/config/profile_config';
import Image from 'next/image';
import { memo } from 'react';

interface ProfileHeaderProps {
  isMobile: boolean;
}

export const ProfileHeader = memo<ProfileHeaderProps>(({ isMobile }) => (
  <div className="text-center space-y-2 md:space-y-4">
    <div className="relative mx-auto w-16 h-16 md:w-24 md:h-24">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-75 -m-0.5" />
      <Image
        src={PROFILE_CONFIG.logoPath}
        alt={PROFILE_CONFIG.logoAlt}
        width={isMobile ? 64 : 96}
        height={isMobile ? 64 : 96}
        className="rounded-full object-cover relative z-10"
        priority
      />
    </div>

    <div className="space-y-1">
      <h1 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent tracking-wide">
        {PROFILE_CONFIG.name}
      </h1>
      <p className="text-blue-300/80 font-medium text-sm md:text-base">
        {PROFILE_CONFIG.title}
      </p>
    </div>
  </div>
));
ProfileHeader.displayName = 'ProfileHeader';
