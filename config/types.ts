interface SocialChannel {
  readonly name: string;
  readonly platform: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly url: string;
  readonly colors: {
    readonly bg: string;
    readonly hover: string;
    readonly shadow: string;
  };
}
