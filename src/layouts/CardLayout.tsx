import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-[#111111] sm:p-8 md:p-14">
      {children}
    </div>
  );
};
export default CardLayout;
