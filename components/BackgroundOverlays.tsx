import { memo } from 'react';

export const BackgroundOverlays = memo(() => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(120,119,198,0.2)_0%,_transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,119,198,0.2)_0%,_transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(120,200,255,0.1)_0%,_transparent_70%)]" />
  </div>
));
BackgroundOverlays.displayName = 'BackgroundOverlays';
