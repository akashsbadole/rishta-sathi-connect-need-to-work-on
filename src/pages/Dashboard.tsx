
import { useAuth } from "@/hooks/useAuth";
import { useAppStore } from "@/store/useAppStore";
import CustomerDashboard from "@/components/dashboard/CustomerDashboard";
import VendorDashboard from "@/components/dashboard/VendorDashboard";
import Layout from "@/components/Layout";

const DashboardPage = () => {
  const { user: clerkUser } = useAuth();
  const { user: storeUser } = useAppStore();
  
  const user = clerkUser || storeUser;
  const userRole = clerkUser ? 
    (clerkUser.publicMetadata?.role as string) || 'customer' : 
    storeUser?.role || 'customer';

  const renderDashboard = () => {
    switch (userRole) {
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
