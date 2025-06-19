
import { useUser, useAuth as useClerkAuth } from "@clerk/clerk-react";
import { useAppStore } from "@/store/useAppStore";
import { useEffect } from "react";

export const useAuth = () => {
  const { user, isLoaded } = useUser();
  const { isSignedIn, signOut } = useClerkAuth();
  const { setUser, setAuthenticated, logout } = useAppStore();

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      const userData = {
        id: user.id,
        name: user.fullName || user.firstName || "User",
        email: user.primaryEmailAddress?.emailAddress || "",
        role: (user.publicMetadata?.role as 'customer' | 'vendor' | 'admin') || 'customer',
        isVerified: user.emailAddresses[0]?.verification?.status === "verified"
      };
      setUser(userData);
    } else if (isLoaded && !isSignedIn) {
      logout();
    }
  }, [user, isSignedIn, isLoaded, setUser, logout]);

  const handleSignOut = async () => {
    if (signOut) {
      await signOut();
    }
    logout();
  };

  return {
    user,
    isSignedIn,
    isLoaded,
    signOut: handleSignOut
  };
};
