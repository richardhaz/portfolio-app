import {
  AiOutlineFileText,
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai';
import { RiContactsBookLine } from 'react-icons/ri';

interface Props {
  icon: string;
}

const iconStyle = '';

const IconResolver: React.FC<Props> = ({ icon }) => {
  switch (icon) {
    case 'AiOutlineHome': {
      return <AiOutlineHome className={iconStyle} />;
    }
    case 'AiOutlineUser': {
      return <AiOutlineUser className={iconStyle} />;
    }
    case 'AiOutlineFileText': {
      return <AiOutlineFileText className={iconStyle} />;
    }
    case 'AiOutlineFundProjectionScreen': {
      return <AiOutlineFundProjectionScreen className={iconStyle} />;
    }
    default: {
      return <RiContactsBookLine className={iconStyle} />;
    }
  }
};
export default IconResolver;
