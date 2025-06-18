
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingUp } from 'lucide-react';

const surveyData = [
  { name: 'Setup & Onboarding', value: 28, color: '#FF6B6B', description: 'Complex environment setup, unclear documentation' },
  { name: 'Infrastructure Maintenance', value: 24, color: '#4ECDC4', description: 'CI/CD issues, deployment complexities' },
  { name: 'Tool Integration', value: 18, color: '#45B7D1', description: 'Multiple tools, poor interoperability' },
  { name: 'Code Review Process', value: 15, color: '#96CEB4', description: 'Slow reviews, inconsistent feedback' },
  { name: 'Testing & Debugging', value: 10, color: '#FFEAA7', description: 'Flaky tests, hard-to-debug issues' },
  { name: 'Documentation', value: 5, color: '#DDA0DD', description: 'Outdated docs, missing information' }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-xs">
        <p className="font-semibold text-gray-800 mb-1">{data.name}</p>
        <p className="text-2xl font-bold text-gray-900 mb-2">{data.value}%</p>
        <p className="text-sm text-gray-600">{data.description}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-gray-700">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Developer Experience Survey 2024
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding the biggest challenges developers face in their daily workflow
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Users className="w-5 h-5 text-gray-500" />
            <span className="text-gray-500">Based on responses from 1,247 developers</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Top DevX Challenges
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Percentage breakdown of the most reported developer experience issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={surveyData}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={40}
                        paddingAngle={2}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1000}
                      >
                        {surveyData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.color}
                            className="hover:opacity-80 transition-opacity cursor-pointer"
                          />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                      <Legend content={<CustomLegend />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Key Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">52%</div>
                    <div className="text-blue-100">Infrastructure & Setup Issues</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">18%</div>
                    <div className="text-blue-100">Tool Integration Problems</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15%</div>
                    <div className="text-blue-100">Process-Related Challenges</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Issues */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">
                  Top Issues by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {surveyData.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium text-gray-700">{item.name}</span>
                    </div>
                    <Badge variant="secondary" className="font-bold">
                      {item.value}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Survey Details */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800">
                  Survey Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Survey Period:</span>
                  <span className="font-medium">Q4 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Participants:</span>
                  <span className="font-medium">1,247 developers</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Rate:</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="flex justify-between">
                  <span>Companies:</span>
                  <span className="font-medium">156 organizations</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Ready to Improve Your DevX?</h3>
              <p className="text-purple-100 mb-4">
                Join thousands of developers who have streamlined their workflow
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-white text-purple-600 hover:bg-gray-100">
                  Faster Onboarding
                </Badge>
                <Badge className="bg-white text-purple-600 hover:bg-gray-100">
                  Automated Setup
                </Badge>
                <Badge className="bg-white text-purple-600 hover:bg-gray-100">
                  Better Tools
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
