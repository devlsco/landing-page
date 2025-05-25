import { PARTICLE_CONFIG } from '@/config/particle_config';
import { memo } from 'react';

interface Particle {
  readonly id: number;
  readonly x: number;
  readonly y: number;
  readonly delay: number;
  readonly duration: number;
}

interface ParticleProps {
  particle: Particle;
  isMobile: boolean;
}

const getParticleGradient = (id: number): string => {
  const gradients = [
    'linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%)',
    'linear-gradient(180deg, #818cf8 0%, #4f46e5 100%)',
    'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)',
  ];
  return gradients[id % 3];
};

export const Particle = memo<ParticleProps>(({ particle, isMobile }) => (
  <div
    className={`absolute ${isMobile ? PARTICLE_CONFIG.size.mobile : PARTICLE_CONFIG.size.desktop} rounded-full ${isMobile ? PARTICLE_CONFIG.opacity.mobile : PARTICLE_CONFIG.opacity.desktop}`}
    style={{
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      background: getParticleGradient(particle.id),
      animation: `particle${particle.id % 3} ${particle.duration}s linear 0s infinite`,
    }}
  />
));
Particle.displayName = 'Particle';
