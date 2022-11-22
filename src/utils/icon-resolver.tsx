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

const IconResolver: React.FC<Props> = ({ icon }) => {
  switch (icon) {
    case 'AiOutlineHome': {
      return <AiOutlineHome />;
    }
    case 'AiOutlineUser': {
      return <AiOutlineUser />;
    }
    case 'AiOutlineFileText': {
      return <AiOutlineFileText />;
    }
    case 'AiOutlineFundProjectionScreen': {
      return <AiOutlineFundProjectionScreen />;
    }
    default: {
      return <RiContactsBookLine />;
    }
  }
};
export default IconResolver;
