
import { useAuth } from "@/hooks/useAuth";
import CustomerDashboard from "@/components/dashboard/CustomerDashboard";
import VendorDashboard from "@/components/dashboard/VendorDashboard";
import Layout from "@/components/Layout";

const DashboardPage = () => {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'vendor':
        return <VendorDashboard />;
      case 'admin':
        return <VendorDashboard />; // Admin can use vendor dashboard for now
      default:
        return <CustomerDashboard />;
    }
  };

  return (
    <Layout>
      {renderDashboard()}
    </Layout>
  );
};

export default DashboardPage;
