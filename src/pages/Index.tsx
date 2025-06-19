
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
              {/* Categories legend */}
              <div className="absolute top-6 right-4 space-y-2 max-w-xs">
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
                      {item.value} users
                    </Badge>
                  </div>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pt-0 pl-8">
              <div className="h-[600px] w-full">
                <ResponsiveContainer width="75%" height="100%">
                  <BarChart
                    data={surveyData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      type="number" 
                      domain={[0, 50]} 
                      tick={{ fontSize: 14, fill: '#666' }}
                      axisLine={{ stroke: '#e0e0e0' }}
                      label={{ value: 'Number of Users (Total: 50)', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      tick={{ fontSize: 14, fill: '#666' }}
                      axisLine={{ stroke: '#e0e0e0' }}
                      width={250}
                      label={{ value: 'Categories', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="value" 
                      radius={[0, 8, 8, 0]}
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
