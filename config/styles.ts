export const STYLES = {
  container: 'min-h-screen w-full relative overflow-hidden',
  background: 'bg-gradient-to-br from-black via-blue-950 to-black',
  centerFlex: 'flex items-center justify-center',
  card: 'bg-black/30 backdrop-blur-3xl border border-blue-500/20 rounded-2xl md:rounded-3xl',
  shadow: 'shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40',
  transition: 'transition-all duration-500 ease-out hover:scale-[1.01]',
  gradientText:
    'bg-gradient-to-r from-white via-blue-200 to-blue-100 bg-clip-text text-transparent',
} as const;
