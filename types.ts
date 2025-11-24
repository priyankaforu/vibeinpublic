export interface Member {
  name: string;
  role: string;
  avatar: string;
  streak: number;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  reversed?: boolean;
}
