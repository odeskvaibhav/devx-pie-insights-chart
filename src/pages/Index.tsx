
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const surveyData = [
  { name: 'Setup & Onboarding', value: 15, color: '#FF6B6B' },
  { name: 'Documentation', value: 15, color: '#4ECDC4' },
  { name: 'Test Infrastructure', value: 25, color: '#45B7D1' },
  { name: 'Pre-Production Performance Validation', value: 20, color: '#96CEB4' },
  { name: 'Distribution & Deployment', value: 10, color: '#FFEAA7' }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
        <p className="font-semibold text-gray-800 mb-1">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{payload[0].value} users</p>
      </div>
    );
  }
  return null;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="relative pb-6">
            </CardHeader>
            <CardContent className="pt-0 pl-8">
              <div className="h-[600px] w-full">
                <ResponsiveContainer width="75%" height="100%">
                  <BarChart
                    data={surveyData}
                    margin={{ top: 20, right: 30, left: 40, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      type="category" 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: '#666' }}
                      axisLine={{ stroke: '#e0e0e0' }}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      interval={0}
                      label={{ value: 'Categories', position: 'insideBottom', offset: -10 }}
                    />
                    <YAxis 
                      type="number" 
                      domain={[0, 50]} 
                      tick={{ fontSize: 14, fill: '#666' }}
                      axisLine={{ stroke: '#e0e0e0' }}
                      label={{ value: 'Number of Users (Total: 50)', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="value" 
                      radius={[8, 8, 0, 0]}
                      stroke="white"
                      strokeWidth={2}
                    >
                      {surveyData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          className="hover:opacity-80 transition-opacity cursor-pointer drop-shadow-lg"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
