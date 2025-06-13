
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our background verification and matrimony services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Background Verification Services</CardTitle>
              <CardDescription>Terms specific to our verification offerings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Verification Accuracy & Limitations</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Background verification is conducted by certified third-party agencies</li>
                <li>We strive for 99.5% accuracy but cannot guarantee 100% accuracy of all information</li>
                <li>Premium verification includes more comprehensive checks but timing may vary (7-14 days)</li>
                <li>Verification status is based on available records and may not reflect recent changes</li>
                <li>Users must provide accurate information for verification; false information may result in account termination</li>
              </ul>
              
              <h4 className="font-semibold mt-6">Verification Pricing & Refunds</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Basic Verification: ₹500-₹1,000 (non-refundable once process begins)</li>
                <li>Standard Verification: ₹1,500-₹3,000 (partial refund if verification fails due to our error)</li>
                <li>Premium Verification: ₹5,000-₹10,000 (refund available within 48 hours of payment)</li>
                <li>Elite Verification: ₹15,000-₹25,000 (includes comprehensive report with 7-day refund guarantee)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
              <CardDescription>What we expect from our users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide truthful and accurate information in your profile</li>
                <li>Submit genuine documents for verification processes</li>
                <li>Respect other users and maintain appropriate communication</li>
                <li>Report suspicious profiles or fraudulent activity</li>
                <li>Maintain confidentiality of verification reports of other users</li>
                <li>Use the platform exclusively for matrimonial purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prohibited Activities</CardTitle>
              <CardDescription>Actions that will result in account suspension</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Creating fake profiles or providing false verification documents</li>
                <li>Sharing verification reports with unauthorized third parties</li>
                <li>Using the platform for commercial or non-matrimonial purposes</li>
                <li>Harassment, stalking, or inappropriate behavior toward other users</li>
                <li>Attempting to bypass verification processes</li>
                <li>Soliciting money, gifts, or personal favors from other users</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verification Data Usage</CardTitle>
              <CardDescription>How verification information is handled</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Verification badges are displayed to indicate trust level</li>
                <li>Detailed verification reports are shared only with mutual consent</li>
                <li>Background check data is stored securely and encrypted</li>
                <li>Verification information is automatically deleted after account closure</li>
                <li>Users can control visibility of specific verification details</li>
                <li>Third-party verification agencies follow strict confidentiality protocols</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Limitations</CardTitle>
              <CardDescription>Understanding our service boundaries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>We facilitate introductions but do not guarantee marriages</li>
                <li>Background verification does not predict future behavior or compatibility</li>
                <li>We are not responsible for decisions made based on verification reports</li>
                <li>Technical issues may occasionally affect verification processing times</li>
                <li>Some verification checks may not be available for all regions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dispute Resolution</CardTitle>
              <CardDescription>How we handle conflicts and complaints</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                All disputes will be resolved through arbitration in Mumbai, Maharashtra. 
                Our customer care team is available 24/7 to address verification-related concerns.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Customer Care:</strong> +91 1800-123-4567</p>
                <p><strong>Email:</strong> disputes@rishtasathi.com</p>
                <p><strong>Resolution Time:</strong> 7-14 business days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfServicePage;
