import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CardLayout: FC<Props> = ({ children }) => {
  return <div className="rounded-xl bg-white p-12 shadow-sm dark:bg-[#111111]">{children}</div>;
};
export default CardLayout;
