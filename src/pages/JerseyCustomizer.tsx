import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const JerseyCustomizer = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerNumber, setPlayerNumber] = useState("");
  const [jerseyColor, setJerseyColor] = useState("blue");

  const colorOptions = [
    { value: "blue", label: "Royal Blue", color: "bg-blue-600" },
    { value: "yellow", label: "Bright Yellow", color: "bg-yellow-400" },
    { value: "red", label: "Vibrant Red", color: "bg-red-600" },
    { value: "green", label: "Forest Green", color: "bg-green-600" },
    { value: "black", label: "Classic Black", color: "bg-gray-900" },
    { value: "white", label: "Pure White", color: "bg-white border-2 border-gray-200" },
  ];

  const getJerseyColorClass = () => {
    const colorMap = {
      blue: "bg-blue-600",
      yellow: "bg-yellow-400",
      red: "bg-red-600",
      green: "bg-green-600",
      black: "bg-gray-900",
      white: "bg-white border-2 border-gray-200"
    };
    return colorMap[jerseyColor as keyof typeof colorMap];
  };

  const getTextColorClass = () => {
    return jerseyColor === "white" || jerseyColor === "yellow" ? "text-gray-900" : "text-white";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Jersey Customizer</h1>
          <p className="text-muted-foreground text-lg">Design your personalized pickleball jersey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Customization Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-primary">Customize Your Jersey</CardTitle>
              <CardDescription>Enter your details and choose your style</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="playerName">Player Name</Label>
                <Input
                  id="playerName"
                  placeholder="Enter your name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  maxLength={15}
                />
                <p className="text-sm text-muted-foreground">Maximum 15 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="playerNumber">Jersey Number</Label>
                <Input
                  id="playerNumber"
                  type="number"
                  placeholder="Enter number (1-99)"
                  value={playerNumber}
                  onChange={(e) => setPlayerNumber(e.target.value)}
                  min="1"
                  max="99"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jerseyColor">Jersey Color</Label>
                <Select value={jerseyColor} onValueChange={setJerseyColor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a color" />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map((color) => (
                      <SelectItem key={color.value} value={color.value}>
                        <div className="flex items-center space-x-2">
                          <div className={`w-4 h-4 rounded-full ${color.color}`}></div>
                          <span>{color.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button className="w-full" variant="hero">
                  Add to Cart - RM 89.00
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Jersey Preview */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-primary">Live Preview</CardTitle>
              <CardDescription>See how your jersey will look</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center min-h-[400px]">
              <div className="relative">
                {/* Jersey SVG */}
                <div className={`w-64 h-80 ${getJerseyColorClass()} rounded-t-3xl rounded-b-lg relative overflow-hidden shadow-lg transition-all duration-300`}>
                  {/* Jersey shape details */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-black/10 rounded-b-lg"></div>
                  
                  {/* Sleeves */}
                  <div className={`absolute -left-8 top-8 w-16 h-24 ${getJerseyColorClass()} rounded-l-2xl transform -rotate-12`}></div>
                  <div className={`absolute -right-8 top-8 w-16 h-24 ${getJerseyColorClass()} rounded-r-2xl transform rotate-12`}></div>
                  
                  {/* Player Name */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
                    <div className={`${getTextColorClass()} font-bold text-lg tracking-wider`}>
                      {playerName || "YOUR NAME"}
                    </div>
                  </div>
                  
                  {/* Player Number */}
                  <div className="absolute top-32 left-1/2 transform -translate-x-1/2 text-center">
                    <div className={`${getTextColorClass()} font-bold text-6xl leading-none`}>
                      {playerNumber || "00"}
                    </div>
                  </div>
                  
                  {/* Jersey details */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className={`${getTextColorClass()} text-xs opacity-60`}>PICKLEBALL</div>
                  </div>
                </div>
                
                {/* Size indicator */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Size: Adult Medium</p>
                  <p className="text-xs text-muted-foreground mt-1">Premium polyester material</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Size Guide */}
        <Card className="mt-8 max-w-4xl mx-auto shadow-elegant">
          <CardHeader>
            <CardTitle className="text-primary">Size Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Size</th>
                    <th className="text-left py-2">Chest (inches)</th>
                    <th className="text-left py-2">Length (inches)</th>
                    <th className="text-left py-2">Shoulder (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Small</td>
                    <td className="py-2">36-38</td>
                    <td className="py-2">27</td>
                    <td className="py-2">17</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Medium</td>
                    <td className="py-2">40-42</td>
                    <td className="py-2">28</td>
                    <td className="py-2">18</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Large</td>
                    <td className="py-2">44-46</td>
                    <td className="py-2">29</td>
                    <td className="py-2">19</td>
                  </tr>
                  <tr>
                    <td className="py-2">X-Large</td>
                    <td className="py-2">48-50</td>
                    <td className="py-2">30</td>
                    <td className="py-2">20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JerseyCustomizer;