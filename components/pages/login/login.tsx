import Image from 'next/image';
import { DEVICE_TYPES_CONST } from '../../../utils/constants';
import DesktopCard from '../../modules/desktopCard/desktopCard';
import LoginStyle from './login.style';
import MobileLogin from './mobileLogin/mobileLogin';
import Device from '../../atoms/device/device';

const Login = () => (
  <>
    <Device deviceType="desktop">
      <LoginStyle>
        <DesktopCard />
      </LoginStyle>
    </Device>
    <Device deviceType="mobile">
      <MobileLogin />
    </Device>
  </>
);

export default Login;