import LogoSN from '../../components/LogoSN/LogoSN';
import WhiteLine from '../WhiteLine/WhiteLine';
import LoupeContainer from '../LoupeContainer/LoupeContainer';
import TitleNavbar from '../TitleNavbar/TitleNavbar';

export default function Navbar() {
  return (
    <div className='w-full flex h-20 bg-red-400 shadow-xl fixed top-0 z-150'>
      <LogoSN />
      <WhiteLine />
      <LoupeContainer />
      <TitleNavbar />
    </div>
  );
}
