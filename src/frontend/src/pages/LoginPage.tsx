import { useState } from "react";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import LoginCard from "../components/LoginCard";
import { useAuth } from "../hooks/useAuth";

interface LoginPageProps {
  onPartnerClick?: () => void;
}

export default function LoginPage({ onPartnerClick }: LoginPageProps) {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // If somehow already authenticated, guard redirects — this is a fallback
  if (isAuthenticated) return null;

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setAuthError(null);
    setIsLoading(true);
    const result = await login(email, password);
    setIsLoading(false);
    if (!result.success) {
      setAuthError(result.error ?? "Login failed");
    }
    // On success, AuthProvider state updates → App.tsx guard navigates to /dashboard
  }

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.10_0.025_280)]">
      <Header onPartnerClick={onPartnerClick} />
      <main className="flex-1">
        <HeroSection>
          <LoginCard
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            keepSignedIn={keepSignedIn}
            setKeepSignedIn={setKeepSignedIn}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            isLoading={isLoading}
            onSubmit={handleSignIn}
            authError={authError}
          />
        </HeroSection>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
