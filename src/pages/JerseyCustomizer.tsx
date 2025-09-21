import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Jersey3D from "@/components/Jersey3D";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const JerseyCustomizer = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerNumber, setPlayerNumber] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Jersey Customizer</h1>
          <p className="text-muted-foreground text-lg">Design your personalized CourtSponsor pickleball jersey</p>
          <p className="text-sm text-muted-foreground mt-2">Official Yellow & Blue Design</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Customization Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-primary">Customize Your Jersey</CardTitle>
              <CardDescription>Enter your name and number for the official CourtSponsor jersey</CardDescription>
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
                <Label>Jersey Design</Label>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm font-medium">Official CourtSponsor Blue & Yellow</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Premium design with CourtSponsor branding</p>
                </div>
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
              <CardTitle className="text-primary">3D Preview</CardTitle>
              <CardDescription>Rotate and zoom to see your jersey from all angles</CardDescription>
            </CardHeader>
            <CardContent>
              <Jersey3D playerName={playerName} playerNumber={playerNumber} />
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">Size: Adult Medium</p>
                <p className="text-xs text-muted-foreground mt-1">Premium polyester material • Moisture-wicking technology</p>
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