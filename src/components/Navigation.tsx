import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocalization } from "@/contexts/LocalizationContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
// 👇 Import your logo
import Logo from "@/assets/logo.png"; // place logo.jpg inside src/assets/

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocalization();
  const location = useLocation();

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.features'), path: "/features" },
    { name: t('nav.howItWorks'), path: "/how-it-works" },
    { name: t('nav.about'), path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Smooth scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const handleNavClick = () => {
    setIsOpen(false);
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={handleNavClick}>
            <img 
              src={Logo} 
              alt="UniSign Logo" 
              className="h-6 sm:h-7 w-auto object-contain align-middle"
            />
            <span className="text-lg sm:text-xl font-bold text-primary leading-none">
              UniSign
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-2 pb-3 space-y-1 bg-background border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2.5 text-sm font-medium transition-colors hover:text-primary rounded-md ${
                    isActive(item.path) ? "text-primary bg-primary/10" : "text-muted-foreground"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2.5 border-t border-border/50 mt-2 pt-3">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
