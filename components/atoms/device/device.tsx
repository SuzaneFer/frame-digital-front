import { DEVICE_TYPES_CONST } from '../../../utils/constants';
import useDeviceType from '../../../hooks/useDeviceType';

type DeviceTypes = keyof typeof DEVICE_TYPES_CONST;

interface DeviceProps {
  deviceType: DeviceTypes,
  children: JSX.Element | JSX.Element[] | null | (JSX.Element | null)[],
}

const Device = ({ deviceType, children }: DeviceProps) => {
  const currentDevice = useDeviceType();

  const deviceTypeNumber = DEVICE_TYPES_CONST[deviceType];

  if (deviceTypeNumber !== currentDevice) return null;

  return (
    <>
      {children}
    </>
  );
};

export default Device;
