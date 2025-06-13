
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle, Eye } from "lucide-react";

const SafetyTipsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Safety Tips</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your safety is our priority. Follow these guidelines to ensure a secure matrimony experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Profile Verification</span>
              </CardTitle>
              <CardDescription>Ensure genuine connections through our verification system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Always look for verification badges before initiating contact</li>
                <li>Prefer profiles with Premium or Elite verification for maximum trust</li>
                <li>Report profiles with incomplete or suspicious information</li>
                <li>Use our background verification service for complete peace of mind</li>
                <li>Cross-verify important details through multiple sources</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-blue-600" />
                <span>First Meeting Guidelines</span>
              </CardTitle>
              <CardDescription>Safe practices for your first meeting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Always meet in public places like cafes, restaurants, or malls</li>
                <li>Inform family members about your meeting plans</li>
                <li>Arrange your own transportation to and from the meeting</li>
                <li>Keep the first meeting short and during daytime</li>
                <li>Trust your instincts - leave if you feel uncomfortable</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <span>Red Flags to Watch</span>
              </CardTitle>
              <CardDescription>Warning signs to be aware of</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Requests for money, gifts, or financial assistance</li>
                <li>Pressure to meet immediately or privately</li>
                <li>Reluctance to video call or meet in person</li>
                <li>Inconsistent information in profile or conversations</li>
                <li>Profiles without verification badges or proper photos</li>
                <li>Aggressive or inappropriate communication</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span>Communication Safety</span>
              </CardTitle>
              <CardDescription>Secure communication practices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Use our platform's messaging system initially</li>
                <li>Avoid sharing personal contact details too early</li>
                <li>Don't share sensitive personal or financial information</li>
                <li>Be cautious of people asking for photos or videos</li>
                <li>Report inappropriate messages or behavior immediately</li>
                <li>Keep records of important conversations</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Background Verification Benefits</CardTitle>
            <CardDescription>How our verification system enhances your safety</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">What We Verify:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Identity and address verification</li>
                  <li>Educational qualification checks</li>
                  <li>Employment and income verification</li>
                  <li>Criminal background screening</li>
                  <li>Marital status confirmation</li>
                  <li>Family background verification</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Safety Advantages:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>95% reduction in fake profiles</li>
                  <li>Complete transparency about potential matches</li>
                  <li>Peace of mind for families</li>
                  <li>Faster decision-making process</li>
                  <li>Higher success rate in marriages</li>
                  <li>Professional verification reports</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Our safety team is available 24/7 to assist you with any concerns or report suspicious activity.
          </p>
          <div className="flex justify-center space-x-6">
            <div>
              <p className="font-semibold">Safety Helpline</p>
              <p className="text-purple-600">+91 1800-123-4567</p>
            </div>
            <div>
              <p className="font-semibold">Email Support</p>
              <p className="text-purple-600">safety@rishtasathi.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SafetyTipsPage;
