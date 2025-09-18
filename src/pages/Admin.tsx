import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Package, 
  Truck, 
  DollarSign,
  FileText,
  Users,
  Building,
  MapPin,
  Calendar,
  Download
} from 'lucide-react';

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data for applications
  const applications = [
    {
      id: 'APP001',
      courtName: 'Sunrise Badminton Court',
      ownerName: 'Ahmad Rahman',
      package: 'Medium',
      status: 'pending_review',
      submittedDate: '2024-01-15',
      totalCourts: 5,
      amount: 'RM 10,000',
      location: 'Kuala Lumpur'
    },
    {
      id: 'APP002',
      courtName: 'Elite Sports Center',
      ownerName: 'Sarah Lim',
      package: 'Large',
      status: 'approved',
      submittedDate: '2024-01-10',
      totalCourts: 8,
      amount: 'RM 15,000',
      location: 'Petaling Jaya'
    },
    {
      id: 'APP003',
      courtName: 'Champion Court',
      ownerName: 'Raj Kumar',
      package: 'Small',
      status: 'documents_pending',
      submittedDate: '2024-01-20',
      totalCourts: 2,
      amount: 'RM 5,000',
      location: 'Shah Alam'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending_review: { label: 'Pending Review', className: 'bg-yellow-100 text-yellow-800' },
      approved: { label: 'Approved', className: 'bg-green-100 text-green-800' },
      rejected: { label: 'Rejected', className: 'bg-red-100 text-red-800' },
      documents_pending: { label: 'Documents Pending', className: 'bg-orange-100 text-orange-800' },
      assets_shipped: { label: 'Assets Shipped', className: 'bg-blue-100 text-blue-800' },
      completed: { label: 'Completed', className: 'bg-purple-100 text-purple-800' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending_review;
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const stats = [
    { title: 'Total Applications', value: '24', icon: FileText, color: 'text-blue-600' },
    { title: 'Pending Review', value: '8', icon: Clock, color: 'text-yellow-600' },
    { title: 'Approved', value: '12', icon: CheckCircle, color: 'text-green-600' },
    { title: 'Total Disbursed', value: 'RM 180,000', icon: DollarSign, color: 'text-purple-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage sponsorship applications and track disbursements</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const StatIcon = stat.icon;
            return (
              <Card key={stat.title} className="hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <StatIcon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="shipping">Asset Shipping</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="audits">Audits</TabsTrigger>
          </TabsList>

          {/* Applications Tab */}
          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle>Applications Management</CardTitle>
                    <CardDescription>Review and manage sponsorship applications</CardDescription>
                  </div>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input 
                        placeholder="Search applications..." 
                        className="pl-10 md:w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full md:w-48">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending_review">Pending Review</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                        <SelectItem value="documents_pending">Documents Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <Card key={app.id} className="transition-all hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-lg">{app.courtName}</h3>
                              {getStatusBadge(app.status)}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                <span>{app.ownerName}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{app.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{app.submittedDate}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Package className="w-4 h-4" />
                                <span>{app.package} Package</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Building className="w-4 h-4" />
                                <span>{app.totalCourts} Courts</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <DollarSign className="w-4 h-4" />
                                <span>{app.amount}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                              <Eye className="w-4 h-4" />
                              View Details
                            </Button>
                            {app.status === 'pending_review' && (
                              <>
                                <Button size="sm" className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                                  <CheckCircle className="w-4 h-4" />
                                  Approve
                                </Button>
                                <Button variant="destructive" size="sm" className="flex items-center gap-2">
                                  <XCircle className="w-4 h-4" />
                                  Reject
                                </Button>
                              </>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Asset Shipping Tab */}
          <TabsContent value="shipping">
            <Card>
              <CardHeader>
                <CardTitle>Asset Shipping Management</CardTitle>
                <CardDescription>Track and manage sponsorship asset deliveries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Elite Sports Center - Large Package</h4>
                          <p className="text-sm text-muted-foreground mb-2">Sarah Lim</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Truck className="w-4 h-4" />
                            <span>Tracking: TRK123456789</span>
                          </div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">In Transit</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Sunrise Badminton Court - Medium Package</h4>
                          <p className="text-sm text-muted-foreground mb-2">Ahmad Rahman</p>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>Delivered on 2024-01-18</span>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Delivered</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Management</CardTitle>
                <CardDescription>Manage fund disbursements and payment tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Elite Sports Center</h4>
                          <p className="text-sm text-muted-foreground mb-2">Sarah Lim - Large Package</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span>Cash: RM 10,000</span>
                            <span>Disbursed: 2024-01-19</span>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Paid</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-yellow-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Sunrise Badminton Court</h4>
                          <p className="text-sm text-muted-foreground mb-2">Ahmad Rahman - Medium Package</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span>Cash: RM 6,000</span>
                            <span>Evidence under review</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-yellow-100 text-yellow-800">Pending Evidence</Badge>
                          <Button size="sm">Review Evidence</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Audits Tab */}
          <TabsContent value="audits">
            <Card>
              <CardHeader>
                <CardTitle>Audit Management</CardTitle>
                <CardDescription>Schedule and track court audits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Scheduled Audits</h3>
                    <Button>Schedule New Audit</Button>
                  </div>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Champion Court - Physical Audit</h4>
                          <p className="text-sm text-muted-foreground mb-2">Raj Kumar - Small Package</p>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Scheduled: 2024-01-25, 2:00 PM</span>
                          </div>
                        </div>
                        <Badge className="bg-orange-100 text-orange-800">Scheduled</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">Sunrise Badminton Court - Online Audit</h4>
                          <p className="text-sm text-muted-foreground mb-2">Ahmad Rahman - Medium Package</p>
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>Completed: 2024-01-20</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge className="bg-green-100 text-green-800">Completed</Badge>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Report
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;