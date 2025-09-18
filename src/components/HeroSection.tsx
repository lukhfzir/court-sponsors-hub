import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-badminton-court.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-surface-gradient overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transform Your{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Badminton Court
              </span>{" "}
              Into a Premium Venue
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
              Partner with us to elevate your court with professional sponsorship packages. 
              Get cash funding, premium assets, and transform your space into a world-class facility.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Apply for Sponsorship
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Packages
            </Button>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">RM 15K</div>
              <div className="text-sm text-muted-foreground">Max Funding</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Package Options</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">7+</div>
              <div className="text-sm text-muted-foreground">Courts Supported</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-card animate-float">
            <img 
              src={heroImage} 
              alt="Professional badminton court with blue nets and yellow accents" 
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-hero-gradient/10"></div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-glow font-semibold animate-float">
            Premium Assets
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-soft font-semibold animate-float" style={{animationDelay: '1s'}}>
            Cash Funding
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;