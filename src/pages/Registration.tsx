import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Upload, CheckCircle, ArrowRight, ArrowLeft, User, Building, MapPin, CreditCard } from 'lucide-react';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState('');

  const steps = [
    { id: 1, title: 'Package Selection', icon: CheckCircle },
    { id: 2, title: 'Personal Details', icon: User },
    { id: 3, title: 'Company Details', icon: Building },
    { id: 4, title: 'Court Details', icon: MapPin },
    { id: 5, title: 'Banking Details', icon: CreditCard },
    { id: 6, title: 'Document Upload', icon: Upload },
    { id: 7, title: 'Delivery Address', icon: MapPin },
  ];

  const packages = [
    {
      name: 'Small',
      price: 'RM 5,000',
      courts: '1-3',
      cash: 'RM 3,000',
      assets: 'RM 2,000',
      nets: '4-12',
      banners: '1 Big Banner',
      paddles: '24'
    },
    {
      name: 'Medium',
      price: 'RM 10,000',
      courts: '4-6',
      cash: 'RM 6,000',
      assets: 'RM 4,000',
      nets: '16-24',
      banners: '30-40 Court Banners',
      paddles: '16-24'
    },
    {
      name: 'Large',
      price: 'RM 15,000',
      courts: '7+',
      cash: 'RM 10,000',
      assets: 'RM 5,000',
      nets: '28',
      banners: '60-70 Court Banners',
      paddles: '28'
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Court Sponsorship Application</h1>
          <Progress value={progress} className="w-full h-2" />
          <div className="flex justify-between mt-4">
            {steps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    currentStep >= step.id 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : 'border-muted-foreground text-muted-foreground'
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs mt-1 text-center max-w-16">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Step {currentStep}: {steps[currentStep - 1].title}</CardTitle>
            <CardDescription>
              {currentStep === 1 && "Choose your sponsorship package"}
              {currentStep === 2 && "Enter your personal information"}
              {currentStep === 3 && "Provide company details"}
              {currentStep === 4 && "Tell us about your court"}
              {currentStep === 5 && "Banking information for disbursement"}
              {currentStep === 6 && "Upload required documents"}
              {currentStep === 7 && "Confirm delivery address"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Package Selection */}
            {currentStep === 1 && (
              <div className="grid gap-4">
                {packages.map((pkg) => (
                  <Card 
                    key={pkg.name} 
                    className={`cursor-pointer transition-all hover-scale ${
                      selectedPackage === pkg.name ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setSelectedPackage(pkg.name)}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary">{pkg.name} Package</h3>
                          <p className="text-2xl font-bold text-secondary">{pkg.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Courts: {pkg.courts}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Cash Sponsorship:</strong> {pkg.cash}</p>
                          <p><strong>Assets Worth:</strong> {pkg.assets}</p>
                        </div>
                        <div>
                          <p><strong>Net Branding:</strong> {pkg.nets}</p>
                          <p><strong>Banners:</strong> {pkg.banners}</p>
                          <p><strong>Co-branded Paddles:</strong> {pkg.paddles}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="ic">IC Number</Label>
                  <Input id="ic" placeholder="123456-78-9012" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+60 12-345 6789" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="homeAddress">Home Address</Label>
                  <Textarea id="homeAddress" placeholder="Enter your complete home address" />
                </div>
              </div>
            )}

            {/* Step 3: Company Details */}
            {currentStep === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" placeholder="Enter company name" />
                </div>
                <div>
                  <Label htmlFor="ssmNumber">SSM Number</Label>
                  <Input id="ssmNumber" placeholder="Enter SSM registration number" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="companyAddress">Company Address</Label>
                  <Textarea id="companyAddress" placeholder="Enter complete company address" />
                </div>
              </div>
            )}

            {/* Step 4: Court Details */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="courtName">Court Name</Label>
                  <Input id="courtName" placeholder="Enter your court name" />
                </div>
                <div>
                  <Label htmlFor="totalCourts">Total Number of Courts</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of courts" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num} Court{num > 1 ? 's' : ''}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="courtAddress">Court Address</Label>
                  <Textarea id="courtAddress" placeholder="Enter complete court address with GPS coordinates if available" />
                </div>
              </div>
            )}

            {/* Step 5: Banking Details */}
            {currentStep === 5 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bankName">Bank Name</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your bank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maybank">Maybank</SelectItem>
                      <SelectItem value="cimb">CIMB Bank</SelectItem>
                      <SelectItem value="public-bank">Public Bank</SelectItem>
                      <SelectItem value="rhb">RHB Bank</SelectItem>
                      <SelectItem value="hong-leong">Hong Leong Bank</SelectItem>
                      <SelectItem value="ambank">AmBank</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="accountNumber">Account Number</Label>
                  <Input id="accountNumber" placeholder="Enter your account number" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="accountHolder">Account Holder Name</Label>
                  <Input id="accountHolder" placeholder="Enter account holder name (must match IC)" />
                </div>
              </div>
            )}

            {/* Step 6: Document Upload */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="grid gap-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-medium">Upload IC (Identity Card)</p>
                    <p className="text-sm text-muted-foreground">Clear, readable image required</p>
                    <Button variant="outline" className="mt-2">Choose File</Button>
                  </div>
                  
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-medium">Upload Selfie Video</p>
                    <p className="text-sm text-muted-foreground">Identity confirmation video</p>
                    <Button variant="outline" className="mt-2">Choose File</Button>
                  </div>
                  
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-medium">Upload SSM Certificate</p>
                    <p className="text-sm text-muted-foreground">Company registration document</p>
                    <Button variant="outline" className="mt-2">Choose File</Button>
                  </div>
                  
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-medium">Upload Court Video</p>
                    <p className="text-sm text-muted-foreground">GPS, date, and time verified video of your court</p>
                    <Button variant="outline" className="mt-2">Choose File</Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Delivery Address */}
            {currentStep === 7 && (
              <div className="space-y-4">
                <div>
                  <Label>Choose Delivery Address</Label>
                  <div className="grid gap-3 mt-2">
                    <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <input type="radio" name="delivery" value="home" className="text-primary" />
                          <div>
                            <p className="font-medium">Home Address</p>
                            <p className="text-sm text-muted-foreground">Use registered home address</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <input type="radio" name="delivery" value="court" className="text-primary" />
                          <div>
                            <p className="font-medium">Court Address</p>
                            <p className="text-sm text-muted-foreground">Use registered court address</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-2">
                          <input type="radio" name="delivery" value="custom" className="text-primary" />
                          <div>
                            <p className="font-medium">Custom Address</p>
                            <p className="text-sm text-muted-foreground">Specify different delivery address</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="customAddress">Custom Delivery Address (if selected)</Label>
                  <Textarea id="customAddress" placeholder="Enter custom delivery address" />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              
              {currentStep < steps.length ? (
                <Button 
                  onClick={nextStep}
                  disabled={currentStep === 1 && !selectedPackage}
                  className="flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button className="flex items-center gap-2 bg-secondary hover:bg-secondary/90">
                  Submit Application
                  <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;