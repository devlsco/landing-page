import { Swords } from 'lucide-react';
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaPage4,
  FaSquareXTwitter,
  FaTiktok,
  FaTwitch,
  FaYoutube,
} from 'react-icons/fa6';

export const SOCIAL_CHANNELS: readonly SocialChannel[] = [
  {
    name: 'LsCo',
    platform: 'twitch',
    icon: FaTwitch,
    url: 'https://twitch.tv/lsco',
    colors: {
      bg: 'from-[#9146FF] to-[#6441A5]',
      hover: 'hover:from-[#9146FF] hover:to-[#6441A5]',
      shadow: 'shadow-[#9146FF]/25',
    },
  },
  {
    name: "LsCo 'Tools",
    platform: 'discord',
    icon: FaDiscord,
    url: 'https://discord.gg/aSBsBSDmGh',
    colors: {
      bg: 'from-[#5865F2] to-[#4752C4]',
      hover: 'hover:from-[#5865F2] hover:to-[#4752C4]',
      shadow: 'shadow-[#5865F2]/25',
    },
  },
  {
    name: 'devLsCo',
    platform: 'twitter',
    icon: FaSquareXTwitter,
    url: 'https://x.com/devlsco',
    colors: {
      bg: 'from-[#000000] to-[#14171A]',
      hover: 'hover:from-[#000000] hover:to-[#14171A]',
      shadow: 'shadow-black/25',
    },
  },
  {
    name: 'devLsCo',
    platform: 'github',
    icon: FaGithub,
    url: 'https://x.com/devlsco',
    colors: {
      bg: 'from-[#000000] to-[#14171A]',
      hover: 'hover:from-[#000000] hover:to-[#14171A]',
      shadow: 'shadow-black/25',
    },
  },
  {
    name: 'Mod Tool',
    platform: 'website',
    icon: Swords,
    url: 'https://mod-tool.lsco.dev',
    colors: {
      bg: 'from-[#87ceeb] to-[#14171A]',
      hover: 'hover:from-[#87ceeb] hover:to-[#14121A]',
      shadow: 'shadow-black/25',
    },
  },
] as const;
