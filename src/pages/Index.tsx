
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp } from 'lucide-react';

const surveyData = [
  { name: 'Setup & Onboarding', value: 28, color: '#FF6B6B' },
  { name: 'Infrastructure Maintenance', value: 24, color: '#4ECDC4' },
  { name: 'Tool Integration', value: 18, color: '#45B7D1' },
  { name: 'Code Review Process', value: 15, color: '#96CEB4' },
  { name: 'Testing & Debugging', value: 10, color: '#FFEAA7' },
  { name: 'Documentation', value: 5, color: '#DDA0DD' }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
        <p className="font-semibold text-gray-800 mb-1">{data.name}</p>
        <p className="text-2xl font-bold text-gray-900">{data.value}%</p>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      className="font-bold text-sm drop-shadow-lg"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Chart */}
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="relative pb-2">
              {/* Categories in top right */}
              <div className="absolute top-6 right-6 space-y-2 max-w-xs">
                {surveyData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-gray-50/80">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-4 h-4 rounded-full shadow-md" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-semibold text-gray-700 text-base">{item.name}</span>
                    </div>
                    <Badge variant="secondary" className="font-bold text-base px-3 py-1">
                      {item.value}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-start">
                <div className="h-[700px] w-[700px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={surveyData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={250}
                        innerRadius={80}
                        paddingAngle={3}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1000}
                      >
                        {surveyData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color}
                            className="hover:opacity-80 transition-opacity cursor-pointer drop-shadow-lg"
                            stroke="white"
                            strokeWidth={2}
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
