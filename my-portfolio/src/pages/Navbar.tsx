
import {Avatar,AvatarImage,AvatarFallback} from '../components/ui/avatar'
interface NavbarProps {
    portfolioRef: React.RefObject<HTMLDivElement>; // Define the type of the ref prop
    techStackRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  }
export default function Navbar({ portfolioRef,techStackRef,contactRef }: NavbarProps){
    const scrollToPortfolio = () => {
        portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToTechStack = () => {
        techStackRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    const scrollToContactRef=()=>{
        contactRef.current?.scrollIntoView({behavior:'smooth'});
    }
  return (
    <nav className="bg-gray-900 bg-opacity-80 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 md:space-x-6">
          <a href="#about">About</a>
          <a href="#projects" onClick={scrollToPortfolio}>Projects</a>
          <a href="#techstack" onClick={scrollToTechStack}>Tech</a>
          <a href="#contacts" onClick={scrollToContactRef}>Contact</a>
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>      
        </div>
      </div>
    </nav>
  );
};