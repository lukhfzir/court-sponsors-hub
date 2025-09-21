import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Plus, FileText, MapPin, Calendar, DollarSign } from "lucide-react";

const UserDashboard = () => {
  // Mock user data - replace with actual user data from backend
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    memberSince: "January 2024"
  });

  // Mock applications data - replace with actual data from backend
  const [applications] = useState([
    {
      id: "APP001",
      courtName: "Central Park Court",
      packageType: "Bronze",
      status: "approved",
      submissionDate: "2024-02-15",
      amount: "RM 2,500"
    },
    {
      id: "APP002", 
      courtName: "Riverside Sports Complex",
      packageType: "Silver",
      status: "pending",
      submissionDate: "2024-03-01",
      amount: "RM 5,000"
    },
    {
      id: "APP003",
      courtName: "Downtown Arena",
      packageType: "Gold",
      status: "under_review",
      submissionDate: "2024-03-10",
      amount: "RM 10,000"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-green-500/10 text-green-700 border-green-200";
      case "pending": return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      case "under_review": return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "rejected": return "bg-red-500/10 text-red-700 border-red-200";
      default: return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "approved": return "Approved";
      case "pending": return "Pending";
      case "under_review": return "Under Review";
      case "rejected": return "Rejected";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, {user.name}</h1>
              <p className="text-muted-foreground">Member since {user.memberSince}</p>
            </div>
            <Button variant="hero" asChild>
              <a href="/register">
                <Plus className="w-4 h-4 mr-2" />
                New Application
              </a>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="jerseys">My Jerseys</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-6">
            <div className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{applications.length}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Approved</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      {applications.filter(app => app.status === "approved").length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-600">
                      {applications.filter(app => app.status === "pending" || app.status === "under_review").length}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Recent Applications</h2>
                {applications.map((application) => (
                  <Card key={application.id}>
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg">{application.courtName}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              {application.id}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {application.submissionDate}
                            </span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={getStatusColor(application.status)}>
                            {getStatusLabel(application.status)}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Package Type</p>
                          <p className="font-medium">{application.packageType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Amount</p>
                          <p className="font-medium flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {application.amount}
                          </p>
                        </div>
                        <div className="flex items-end justify-end">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your account details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Full Name</Label>
                    <p className="mt-1 text-sm text-muted-foreground">{user.name}</p>
                  </div>
                  <div>
                    <Label>Email Address</Label>
                    <p className="mt-1 text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <div>
                    <Label>Member Since</Label>
                    <p className="mt-1 text-sm text-muted-foreground">{user.memberSince}</p>
                  </div>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jerseys" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Jerseys</CardTitle>
                    <CardDescription>View and manage your custom jerseys</CardDescription>
                  </div>
                  <Button variant="hero" asChild>
                    <a href="/jersey">
                      <Plus className="w-4 h-4 mr-2" />
                      Design New Jersey
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No jerseys designed yet</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Start designing your custom jersey today!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;