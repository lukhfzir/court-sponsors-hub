import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-xl text-foreground">CourtSponsor</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#packages" className="text-foreground hover:text-primary transition-colors">Packages</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="/register" className="text-foreground hover:text-primary transition-colors">Register</a>
          <a href="/admin" className="text-foreground hover:text-primary transition-colors">Admin</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button variant="hero" asChild>
            <a href="/register">Register Now</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;