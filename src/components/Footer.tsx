import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-bold text-xl text-foreground">CourtSponsor</span>
            </div>
            <p className="text-muted-foreground">
              Transforming badminton courts across Malaysia with premium sponsorship packages and professional assets.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2 text-muted-foreground">
              <a href="#home" className="block hover:text-primary transition-colors">Home</a>
              <a href="#packages" className="block hover:text-primary transition-colors">Packages</a>
              <a href="#about" className="block hover:text-primary transition-colors">About</a>
              <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Packages</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="block hover:text-primary transition-colors">Small Package</div>
              <div className="block hover:text-primary transition-colors">Medium Package</div>
              <div className="block hover:text-primary transition-colors">Large Package</div>
              <div className="block hover:text-primary transition-colors">Custom Solutions</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@courtsponsor.my</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+60 3-1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CourtSponsor. All rights reserved. | Powered by CelcomDigi Partnership</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;