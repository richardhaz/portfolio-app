import {
  RiFileList2Line,
  RiHome8Line,
  RiMoonLine,
  RiTerminalBoxLine,
  RiUser3Line
} from 'react-icons/ri';

interface Props {
  icon: string;
}

const iconStyle = 'text-2xl';

const IconResolver: React.FC<Props> = ({ icon }) => {
  switch (icon) {
    case 'RiFileList2Line': {
      return <RiFileList2Line className={iconStyle} />;
    }
    case 'RiHome8Line': {
      return <RiHome8Line className={iconStyle} />;
    }
    case 'RiTerminalBoxLine': {
      return <RiTerminalBoxLine className={iconStyle} />;
    }
    case 'RiMoonLine': {
      return <RiMoonLine className={iconStyle} />;
    }
    default: {
      return <RiUser3Line className={iconStyle} />;
    }
  }
};
export default IconResolver;
