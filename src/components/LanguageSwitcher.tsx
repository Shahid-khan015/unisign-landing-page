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
          size="sm"
          className="flex items-center gap-2 border-white/30 text-white hover:bg-white/20 hover:text-white bg-white/10 backdrop-blur-sm transition-all duration-200 hover:border-white/50"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-sm font-medium">{currentLang.flag} {currentLang.name}</span>
          <span className="sm:hidden text-base">{currentLang.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl z-50 min-w-[160px] p-1">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`cursor-pointer hover:bg-accent/80 rounded-md m-1 flex items-center gap-3 py-2.5 px-3 transition-colors ${
              language === lang.code ? 'bg-primary/20 text-primary font-medium' : 'text-foreground hover:text-foreground'
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="font-medium">{lang.name}</span>
            {language === lang.code && (
              <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};