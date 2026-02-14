import { Home, Briefcase, User, Settings, Mail, Sparkles } from 'lucide-react';
import { AnimeNavBar } from '@/components/ui/anime-navbar';

const navItems = [
  { name: 'Home', url: '#', icon: Home },
  { name: 'Work', url: '#work', icon: Briefcase },
  { name: 'About', url: '#about', icon: User },
  { name: 'Skills', url: '#capabilities', icon: Sparkles },
  { name: 'Process', url: '#process', icon: Settings },
  { name: 'Contact', url: '#contact', icon: Mail },
];

export function Navigation() {
  return <AnimeNavBar items={navItems} defaultActive="Home" />;
}
