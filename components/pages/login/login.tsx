import Image from 'next/image';
import { DEVICE_TYPES } from '../../../utils/constants';
import DesktopCard from '../../modules/desktopCard/desktopCard';
import LoginStyle from './login.style';
import MobileLogin from './mobileLogin/mobileLogin';
import Device from '../../atoms/device/device';

const Login = () => (
  <>
    <Device deviceType={DEVICE_TYPES.desktop}>
      <LoginStyle>
        <DesktopCard />
      </LoginStyle>
    </Device>
    <Device deviceType={DEVICE_TYPES.mobile}>
      <MobileLogin />
    </Device>
  </>
);

export default Login;