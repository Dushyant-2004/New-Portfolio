import { Home, Briefcase, User, Settings, Mail, Sparkles } from 'lucide-react';
import { AnimeNavBar } from '@/components/ui/anime-navbar';

const navItems = [
  { name: 'Home', url: '#', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Work', url: '#work', icon: Briefcase },
  { name: 'Skills', url: '#capabilities', icon: Sparkles },
  { name: 'Process', url: '#process', icon: Settings },
  { name: 'Achievements', url: '#achievements', icon: Sparkles },
  { name: 'Contact', url: '#contact', icon: Mail },
];

export function Navigation() {
  return <AnimeNavBar items={navItems} defaultActive="Home" />;
}
