import { ReactNode } from 'react';

interface BackgroundImageProps {
  children: ReactNode;
  imageUrl?: string;
}

export const BackgroundImage = ({ 
  children, 
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070" 
}: BackgroundImageProps) => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity: 0.15,
        }}
      />
      {children}
    </div>
  );
};