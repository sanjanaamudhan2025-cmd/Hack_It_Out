import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Building, CheckCircle, Clock } from "lucide-react";
import TopNav from "@/components/TopNav";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";

const stats = [
  { title: "Total Patients", value: "250", icon: Users, color: "text-primary" },
  { title: "Total Departments", value: "6", icon: Building, color: "text-info" },
  { title: "Completed Cases", value: "200", icon: CheckCircle, color: "text-success" },
  { title: "Pending Cases", value: "50", icon: Clock, color: "text-warning" },
];

const deptData = [
  { name: "Cardiology", patients: 50 },
  { name: "Neurology", patients: 40 },
  { name: "Orthopedics", patients: 60 },
  { name: "Pediatrics", patients: 30 },
  { name: "General Med.", patients: 70 },
];

const COLORS = [
  "hsl(211, 65%, 45%)",
  "hsl(199, 80%, 46%)",
  "hsl(152, 60%, 42%)",
  "hsl(38, 92%, 50%)",
  "hsl(280, 60%, 55%)",
];

const patientRecords = [
  { id: "101", dept: "Cardiology", status: "Completed" },
  { id: "102", dept: "Neurology", status: "Pending" },
  { id: "103", dept: "Orthopedics", status: "Completed" },
  { id: "104", dept: "Pediatrics", status: "Pending" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.title} className="shadow-sm">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.title}</p>
                  <p className="text-2xl font-bold text-foreground">{s.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Department Workload</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={deptData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 25%, 90%)" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="patients" fill="hsl(211, 65%, 45%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Patient Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={deptData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="patients"
                    nameKey="name"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {deptData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Recent Patient Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient ID</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patientRecords.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.id}</TableCell>
                    <TableCell>{r.dept}</TableCell>
                    <TableCell>
                      <Badge variant={r.status === "Completed" ? "default" : "secondary"}>
                        {r.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
