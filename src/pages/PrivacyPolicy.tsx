
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we protect and handle your personal information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Collection & Background Verification</CardTitle>
              <CardDescription>How we collect and verify your information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>As India's most trusted matrimony platform with comprehensive background verification, we collect and process the following information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Personal Information:</strong> Name, age, contact details, family information</li>
                <li><strong>Educational Verification:</strong> Degrees, certifications, institutional records</li>
                <li><strong>Professional Verification:</strong> Employment history, income verification, company details</li>
                <li><strong>Background Checks:</strong> Address verification, character references, criminal background (for premium tiers)</li>
                <li><strong>Identity Verification:</strong> Government ID verification, photo authentication</li>
                <li><strong>Financial Information:</strong> Income verification, property ownership (for premium verification)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Verification Tiers & Data Usage</CardTitle>
              <CardDescription>Different verification levels and associated data processing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Basic Verification</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Phone & Email verification</li>
                    <li>• Aadhaar card verification</li>
                    <li>• Basic photo authentication</li>
                    <li>• Social media cross-verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Premium Verification</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Professional background checks</li>
                    <li>• Criminal background verification</li>
                    <li>• Financial credit score checks</li>
                    <li>• Property ownership verification</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data Security & Protection</CardTitle>
              <CardDescription>How we protect your sensitive information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We implement industry-leading security measures:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>End-to-end encryption for all sensitive data</li>
                <li>Secure servers with 256-bit SSL encryption</li>
                <li>Regular security audits and penetration testing</li>
                <li>Restricted access to verification data on need-to-know basis</li>
                <li>Automatic data purging for inactive accounts</li>
                <li>Compliance with ISO 27001 security standards</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Third-Party Verification Partners</CardTitle>
              <CardDescription>External agencies we work with for comprehensive verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>We partner with certified verification agencies for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Educational institution verification</li>
                <li>Employment and HR verification services</li>
                <li>Government database cross-checking</li>
                <li>Financial institution verification</li>
                <li>Professional investigation agencies (for premium tiers)</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                All third-party partners are bound by strict confidentiality agreements and data protection protocols.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Rights & Data Control</CardTitle>
              <CardDescription>How you can manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>You have the following rights regarding your data:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access and download your complete verification report</li>
                <li>Request correction of any inaccurate information</li>
                <li>Delete your account and associated verification data</li>
                <li>Opt-out of specific verification processes</li>
                <li>Control visibility of verification badges</li>
                <li>Request data portability to other platforms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Questions about our privacy practices?</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                For any privacy-related questions or concerns, especially regarding our background verification processes:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Privacy Officer:</strong> privacy@rishtasathi.com</p>
                <p><strong>Data Protection Team:</strong> +91 1800-123-4567</p>
                <p><strong>Address:</strong> Rishta Sathi Technologies Pvt. Ltd., Mumbai, India</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
