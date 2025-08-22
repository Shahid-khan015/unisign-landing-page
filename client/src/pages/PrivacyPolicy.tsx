import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalization } from "@/contexts/LocalizationContext";

const PrivacyPolicy = () => {
  const { t } = useLocalization();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('privacy.backHome')}
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {t('privacy.title')}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {t('privacy.lastUpdated')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t('privacy.introduction')}</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                {t('privacy.introText1')}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {t('privacy.introText2')}
              </p>
            </Card>

            {/* Information We Collect */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t('privacy.infoWeCollect')}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{t('privacy.personalInfo')}</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Name and email address when you create an account</li>
                    <li>Profile information including learning preferences</li>
                    <li>Device information and app usage statistics</li>
                    <li>Camera access for sign language recognition features</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{t('privacy.learningData')}</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Progress tracking and learning achievements</li>
                    <li>Practice session recordings (with your consent)</li>
                    <li>Quiz results and performance analytics</li>
                    <li>Custom learning paths and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{t('privacy.technicalInfo')}</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Device type, operating system, and app version</li>
                    <li>IP address and general location data</li>
                    <li>App crash reports and performance metrics</li>
                    <li>Network connection information</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* How We Use Information */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t('privacy.howWeUse')}</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Provide and maintain the UniSign learning platform</li>
                <li>Personalize your learning experience and content recommendations</li>
                <li>Analyze and improve our AI-powered sign language recognition</li>
                <li>Track your progress and provide learning insights</li>
                <li>Send important updates and notifications about the app</li>
                <li>Ensure app security and prevent fraud</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </Card>

            {/* Data Sharing */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t('privacy.dataSharing')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party services that help us operate the app (cloud storage, analytics, etc.)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </Card>

            {/* Data Security */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t('privacy.dataSecurity')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>End-to-end encryption for sensitive data transmission</li>
                <li>Secure cloud storage with industry-standard security</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </Card>

            {/* Your Rights */}
            <Card className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t('privacy.yourRights')}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Access and Control</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access, update, or delete your personal information</li>
                    <li>Download your data in a portable format</li>
                    <li>Opt-out of certain data collection and processing</li>
                    <li>Request restriction of data processing</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Camera and Microphone</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can control camera and microphone access through your device settings. These permissions are only used for sign language recognition features and are not stored without your consent.
                  </p>
                </div>
              </div>
            </Card>

            {/* Data Retention */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Account information is retained while your account is active</li>
                <li>Learning data is kept to provide personalized experiences</li>
                <li>Technical logs are retained for security and debugging purposes</li>
                <li>Data is deleted upon account deletion or after 2 years of inactivity</li>
              </ul>
            </Card>

            {/* Children's Privacy */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                UniSign is designed to be accessible to users of all ages, including children learning sign language. We take special care to protect children's privacy:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>We do not knowingly collect personal information from children under 13 without parental consent</li>
                <li>Parents can review, delete, or refuse further collection of their child's information</li>
                <li>We use age-appropriate content and safety measures</li>
                <li>Educational institutions using UniSign must comply with applicable privacy laws</li>
              </ul>
            </Card>

            {/* International Users */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">International Users</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                UniSign is available globally, and we may transfer your information to countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this policy and applicable laws.
              </p>
            </Card>

            {/* Changes to Policy */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                <li>Posting the new Privacy Policy in the app</li>
                <li>Sending you an email notification</li>
                <li>Updating the "Last updated" date at the top of this policy</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Your continued use of UniSign after any changes constitutes acceptance of the updated policy.
              </p>
            </Card>

            {/* Contact Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> privacy@unisign.com</p>
                <p><strong>Support:</strong> support@unisign.com</p>
                <p><strong>Address:</strong> UniSign Privacy Team, 123 Accessibility Ave, San Francisco, CA 94102</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 