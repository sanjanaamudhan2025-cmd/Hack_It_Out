import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TopNav from "@/components/TopNav";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from "recharts";

const monthlyData = [
  { month: "January", patients: 100 },
  { month: "February", patients: 140 },
  { month: "March", patients: 180 },
  { month: "April", patients: 160 },
  { month: "May", patients: 200 },
];

const resolutionData = [
  { dept: "Cardiology", days: 3 },
  { dept: "Neurology", days: 4 },
  { dept: "Orthopedics", days: 2 },
  { dept: "Pediatrics", days: 3 },
];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6">
        <h1 className="text-xl font-semibold text-foreground">Analytics</h1>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Monthly Patient Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 25%, 90%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="patients"
                  stroke="hsl(211, 65%, 45%)"
                  strokeWidth={2}
                  dot={{ r: 5, fill: "hsl(211, 65%, 45%)" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Average Resolution Time by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={resolutionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 25%, 90%)" />
                <XAxis dataKey="dept" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} unit=" days" />
                <Tooltip />
                <Bar dataKey="days" fill="hsl(199, 80%, 46%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Analytics;
