import { Button } from "@/components/ui/button";
import { useLocalization } from "@/contexts/LocalizationContext";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLocalization();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
  ];

  const currentLang = languages.find(lang => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-sm">{currentLang.flag} {currentLang.name}</span>
          <span className="sm:hidden text-sm">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border shadow-lg z-50 min-w-[160px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`cursor-pointer hover:bg-accent flex items-center gap-3 ${
              language === lang.code ? 'bg-primary/20 text-primary' : 'text-foreground'
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};