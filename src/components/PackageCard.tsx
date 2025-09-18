import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PackageFeature {
  label: string;
  value: string;
}

interface PackageCardProps {
  title: string;
  price: string;
  features: PackageFeature[];
  isPopular?: boolean;
}

const PackageCard = ({ title, price, features, isPopular = false }: PackageCardProps) => {
  return (
    <Card className={`relative p-6 h-full ${isPopular ? 'border-primary shadow-card' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-glow">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <div className="text-3xl font-bold text-primary">{price}</div>
        </div>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <span className="font-medium text-foreground">{feature.label}:</span>
                <span className="text-muted-foreground ml-1">{feature.value}</span>
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${isPopular ? 'bg-hero-gradient text-white shadow-card hover:shadow-glow' : ''}`}
          variant={isPopular ? "hero" : "default"}
          size="lg"
        >
          Choose {title} Package
        </Button>
      </div>
    </Card>
  );
};

export default PackageCard;