import PackageCard from "./PackageCard";
import { Button } from "@/components/ui/button";

const PackagesSection = () => {
  const packages = [
    {
      title: "Small",
      price: "RM 5,000",
      features: [
        { label: "Courts", value: "1–3" },
        { label: "Cash Sponsorship", value: "RM 3,000" },
        { label: "Assets Value", value: "RM 2,000" },
        { label: "Net Branding", value: "4–12 units" },
        { label: "Big Banner", value: "1 unit" },
        { label: "Co-branded Paddles", value: "24 units" },
      ]
    },
    {
      title: "Medium",
      price: "RM 10,000",
      isPopular: true,
      features: [
        { label: "Courts", value: "4–6" },
        { label: "Cash Sponsorship", value: "RM 6,000" },
        { label: "Assets Value", value: "RM 4,000" },
        { label: "Net Branding", value: "16–24 units" },
        { label: "Court Banners", value: "30–40 units" },
        { label: "Co-branded Paddles", value: "16–24 units" },
      ]
    },
    {
      title: "Large",
      price: "RM 15,000",
      features: [
        { label: "Courts", value: "7+" },
        { label: "Cash Sponsorship", value: "RM 10,000" },
        { label: "Assets Value", value: "RM 5,000" },
        { label: "Net Branding", value: "28 units" },
        { label: "Court Banners", value: "60–70 units" },
        { label: "Co-branded Paddles", value: "28 units" },
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Choose Your{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Sponsorship Package
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select the perfect package for your court size and get the funding and assets you need 
            to transform your venue into a professional badminton facility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to apply? Start your sponsorship journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Start Application
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;