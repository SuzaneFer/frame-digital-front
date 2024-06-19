import Image from "next/image";
import Button from "../../../atoms/button/button";
import MobileLoginStyle from "./mobileLogin.style";
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { Typography } from "@mui/material";
interface MobileLoginProps {

}

const MobileLogin = ({

}: MobileLoginProps) => (
  <MobileLoginStyle>
    <div className="header-card">
      <Image
        width={96}
        height={76}
        src={'/assets/logo-adm.svg'}
        alt="logo-adm"
      />
    </div>
    <div className="content-card">
      <Typography variant="h1" component="h1">
        Frame Digital
      </Typography>
      <Typography variant="h2" component="h2" sx={{maxWidth: '20.5rem'}}>
        Fixe e acompanhe suas fixações mensais de maneira rápida e eficiente
      </Typography>
      <Button 
        label='Entrar com a Microsoft'
        icon={MicrosoftIcon}
      />
    </div>
  </MobileLoginStyle>
);

MobileLogin.defaultProps = {
  disabled: false,
  buttonType: 'button',
  onClick: null,
  className: '',
  icon: undefined,
  loading: false,
};

export default MobileLogin;
