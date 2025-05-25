import { memo } from 'react';

interface MousePosition {
  readonly x: number;
  readonly y: number;
}

interface MouseFollowerProps {
  position: MousePosition;
  isMobile: boolean;
}

export const MouseFollower = memo<MouseFollowerProps>(({ position, isMobile }) => {
  if (isMobile) return null;

  return (
    <div
      className="fixed w-64 md:w-96 h-64 md:h-96 pointer-events-none z-0 opacity-20 blur-3xl transition-all duration-500 ease-out will-change-transform"
      style={{
        background:
          'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.3) 50%, transparent 100%)',
        transform: `translate(${position.x - 192}px, ${position.y - 192}px)`,
      }}
    />
  );
});
MouseFollower.displayName = 'MouseFollower';
