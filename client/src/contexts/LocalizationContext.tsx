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
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.about': 'About',
    'nav.download': 'Download',
    
    // Landing Page
    'landing.whyChoose': 'Why Choose UniSign?',
    'landing.learnEffectively': 'Learn Effectively',
    'landing.learnDescription': 'Interactive lessons with 3D models and real-time feedback',
    'landing.exploreFeatures': 'Explore Features',
    'landing.builtForEveryone': 'Built for Everyone',
    'landing.builtDescription': 'Designed specifically for deaf and mute students',
    'landing.ourMission': 'Our Mission',
    'landing.getStartedToday': 'Get Started Today',
    'landing.getStartedDescription': 'Scan QR code to download UniSign instantly',
    'landing.downloadNow': 'Download Now',
    
    // Hero
    'hero.title': 'Breaking Barriers with',
    'hero.titleHighlight': 'Sign Language', 
    'hero.subtitle': 'Empower deaf and mute students with UniSign - the revolutionary app that makes sign language accessible through AI-powered learning, 3D models, and interactive experiences.',
    'hero.download': 'Download UniSign',
    'hero.learnMore': 'Learn More',
    
    // Features
    'features.title': 'Powerful Features',
    'features.subtitle': 'Experience the future of sign language learning with our innovative features designed to make learning accessible, engaging, and effective for everyone.',
    'features.3dModels': '3D Sign Models',
    'features.3dDesc': 'Interactive 3D models that show precise hand movements and positioning for perfect sign language learning.',
    'features.textToSign': 'Text-to-Sign AI',
    'features.textToSignDesc': 'Revolutionary AI that converts text into sign language animations, making communication seamless and instant.',
    'features.worldGame': 'World Game Vocabulary',
    'features.worldGameDesc': 'Explore sign language from different countries and cultures through engaging gamified vocabulary challenges.',
    'features.quizzes': 'Interactive Quizzes',
    'features.quizzesDesc': 'Multiple quiz formats including speed challenges, memory games, and practical signing assessments.',
    'features.whyChoose': 'Why Choose UniSign?',
    'features.digitalWhiteboard': 'Digital Whiteboard',
    'features.digitalWhiteboardDesc': 'Practice sign language with our interactive whiteboard and get instant feedback on your hand movements.',
    'features.gamifiedLearning': 'Gamified Learning',
    'features.gamifiedDesc': 'Level up your skills with achievement badges, leaderboards, and fun challenges.',
    'features.aiRecognition': 'AI-Powered Recognition',
    'features.aiRecognitionDesc': 'Advanced computer vision technology that understands and evaluates your signing accuracy.',
    'features.curriculum': 'Comprehensive Curriculum',
    'features.curriculumDesc': 'From basic alphabet to complex conversations, learn at your own pace with structured lessons.',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Getting started with UniSign is simple and intuitive. Follow these easy steps to begin your sign language learning journey today.',
    'howItWorks.step1': 'Download UniSign',
    'howItWorks.step1Desc': 'Get the app from App Store or Google Play Store. Quick setup in less than 2 minutes.',
    'howItWorks.step2': 'Create Your Profile',
    'howItWorks.step2Desc': 'Set up your personalized learning profile and choose your preferred learning path.',
    'howItWorks.step3': 'Start Learning',
    'howItWorks.step3Desc': 'Begin with interactive lessons, 3D models, and AI-powered feedback systems.',
    'howItWorks.step4': 'Track Progress',
    'howItWorks.step4Desc': 'Monitor your achievements, earn badges, and connect with the learning community.',
    'howItWorks.ready': 'Ready to Get Started?',
    'howItWorks.readyDesc': 'Join thousands of students who are already learning sign language with UniSign. Start your journey today and break communication barriers.',
    'howItWorks.watchDemo': 'Watch Demo',
    
    // About
    'about.title': 'About UniSign',
    'about.subtitle': 'UniSign is more than just an app - it\'s a movement towards breaking communication barriers. Our mission is to empower deaf and mute students with cutting-edge technology that makes sign language learning accessible, engaging, and effective.',
    'about.accessibilityFirst': 'Accessibility First',
    'about.accessibilityDesc': 'We believe everyone deserves equal access to communication and learning opportunities.',
    'about.communityDriven': 'Community Driven',
    'about.communityDesc': 'Built by and for the deaf and mute community with continuous feedback and improvement.',
    'about.goalOriented': 'Goal Oriented',
    'about.goalDesc': 'Structured learning paths that help students achieve their sign language goals effectively.',
    'about.excellence': 'Excellence',
    'about.excellenceDesc': 'Award-winning technology that sets new standards in accessibility education.',
    'about.comingSoon': 'Coming Soon',
    'about.comingSoonDesc': 'UniSign is currently in development. We\'re working hard to bring you the most innovative sign language learning experience. Download our website and stay tuned for the official launch!',
    
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
    'qr.digitalWhiteboard': 'Digital whiteboard for practice',
    'qr.vocabularyPractice': 'Gujarati & English vocabulary practice',
    'qr.signToText': 'Sign to text and vice versa functionality',
    'qr.mathsLearning': 'Mathematics learning section',
    'qr.realTimeRecognition': 'Real-time sign language recognition and feedback',
    
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

    // Privacy Policy
    'privacy.backHome': 'Back to Home',
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated: December 2024',
    'privacy.introduction': 'Introduction',
    'privacy.introText1': 'UniSign ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our sign language learning application and related services.',
    'privacy.introText2': 'By using UniSign, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our application.',
    'privacy.infoWeCollect': 'Information We Collect',
    'privacy.personalInfo': 'Personal Information',
    'privacy.learningData': 'Learning Data',
    'privacy.technicalInfo': 'Technical Information',
    'privacy.howWeUse': 'How We Use Your Information',
    'privacy.dataSharing': 'Data Sharing and Disclosure',
    'privacy.dataSecurity': 'Data Security',
    'privacy.yourRights': 'Your Rights and Choices',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.features': 'विशेषताएं',
    'nav.howItWorks': 'यह कैसे काम करता है',
    'nav.about': 'हमारे बारे में',
    'nav.download': 'डाउनलोड',
    
    // Landing Page
    'landing.whyChoose': 'UniSign क्यों चुनें?',
    'landing.learnEffectively': 'प्रभावी रूप से सीखें',
    'landing.learnDescription': '3D मॉडल और रियल-टाइम फीडबैक के साथ इंटरैक्टिव पाठ',
    'landing.exploreFeatures': 'सुविधाएं देखें',
    'landing.builtForEveryone': 'सभी के लिए बनाया गया',
    'landing.builtDescription': 'विशेष रूप से बधिर और मूक छात्रों के लिए डिज़ाइन किया गया',
    'landing.ourMission': 'हमारा मिशन',
    'landing.getStartedToday': 'आज ही शुरुआत करें',
    'landing.getStartedDescription': 'UniSign तुरंत डाउनलोड करने के लिए QR कोड स्कैन करें',
    'landing.downloadNow': 'अभी डाउनलोड करें',
    
    // Hero
    'hero.title': 'बाधाओं को तोड़ना',
    'hero.titleHighlight': 'सांकेतिक भाषा',
    'hero.subtitle': 'UniSign के साथ बधिर और मूक छात्रों को सशक्त बनाएं - यह क्रांतिकारी ऐप AI-संचालित शिक्षा, 3D मॉडल और इंटरैक्टिव अनुभवों के माध्यम से सांकेतिक भाषा को सुलभ बनाता है।',
    'hero.download': 'UniSign डाउनलोड करें',
    'hero.learnMore': 'और जानें',
    
    // Features
    'features.title': 'शक्तिशाली सुविधाएं',
    'features.subtitle': 'सांकेतिक भाषा सीखने के भविष्य का अनुभव करें हमारी नवाचार सुविधाओं के साथ जो सीखने को सुलभ, आकर्षक और प्रभावी बनाने के लिए डिज़ाइन की गई हैं।',
    'features.3dModels': '3D साइन मॉडल',
    'features.3dDesc': 'इंटरैक्टिव 3D मॉडल जो सटीक हाथ की गतिविधियों और स्थिति दिखाते हैं परफेक्ट साइन लैंग्वेज सीखने के लिए।',
    'features.textToSign': 'टेक्स्ट-टू-साइन AI',
    'features.textToSignDesc': 'क्रांतिकारी AI जो टेक्स्ट को साइन लैंग्वेज एनीमेशन में परिवर्तित करता है, संचार को निर्बाध और तत्काल बनाता है।',
    'features.worldGame': 'वर्ल्ड गेम शब्दावली',
    'features.worldGameDesc': 'विभिन्न देशों और संस्कृतियों की साइन लैंग्वेज का पता लगाएं आकर्षक गेमिफाइड शब्दावली चुनौतियों के माध्यम से।',
    'features.quizzes': 'इंटरैक्टिव क्विज़',
    'features.quizzesDesc': 'कई क्विज़ प्रारूप जिनमें स्पीड चैलेंज, मेमोरी गेम्स और व्यावहारिक साइनिंग आकलन शामिल हैं।',
    'features.whyChoose': 'UniSign क्यों चुनें?',
    'features.digitalWhiteboard': 'डिजिटल व्हाइटबोर्ड',
    'features.digitalWhiteboardDesc': 'हमारे इंटरैक्टिव व्हाइटबोर्ड के साथ साइन लैंग्वेज का अभ्यास करें और अपनी हाथ की गतिविधियों पर तत्काल फीडबैक प्राप्त करें।',
    'features.gamifiedLearning': 'गेमिफाइड लर्निंग',
    'features.gamifiedDesc': 'उपलब्धि बैज, लीडरबोर्ड और मजेदार चुनौतियों के साथ अपने कौशल को बढ़ाएं।',
    'features.aiRecognition': 'AI-संचालित पहचान',
    'features.aiRecognitionDesc': 'उन्नत कंप्यूटर विज़न तकनीक जो आपकी साइनिंग सटीकता को समझती और मूल्यांकन करती है।',
    'features.curriculum': 'व्यापक पाठ्यक्रम',
    'features.curriculumDesc': 'बुनियादी अक्षर से जटिल बातचीत तक, संरचित पाठों के साथ अपनी गति से सीखें।',
    
    // How It Works
    'howItWorks.title': 'यह कैसे काम करता है',
    'howItWorks.subtitle': 'UniSign के साथ शुरुआत करना सरल और सहज है। आज ही अपनी साइन लैंग्वेज सीखने की यात्रा शुरू करने के लिए इन आसान चरणों का पालन करें।',
    'howItWorks.step1': 'UniSign डाउनलोड करें',
    'howItWorks.step1Desc': 'App Store या Google Play Store से ऐप प्राप्त करें। 2 मिनट से कम में त्वरित सेटअप।',
    'howItWorks.step2': 'अपना प्रोफाइल बनाएं',
    'howItWorks.step2Desc': 'अपना व्यक्तिगत शिक्षण प्रोफाइल सेट करें और अपना पसंदीदा शिक्षण पथ चुनें।',
    'howItWorks.step3': 'सीखना शुरू करें',
    'howItWorks.step3Desc': 'इंटरैक्टिव पाठ, 3D मॉडल और AI-संचालित फीडबैक सिस्टम के साथ शुरुआत करें।',
    'howItWorks.step4': 'प्रगति ट्रैक करें',
    'howItWorks.step4Desc': 'अपनी उपलब्धियों की निगरानी करें, बैज अर्जित करें और शिक्षण समुदाय से जुड़ें।',
    'howItWorks.ready': 'शुरुआत के लिए तैयार हैं?',
    'howItWorks.readyDesc': 'हजारों छात्रों के साथ जुड़ें जो पहले से ही UniSign के साथ साइन लैंग्वेज सीख रहे हैं। आज ही अपनी यात्रा शुरू करें और संचार बाधाओं को तोड़ें।',
    'howItWorks.watchDemo': 'डेमो देखें',
    
    // About
    'about.title': 'UniSign के बारे में',
    'about.subtitle': 'UniSign सिर्फ एक ऐप से कहीं अधिक है - यह संचार बाधाओं को तोड़ने की दिशा में एक आंदोलन है। हमारा मिशन बधिर और मूक छात्रों को अत्याधुनिक तकनीक के साथ सशक्त बनाना है जो साइन लैंग्वेज सीखने को सुलभ, आकर्षक और प्रभावी बनाती है।',
    'about.accessibilityFirst': 'पहुंच सबसे पहले',
    'about.accessibilityDesc': 'हम मानते हैं कि सभी को संचार और शिक्षण अवसरों तक समान पहुंच का अधिकार है।',
    'about.communityDriven': 'समुदाय संचालित',
    'about.communityDesc': 'बधिर और मूक समुदाय द्वारा और उनके लिए निरंतर फीडबैक और सुधार के साथ बनाया गया।',
    'about.goalOriented': 'लक्ष्य उन्मुख',
    'about.goalDesc': 'संरचित शिक्षण पथ जो छात्रों को अपने साइन लैंग्वेज लक्ष्यों को प्रभावी रूप से प्राप्त करने में मदद करते हैं।',
    'about.excellence': 'उत्कृष्टता',
    'about.excellenceDesc': 'पुरस्कार विजेता तकनीक जो पहुंच शिक्षा में नए मानक स्थापित करती है।',
    'about.comingSoon': 'जल्द आ रहा है',
    'about.comingSoonDesc': 'UniSign वर्तमान में विकास में है। हम आपके लिए सबसे नवाचार साइन लैंग्वेज सीखने का अनुभव लाने के लिए कड़ी मेहनत कर रहे हैं। हमारी वेबसाइट डाउनलोड करें और आधिकारिक लॉन्च के लिए बने रहें!',
    
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
    'qr.digitalWhiteboard': 'अभ्यास के लिए डिजिटल व्हाइटबोर्ड',
    'qr.vocabularyPractice': 'गुजराती और अंग्रेजी शब्दावली अभ्यास',
    'qr.signToText': 'साइन से टेक्स्ट और इसके विपरीत कार्यक्षमता',
    'qr.mathsLearning': 'गणित सीखने का खंड',
    'qr.realTimeRecognition': 'रीयल-टाइम साइन लैंग्वेज पहचान और फीडबैक',
    
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

    // Privacy Policy
    'privacy.backHome': 'होम पर वापस',
    'privacy.title': 'गोपनीयता नीति',
    'privacy.lastUpdated': 'अंतिम अपडेट: दिसंबर 2024',
    'privacy.introduction': 'परिचय',
    'privacy.introText1': 'UniSign ("हम," "हमारा," या "हमें") आपकी गोपनीयता की सुरक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि हम आपकी जानकारी कैसे एकत्रित, उपयोग, प्रकट और सुरक्षित करते हैं।',
    'privacy.introText2': 'UniSign का उपयोग करके, आप इस नीति के अनुसार जानकारी के संग्रह और उपयोग से सहमत हैं।',
    'privacy.infoWeCollect': 'हमारे द्वारा एकत्रित जानकारी',
    'privacy.personalInfo': 'व्यक्तिगत जानकारी',
    'privacy.learningData': 'शिक्षण डेटा',
    'privacy.technicalInfo': 'तकनीकी जानकारी',
    'privacy.howWeUse': 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
    'privacy.dataSharing': 'डेटा साझाकरण और प्रकटीकरण',
    'privacy.dataSecurity': 'डेटा सुरक्षा',
    'privacy.yourRights': 'आपके अधिकार और विकल्प',
  },
  gu: {
    // Navigation
    'nav.home': 'હોમ',
    'nav.features': 'વિશેષતાઓ',
    'nav.howItWorks': 'તે કેવી રીતે કામ કરે છે',
    'nav.about': 'અમારા વિશે',
    'nav.download': 'ડાઉનલોડ',
    
    // Landing Page
    'landing.whyChoose': 'UniSign કેમ પસંદ કરો?',
    'landing.learnEffectively': 'અસરકારક રીતે શીખો',
    'landing.learnDescription': '3D મોડલ અને રિયલ-ટાઇમ ફીડબેક સાથે ઇન્ટરેક્ટિવ પાઠ',
    'landing.exploreFeatures': 'સુવિધાઓ જુઓ',
    'landing.builtForEveryone': 'બધા માટે બનાવેલ',
    'landing.builtDescription': 'બહેરા અને મૂંગા વિદ્યાર્થીઓ માટે ખાસ ડિઝાઇન કરેલ',
    'landing.ourMission': 'અમારું મિશન',
    'landing.getStartedToday': 'આજે જ શરૂઆત કરો',
    'landing.getStartedDescription': 'UniSign તરત ડાઉનલોડ કરવા માટે QR કોડ સ્કેન કરો',
    'landing.downloadNow': 'હવે ડાઉનલોડ કરો',
    
    // Hero
    'hero.title': 'અવરોધોને તોડવું',
    'hero.titleHighlight': 'સાંકેતિક ભાષા',
    'hero.subtitle': 'UniSign સાથે બહેરા અને મૂંગા વિદ્યાર્થીઓને સશક્ત બનાવો - આ ક્રાંતિકારી એપ AI-સંચાલિત શિક્ષણ, 3D મોડલ અને ઇન્ટરેક્ટિવ અનુભવો દ્વારા સાંકેતિક ભાષાને સુલભ બનાવે છે।',
    'hero.download': 'UniSign ડાઉનલોડ કરો',
    'hero.learnMore': 'વધુ જાણો',
    
    // Features
    'features.title': 'શક્તિશાળી સુવિધાઓ',
    'features.subtitle': 'સાંકેતિક ભાષા શીખવાના ભવિષ્યનો અનુભવ કરો અમારી નવાચાર સુવિધાઓ સાથે જે શીખવાને સુલભ, આકર્ષક અને અસરકારક બનાવવા માટે ડિઝાઇન કરવામાં આવી છે.',
    'features.3dModels': '3D સાઇન મોડલ',
    'features.3dDesc': 'ઇન્ટરેક્ટિવ 3D મોડલ જે સચોટ હાથની હલનચલન અને સ્થિતિ દર્શાવે છે સંપૂર્ણ સાઇન લેંગ્વેજ શીખવા માટે.',
    'features.textToSign': 'ટેક્સ્ટ-ટુ-સાઇન AI',
    'features.textToSignDesc': 'ક્રાંતિકારી AI જે ટેક્સ્ટને સાઇન લેંગ્વેજ એનિમેશનમાં પરિવર્તિત કરે છે, સંદેશાવ્યવહારને નિર્બાધ અને તાત્કાલિક બનાવે છે.',
    'features.worldGame': 'વર્લ્ડ ગેમ શબ્દભંડોળ',
    'features.worldGameDesc': 'વિવિધ દેશો અને સંસ્કૃતિઓની સાઇન લેંગ્વેજનું અન્વેષણ કરો આકર્ષક ગેમિફાઇડ શબ્દભંડોળ પડકારો દ્વારા.',
    'features.quizzes': 'ઇન્ટરેક્ટિવ ક્વિઝ',
    'features.quizzesDesc': 'અનેક ક્વિઝ ફોર્મેટ જેમાં સ્પીડ ચેલેન્જ, મેમોરી ગેમ્સ અને પ્રેક્ટિકલ સાઇનિંગ મૂલ્યાંકન સામેલ છે.',
    'features.whyChoose': 'UniSign કેમ પસંદ કરો?',
    'features.digitalWhiteboard': 'ડિજિટલ વ્હાઇટબોર્ડ',
    'features.digitalWhiteboardDesc': 'અમારા ઇન્ટરેક્ટિવ વ્હાઇટબોર્ડ સાથે સાઇન લેંગ્વેજનો અભ્યાસ કરો અને તમારી હાથની હલનચલન પર તાત્કાલિક ફીડબેક મેળવો.',
    'features.gamifiedLearning': 'ગેમિફાઇડ લર્નિંગ',
    'features.gamifiedDesc': 'સિદ્ધિ બેજ, લીડરબોર્ડ અને મજાની પડકારો સાથે તમારા કૌશલ્યોને વધારો.',
    'features.aiRecognition': 'AI-સંચાલિત ઓળખ',
    'features.aiRecognitionDesc': 'અદ્યતન કોમ્પ્યુટર વિઝન ટેક્નોલોજી જે તમારી સાઇનિંગ સચોટતાને સમજે છે અને મૂલ્યાંકન કરે છે.',
    'features.curriculum': 'વ્યાપક અભ્યાસક્રમ',
    'features.curriculumDesc': 'મૂળભૂત અક્ષરોથી જટિલ વાતચીત સુધી, સંરચિત પાઠો સાથે તમારી ગતિએ શીખો.',
    
    // How It Works
    'howItWorks.title': 'તે કેવી રીતે કામ કરે છે',
    'howItWorks.subtitle': 'UniSign સાથે શરૂઆત કરવી સરળ અને સહજ છે. આજે જ તમારી સાઇન લેંગ્વેજ શીખવાની યાત્રા શરૂ કરવા માટે આ સરળ પગલાંનું પાલન કરો.',
    'howItWorks.step1': 'UniSign ડાઉનલોડ કરો',
    'howItWorks.step1Desc': 'App Store અથવા Google Play Store થી એપ મેળવો. 2 મિનિટથી ઓછામાં ઝડપી સેટઅપ.',
    'howItWorks.step2': 'તમારો પ્રોફાઇલ બનાવો',
    'howItWorks.step2Desc': 'તમારો વ્યક્તિગત શિક્ષણ પ્રોફાઇલ સેટ કરો અને તમારો પસંદીદા શિક્ષણ માર્ગ પસંદ કરો.',
    'howItWorks.step3': 'શીખવાનું શરૂ કરો',
    'howItWorks.step3Desc': 'ઇન્ટરેક્ટિવ પાઠ, 3D મોડલ અને AI-સંચાલિત ફીડબેક સિસ્ટમ સાથે શરૂઆત કરો.',
    'howItWorks.step4': 'પ્રગતિ ટ્રેક કરો',
    'howItWorks.step4Desc': 'તમારી સિદ્ધિઓની દેખરેખ કરો, બેજ કમાવો અને શિક્ષણ સમુદાય સાથે જોડાવો.',
    'howItWorks.ready': 'શરૂઆત કરવા માટે તૈયાર છો?',
    'howItWorks.readyDesc': 'હજારો વિદ્યાર્થીઓ સાથે જોડાવો જેઓ પહેલેથી જ UniSign સાથે સાઇન લેંગ્વેજ શીખી રહ્યા છે. આજે જ તમારી યાત્રા શરૂ કરો અને સંદેશાવ્યવહાર અવરોધોને તોડો.',
    'howItWorks.watchDemo': 'ડેમો જુઓ',
    
    // About
    'about.title': 'UniSign વિશે',
    'about.subtitle': 'UniSign માત્ર એક એપ કરતાં વધુ છે - તે સંદેશાવ્યવહાર અવરોધોને તોડવાની દિશામાં એક આંદોલન છે. અમારું મિશન બહેરા અને મૂંગા વિદ્યાર્થીઓને અત્યાધુનિક ટેક્નોલોજી સાથે સશક્ત બનાવવાનું છે જે સાઇન લેંગ્વેજ શીખવાને સુલભ, આકર્ષક અને અસરકારક બનાવે છે.',
    'about.accessibilityFirst': 'સુલભતા પ્રથમ',
    'about.accessibilityDesc': 'અમે માનીએ છીએ કે દરેકને સંદેશાવ્યવહાર અને શિક્ષણ તકો સુધી સમાન પહોંચનો અધિકાર છે.',
    'about.communityDriven': 'સમુદાય સંચાલિત',
    'about.communityDesc': 'બહેરા અને મૂંગા સમુદાય દ્વારા અને તેમના માટે સતત ફીડબેક અને સુધારણા સાથે બનાવવામાં આવ્યું.',
    'about.goalOriented': 'લક્ષ્ય લક્ષી',
    'about.goalDesc': 'સંરચિત શિક્ષણ માર્ગો જે વિદ્યાર્થીઓને તેમના સાઇન લેંગ્વેજ લક્ષ્યો અસરકારક રીતે પ્રાપ્ત કરવામાં મદદ કરે છે.',
    'about.excellence': 'ઉત્કૃષ્ટતા',
    'about.excellenceDesc': 'પુરસ્કાર વિજેતા ટેક્નોલોજી જે સુલભતા શિક્ષણમાં નવા ધોરણો સ્થાપિત કરે છે.',
    'about.comingSoon': 'જલ્દી આવી રહ્યું છે',
    'about.comingSoonDesc': 'UniSign હાલમાં વિકાસમાં છે. અમે તમારા માટે સૌથી નવાચાર સાઇન લેંગ્વેજ શીખવાનો અનુભવ લાવવા માટે સખત મહેનત કરી રહ્યા છીએ. અમારી વેબસાઇટ ડાઉનલોડ કરો અને અધિકૃત લોન્ચ માટે જોડાયેલા રહો!',
    
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
    'qr.digitalWhiteboard': 'અભ્યાસ માટે ડિજિટલ વ્હાઇટબોર્ડ',
    'qr.vocabularyPractice': 'ગુજરાતી અને અંગ્રેજી શબ્દભંડોળ અભ્યાસ',
    'qr.signToText': 'સાઇન થી ટેક્સ્ટ અને વિપરીત કાર્યક્ષમતા',
    'qr.mathsLearning': 'ગણિત શીખવાનો વિભાગ',
    'qr.realTimeRecognition': 'રીઅલ-ટાઇમ સાઇન લેંગ્વેજ ઓળખ અને ફીડબેક',
    
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

    // Privacy Policy
    'privacy.backHome': 'હોમ પર પાછા',
    'privacy.title': 'ગોપનીયતા નીતિ',
    'privacy.lastUpdated': 'છેલ્લું અપડેટ: ડિસેમ્બર 2024',
    'privacy.introduction': 'પરિચય',
    'privacy.introText1': 'UniSign ("અમે," "અમારું," અથવા "અમને") તમારી ગોપનીયતાની સુરક્ષા માટે પ્રતિબદ્ધ છે। આ ગોપનીયતા નીતિ સમજાવે છે કે અમે તમારી માહિતી કેવી રીતે એકત્રિત, ઉપયોગ, જાહેર અને સુરક્ષિત કરીએ છીએ।',
    'privacy.introText2': 'UniSign નો ઉપયોગ કરીને, તમે આ નીતિ અનુસાર માહિતીના સંગ્રહ અને ઉપયોગ સાથે સંમત થાઓ છો।',
    'privacy.infoWeCollect': 'અમે એકત્રિત કરેલી માહિતી',
    'privacy.personalInfo': 'વ્યક્તિગત માહિતી',
    'privacy.learningData': 'શિક્ષણ ડેટા',
    'privacy.technicalInfo': 'ટેકનિકલ માહિતી',
    'privacy.howWeUse': 'અમે તમારી માહિતીનો ઉપયોગ કેવી રીતે કરીએ છીએ',
    'privacy.dataSharing': 'ડેટા શેરિંગ અને જાહેરાત',
    'privacy.dataSecurity': 'ડેટા સુરક્ષા',
    'privacy.yourRights': 'તમારા અધિકારો અને પસંદગીઓ',
  }
};

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || (translations.en as any)[key] || key;
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
      t: (key: string) => (translations.en as any)[key] || key
    };
  }
  return context;
};