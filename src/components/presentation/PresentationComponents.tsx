import { ReactNode } from 'react';

export interface SlideProps {
  children: ReactNode;
  className?: string;
}

export function Slide({ children, className = "" }: SlideProps) {
  return (
    <div className={`slide-content-container w-full flex flex-col items-center relative px-6 py-6 overflow-y-auto scroll-smooth ${className}`} style={{ height: 'calc(100vh - 64px)' }}>
      <div className="w-full max-w-7xl flex-1 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}

