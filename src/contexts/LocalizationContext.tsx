import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'gu';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.about': 'About',
    'nav.download': 'Download',
    
    // Hero
    'hero.title': 'Revolutionary AI-Powered Sign Language Learning',
    'hero.subtitle': 'Empowering deaf and mute students with cutting-edge technology for seamless sign language education and communication.',
    'hero.cta': 'Start Learning Today',
    'hero.download': 'Download App',
    
    // QR Code Page
    'qr.title': 'Download UniSign',
    'qr.subtitle': 'Scan the QR code below with your phone\'s camera to download UniSign directly to your device.',
    'qr.scanTitle': 'Scan to Download',
    'qr.scanDescription': 'Point your phone\'s camera at this QR code to download UniSign instantly.',
    'qr.share': 'Share',
    'qr.copyLink': 'Copy Link',
    'qr.copied': 'Copied!',
    'qr.backHome': 'Back to Home',
    
    // System Requirements
    'qr.systemReq': 'System Requirements',
    'qr.iosAndroid': 'iOS 14.0+ or Android 8.0+',
    'qr.internetReq': 'Internet connection required for AI features',
    
    // What's Included
    'qr.whatsIncluded': 'What\'s Included',
    'qr.aiLearning': 'AI-powered learning with personalized curriculum',
    'qr.signModels': '3D sign models and interactive demonstrations',
    
    // Help Section
    'qr.needHelp': 'Need Help?',
    'qr.helpDescription': 'If you\'re having trouble or have questions about UniSign, our support team is here to help. You can also explore our features and learn more about our mission.',
    'qr.exploreFeatures': 'Explore Features',
    'qr.howItWorksBtn': 'How It Works',
    'qr.aboutBtn': 'About UniSign',
    
    // Footer
    'footer.mission': 'Empowering deaf and mute communities through innovative AI-powered sign language learning. Breaking communication barriers one sign at a time.',
    'footer.accessibility': 'Built for accessibility, designed for everyone',
    'footer.quickAccess': 'Quick Access',
    'footer.learn': 'Learn',
    'footer.support': 'Support',
    'footer.contactUs': 'Contact Us',
    'footer.helpCenter': 'Help Center',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.madeWith': 'Made with',
    'footer.forCommunity': 'for the deaf and mute community',
    'footer.copyright': '© 2024 UniSign. Empowering communication through technology.',
  },
  hi: {
    // Navigation
    'nav.features': 'विशेषताएं',
    'nav.howItWorks': 'यह कैसे काम करता है',
    'nav.about': 'हमारे बारे में',
    'nav.download': 'डाउनलोड',
    
    // Hero
    'hero.title': 'क्रांतिकारी AI-संचालित सांकेतिक भाषा शिक्षा',
    'hero.subtitle': 'बधिर और मूक छात्रों को अत्याधुनिक तकनीक के साथ सशक्त बनाना।',
    'hero.cta': 'आज ही सीखना शुरू करें',
    'hero.download': 'ऐप डाउनलोड करें',
    
    // QR Code Page
    'qr.title': 'UniSign डाउनलोड करें',
    'qr.subtitle': 'UniSign को सीधे अपने डिवाइस पर डाउनलोड करने के लिए नीचे दिए गए QR कोड को अपने फोन के कैमरे से स्कैन करें।',
    'qr.scanTitle': 'डाउनलोड के लिए स्कैन करें',
    'qr.scanDescription': 'UniSign को तुरंत डाउनलोड करने के लिए अपने फोन के कैमरे को इस QR कोड पर पॉइंट करें।',
    'qr.share': 'साझा करें',
    'qr.copyLink': 'लिंक कॉपी करें',
    'qr.copied': 'कॉपी हो गया!',
    'qr.backHome': 'होम पर वापस',
    
    // System Requirements
    'qr.systemReq': 'सिस्टम आवश्यकताएं',
    'qr.iosAndroid': 'iOS 14.0+ या Android 8.0+',
    'qr.internetReq': 'AI सुविधाओं के लिए इंटरनेट कनेक्शन आवश्यक',
    
    // What's Included
    'qr.whatsIncluded': 'क्या शामिल है',
    'qr.aiLearning': 'व्यक्तिगत पाठ्यक्रम के साथ AI-संचालित शिक्षा',
    'qr.signModels': '3D साइन मॉडल और इंटरैक्टिव प्रदर्शन',
    
    // Help Section
    'qr.needHelp': 'सहायता चाहिए?',
    'qr.helpDescription': 'यदि आपको कोई समस्या है या UniSign के बारे में प्रश्न हैं, तो हमारी सहायता टीम यहां मदद के लिए है।',
    'qr.exploreFeatures': 'विशेषताएं देखें',
    'qr.howItWorksBtn': 'यह कैसे काम करता है',
    'qr.aboutBtn': 'UniSign के बारे में',
    
    // Footer
    'footer.mission': 'नवाचार AI-संचालित सांकेतिक भाषा शिक्षा के माध्यम से बधिर और मूक समुदायों को सशक्त बनाना।',
    'footer.accessibility': 'पहुंच के लिए बनाया गया, सभी के लिए डिज़ाइन किया गया',
    'footer.quickAccess': 'त्वरित पहुंच',
    'footer.learn': 'सीखें',
    'footer.support': 'सहायता',
    'footer.contactUs': 'संपर्क करें',
    'footer.helpCenter': 'सहायता केंद्र',
    'footer.privacyPolicy': 'गोपनीयता नीति',
    'footer.madeWith': 'के साथ बनाया गया',
    'footer.forCommunity': 'बधिर और मूक समुदाय के लिए',
    'footer.copyright': '© 2024 UniSign. तकनीक के माध्यम से संचार को सशक्त बनाना।',
  },
  gu: {
    // Navigation
    'nav.features': 'વિશેષતાઓ',
    'nav.howItWorks': 'તે કેવી રીતે કામ કરે છે',
    'nav.about': 'અમારા વિશે',
    'nav.download': 'ડાઉનલોડ',
    
    // Hero
    'hero.title': 'ક્રાંતિકારી AI-સંચાલિત સાંકેતિક ભાષા શિક્ષણ',
    'hero.subtitle': 'બહેરા અને મૂંગા વિદ્યાર્થીઓને અત્યાધુનિક તકનીક સાથે સશક્ત બનાવવું।',
    'hero.cta': 'આજે જ શીખવાનું શરૂ કરો',
    'hero.download': 'એપ ડાઉનલોડ કરો',
    
    // QR Code Page
    'qr.title': 'UniSign ડાઉનલોડ કરો',
    'qr.subtitle': 'UniSign ને સીધા તમારા ડિવાઇસ પર ડાઉનલોડ કરવા માટે નીચેના QR કોડને તમારા ફોનના કેમેરા સાથે સ્કેન કરો।',
    'qr.scanTitle': 'ડાઉનલોડ માટે સ્કેન કરો',
    'qr.scanDescription': 'UniSign ને તરત જ ડાઉનલોડ કરવા માટે તમારા ફોનના કેમેરાને આ QR કોડ પર પોઇન્ટ કરો।',
    'qr.share': 'શેર કરો',
    'qr.copyLink': 'લિંક કોપી કરો',
    'qr.copied': 'કોપી થયું!',
    'qr.backHome': 'હોમ પર પાછા',
    
    // System Requirements
    'qr.systemReq': 'સિસ્ટમ આવશ્યકતાઓ',
    'qr.iosAndroid': 'iOS 14.0+ અથવા Android 8.0+',
    'qr.internetReq': 'AI સુવિધાઓ માટે ઇન્ટરનેટ કનેક્શન જરૂરી',
    
    // What's Included
    'qr.whatsIncluded': 'શું સમાવેશ થાય છે',
    'qr.aiLearning': 'વ્યક્તિગત અભ્યાસક્રમ સાથે AI-સંચાલિત શિક્ષણ',
    'qr.signModels': '3D સાઇન મોડલ્સ અને ઇન્ટરેક્ટિવ પ્રદર્શન',
    
    // Help Section
    'qr.needHelp': 'મદદની જરૂર છે?',
    'qr.helpDescription': 'જો તમને કોઈ મુશ્કેલી છે અથવા UniSign વિશે પ્રશ્નો છે, તો અમારી સપોર્ટ ટીમ મદદ માટે અહીં છે।',
    'qr.exploreFeatures': 'વિશેષતાઓ જુઓ',
    'qr.howItWorksBtn': 'તે કેવી રીતે કામ કરે છે',
    'qr.aboutBtn': 'UniSign વિશે',
    
    // Footer
    'footer.mission': 'નવાચાર AI-સંચાલિત સાંકેતિક ભાષા શિક્ષણ દ્વારા બહેરા અને મૂંગા સમુદાયોને સશક્ત બનાવવું।',
    'footer.accessibility': 'સુલભતા માટે બનાવેલું, દરેક માટે ડિઝાઇન કરેલું',
    'footer.quickAccess': 'ઝડપી પહોંચ',
    'footer.learn': 'શીખો',
    'footer.support': 'સપોર્ટ',
    'footer.contactUs': 'અમારો સંપર્ક કરો',
    'footer.helpCenter': 'મદદ કેન્દ્ર',
    'footer.privacyPolicy': 'ગોપનીયતા નીતિ',
    'footer.madeWith': 'સાથે બનાવેલું',
    'footer.forCommunity': 'બહેરા અને મૂંગા સમુદાય માટે',
    'footer.copyright': '© 2024 UniSign. ટેકનોલોજી દ્વારા સંદેશાવ્યવહારને સશક્ત બનાવવું।',
  }
};

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LocalizationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    // Provide fallback values when context is not available
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: (key: string) => translations.en[key] || key
    };
  }
  return context;
};