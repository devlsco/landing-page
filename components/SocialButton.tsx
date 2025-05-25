import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { memo } from 'react';

interface SocialButtonProps {
  channel: SocialChannel;
  index: number;
}

export const SocialButton = memo<SocialButtonProps>(({ channel, index }) => (
  <Button
    variant="outline"
    size="lg"
    className={`w-full h-14 md:h-16 bg-gradient-to-r ${channel.colors.bg} ${channel.colors.hover} transition-all duration-300 border-0 text-white hover:text-white font-bold shadow-2xl ${channel.colors.shadow} transform-gpu transition duration-500 ease-out will-change-transform group rounded-xl md:rounded-2xl relative overflow-hidden hover:shadow-[0_0_25px_2px_rgba(255,255,255,0.1)] hover:brightness-110`}
    asChild
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <a
      href={channel.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${channel.name} on ${channel.platform}`}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center justify-between w-full px-2 md:px-3">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="p-1.5 md:p-2 bg-white/20 rounded-lg md:rounded-xl transition-transform duration-300 group-hover:scale-110">
            <channel.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="text-left">
            <div className="font-bold text-sm md:text-lg">{channel.name}</div>
          </div>
        </div>
        <div className="text-right">
          <ExternalLink className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 ease-out group-hover:scale-110" />
        </div>
      </div>
    </a>
  </Button>
));
SocialButton.displayName = 'SocialButton';
