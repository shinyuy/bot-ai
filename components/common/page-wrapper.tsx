import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-grow flex-col space-y-2 bg-white px-4 pb-4 pt-2 text-black">
      {children}
    </div>
  );
}
