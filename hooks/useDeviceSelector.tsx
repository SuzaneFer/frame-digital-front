import { DEVICE_TYPES_CONST } from "../utils/constants";
import useDeviceType from "./useDeviceType";


export default function useDeviceSelector(valueIfMobile: any, valueIfDesktop: any) {
  const deviceType = useDeviceType();

  if (deviceType === DEVICE_TYPES_CONST.mobile) {
    return valueIfMobile;
  }
  return valueIfDesktop;
}

export const useDeviceSelectorNoDefault = (valueIfMobile: any, valueIfDesktop: any) => {
  const deviceType = useDeviceType();

  if (deviceType === DEVICE_TYPES_CONST.mobile) {
    return valueIfMobile;
  }
  if (deviceType === DEVICE_TYPES_CONST.desktop) {
    return valueIfDesktop;
  }
  return null;
};
