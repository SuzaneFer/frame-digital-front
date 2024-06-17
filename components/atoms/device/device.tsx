import { DEVICE_TYPES } from '../../../utils/constants';
import useDeviceType from '../../../hooks/useDeviceType';

interface DeviceProps {
  deviceType: DEVICE_TYPES,
  children: JSX.Element | JSX.Element[] | null | (JSX.Element | null)[],
}

const Device = ({ deviceType, children }: DeviceProps) => {
  const currentDevice = useDeviceType();

  if (deviceType !== currentDevice) return null;

  return (
    <>
      {children}
    </>
  );
};

export default Device;
