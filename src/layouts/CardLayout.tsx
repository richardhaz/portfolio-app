import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="rounded-xl bg-white p-8 shadow-sm dark:bg-[#111111] md:p-12">{children}</div>
  );
};
export default CardLayout;
