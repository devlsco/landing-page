'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PARTICLE_CONFIG } from '@/config/particle_config';
import { SOCIAL_CHANNELS } from '@/config/social_channels';
import { STYLES } from '@/config/styles';
import { SocialButton } from '@/components/SocialButton';
import { Particle } from '@/components/Particle';
import { BackgroundOverlays } from '@/components/BackgroundOverlays';
import { MouseFollower } from '@/components/MouseFollower';
import { ProfileHeader } from '@/components/ProfileHeader';

interface Particle {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly delay: number;
  readonly duration: number;
}

interface MousePosition {
  readonly x: number;
  readonly y: number;
}

const generateParticles = (count: number): Particle[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 8,
  }));

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = isMobile ? PARTICLE_CONFIG.mobile : PARTICLE_CONFIG.desktop;
    setParticles(generateParticles(particleCount));
  }, [isMobile]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    },
    [isMobile],
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();

    window.addEventListener('resize', checkMobile, { passive: true });

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, isMobile]);

  const particleElements = useMemo(
    () =>
      particles.map((particle) => (
        <Particle key={particle.id} particle={particle} isMobile={isMobile} />
      )),
    [particles, isMobile],
  );

  const socialButtons = useMemo(
    () =>
      SOCIAL_CHANNELS.map((channel, index) => (
        <SocialButton
          key={`${channel.platform}-${channel.name}-${index}`}
          channel={channel}
          index={index}
        />
      )),
    [],
  );

  return (
    <div className={`${STYLES.container} ${STYLES.background}`}>
      <BackgroundOverlays />
      <MouseFollower position={mousePosition} isMobile={isMobile} />
      {particleElements}
      <div className={`relative z-10 min-h-screen ${STYLES.centerFlex} p-3 md:p-6`}>
        <Card
          className={`w-full max-w-sm md:max-w-lg ${STYLES.card} ${STYLES.shadow} transform-gpu transition duration-500 ease-out will-change-transform`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5 rounded-2xl md:rounded-3xl" />

          <CardContent className="relative p-3 md:p-6 space-y-4 md:space-y-6">
            <ProfileHeader isMobile={isMobile} />

            <nav
              className="space-y-3 md:space-y-4"
              role="navigation"
              aria-label="Social media links"
            >
              {socialButtons}
            </nav>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
