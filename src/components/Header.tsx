import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const type = localStorage.getItem("userType");
    const email = localStorage.getItem("userEmail");
    setUserType(type);
    setUserEmail(email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("userEmail");
    setUserType(null);
    setUserEmail(null);
    window.location.href = "/";
  };

  const isLoggedIn = userType && userEmail;
  const isAdmin = userType === "admin";
  const isUser = userType === "user";

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-xl text-foreground">CourtSponsor</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="/#packages" className="text-foreground hover:text-primary transition-colors">Packages</a>
          <a href="/jersey" className="text-foreground hover:text-primary transition-colors">Jersey</a>
          <a href="/#about" className="text-foreground hover:text-primary transition-colors">About</a>
          
          {/* Admin-only menu items */}
          {isAdmin && (
            <a href="/admin" className="text-foreground hover:text-primary transition-colors">Admin Panel</a>
          )}
          
          {/* User-only menu items */}
          {isUser && (
            <a href="/dashboard" className="text-foreground hover:text-primary transition-colors">My Dashboard</a>
          )}
          
          {/* Guest-only menu items */}
          {!isLoggedIn && (
            <a href="/register" className="text-foreground hover:text-primary transition-colors">Register</a>
          )}
          
          <a href="/#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Button variant="ghost" className="hidden md:inline-flex" asChild>
                <a href="/login">Login</a>
              </Button>
              <Button variant="hero" asChild>
                <a href="/register">Register Now</a>
              </Button>
            </>
          ) : (
            <>
              <span className="text-sm text-muted-foreground hidden md:inline">
                {isAdmin ? "Admin" : "User"}: {userEmail}
              </span>
              {isUser && (
                <Button variant="outline" className="hidden md:inline-flex" asChild>
                  <a href="/dashboard">Dashboard</a>
                </Button>
              )}
              {isAdmin && (
                <Button variant="outline" className="hidden md:inline-flex" asChild>
                  <a href="/admin">Admin Panel</a>
                </Button>
              )}
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;