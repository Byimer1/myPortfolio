import { ReactNode } from 'react';

interface BackgroundImageProps {
  children: ReactNode;
  imageUrl: string;
}

export const BackgroundImage = ({ children, imageUrl }: BackgroundImageProps) => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity: 0.15,
        }}
      />
      {children}
    </div>
  );
};