'use client';

import { useState } from 'react';
import { Heart, Brain, TrendingUp, Calendar, MessageSquare, Share2, Download, ArrowLeft, Star, Target, Zap, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import type { PageType, AnalysisData } from '../types';

interface AnalysisResultPageProps {
  analysisData: AnalysisData | null;
  onNavigate: (page: PageType) => void;
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}

const COLORS = ['#ec4899', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];

export function AnalysisResultPage({ analysisData, onNavigate }: AnalysisResultPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'strategy'>('overview');

  if (!analysisData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">분석 결과를 찾을 수 없습니다</h2>
          <Button onClick={() => onNavigate('main')}>홈으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  const emotionData = analysisData.emotionCurve?.map((value, index) => ({
    time: `${index + 1}일`,
    emotion: value,
    trend: index > 0 ? value - (analysisData.emotionCurve?.[index - 1] || 0) : 0
  })) || [];

  const pieData = [
    { name: '긍정', value: analysisData.emotionAnalysis?.positive || 0, color: '#10b981' },
    { name: '중립', value: analysisData.emotionAnalysis?.neutral || 0, color: '#6b7280' },
    { name: '부정', value: analysisData.emotionAnalysis?.negative || 0, color: '#ef4444' }
  ];

  const conversationData = [
    { name: '나', value: analysisData.conversationBalance?.me || 0, color: '#8b5cf6' },
    { name: analysisData.partnerName || '상대방', value: analysisData.conversationBalance?.partner || 0, color: '#ec4899' }
  ];

  const getLoveScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getLoveScoreLabel = (score: number) => {
    if (score >= 90) return '매우 높음';
    if (score >= 80) return '높음';
    if (score >= 70) return '좋음';
    if (score >= 60) return '보통';
    return '낮음';
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Date Genie AI 분석 결과',
          text: `${analysisData.partnerName}님과의 썸 가능성 점수: ${analysisData.loveScore}점!`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('공유 실패:', error);
      }
    } else {
      // 클립보드 복사 fallback
      navigator.clipboard.writeText(`${analysisData.partnerName}님과의 썸 가능성 점수: ${analysisData.loveScore}점! Date Genie AI에서 분석받기: ${window.location.origin}`);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4 text-gray-700 hover:text-purple-600"
            onClick={() => onNavigate('main')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            돌아가기
          </Button>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {analysisData.partnerName}님과의 연애 분석 결과
              </h1>
              <p className="text-gray-600">
                {analysisData.date ? new Date(analysisData.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : '날짜 없음'} 분석 완료
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                공유하기
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                PDF 저장
              </Button>
            </div>
          </div>
        </div>

        {/* Main Score Card */}
        <GlassCard className="p-8 mb-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 relative mb-6">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-1">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${getLoveScoreColor(analysisData.loveScore || 0)}`}>
                      {analysisData.loveScore || 0}
                    </div>
                    <div className="text-sm text-gray-500">점</div>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              썸 가능성: <span className={getLoveScoreColor(analysisData.loveScore || 0)}>
                {getLoveScoreLabel(analysisData.loveScore || 0)}
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              {analysisData.summary}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-300">
                <Heart className="w-3 h-3 mr-1" />
                연애 분석
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                <Brain className="w-3 h-3 mr-1" />
                AI 기반
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                <Star className="w-3 h-3 mr-1" />
                {getLoveScoreLabel(analysisData.loveScore || 0)}
              </Badge>
            </div>
          </div>
        </GlassCard>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-full p-1 border border-white/50">
            {[
              { id: 'overview', label: '종합 요약' },
              { id: 'detailed', label: '상세 분석' },
              { id: 'strategy', label: '연애 전략' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "최고 호감일",
                  value: analysisData.bestMoment,
                  icon: <Calendar className="w-5 h-5" />,
                  color: "from-pink-500 to-red-500"
                },
                {
                  title: "대표 설렘 문장",
                  value: analysisData.loveQuote,
                  icon: <MessageSquare className="w-5 h-5" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "대화 참여도",
                  value: `나 ${analysisData.conversationBalance?.me || 0}% : ${analysisData.partnerName || '상대방'} ${analysisData.conversationBalance?.partner || 0}%`,
                  icon: <BarChart3 className="w-5 h-5" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "감정 점수",
                  value: `긍정 ${analysisData.emotionAnalysis?.positive || 0}%`,
                  icon: <TrendingUp className="w-5 h-5" />,
                  color: "from-purple-500 to-pink-500"
                }
              ].map((insight, index) => (
                <GlassCard key={index} className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${insight.color} rounded-xl flex items-center justify-center mb-4`}>
                    {insight.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{insight.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{insight.value}</p>
                </GlassCard>
              ))}
            </div>

            {/* Emotion Chart */}
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">감정 변화 곡선</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={emotionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="time" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Line 
                      type="monotone" 
                      dataKey="emotion" 
                      stroke="url(#gradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#ec4899', strokeWidth: 2, r: 6 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                시간이 지날수록 감정 점수가 상승하는 것은 긍정적인 신호입니다.
              </p>
            </GlassCard>
          </div>
        )}

        {activeTab === 'detailed' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Emotion Distribution */}
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">감정 분포</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  {pieData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-gray-600">
                        {item.name} {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Conversation Balance */}
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">대화 밸런스</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">나</span>
                      <span className="text-sm text-gray-600">{analysisData.conversationBalance?.me || 0}%</span>
                    </div>
                    <Progress value={analysisData.conversationBalance?.me || 0} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{analysisData.partnerName || '상대방'}</span>
                      <span className="text-sm text-gray-600">{analysisData.conversationBalance?.partner || 0}%</span>
                    </div>
                    <Progress value={analysisData.conversationBalance?.partner || 0} className="h-3" />
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-800">
                    <strong>분석:</strong> 적절한 대화 밸런스를 보이고 있습니다. 
                    서로에게 관심을 가지고 소통하고 있는 것으로 보입니다.
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Detailed Analysis */}
            <GlassCard className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">상세 분석 리포트</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💕 최고 호감 순간</h4>
                  <p className="text-gray-700 bg-pink-50 p-4 rounded-lg border border-pink-200">
                    {analysisData.bestMoment}에 가장 높은 호감도를 보였습니다. 
                    이 시점의 대화 패턴을 참고하여 비슷한 상황을 만들어보세요.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💭 대표 설렘 문장</h4>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
                    <p className="text-gray-700 italic">"{analysisData.loveQuote}"</p>
                    <p className="text-sm text-gray-600 mt-2">
                      이런 따뜻하고 관심 있는 메시지가 상대방의 마음을 움직였습니다.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📊 종합 평가</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { label: '응답 속도', score: 85, color: 'bg-blue-500' },
                      { label: '감정 교감', score: analysisData.loveScore, color: 'bg-pink-500' },
                      { label: '관심도', score: 78, color: 'bg-green-500' }
                    ].map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-16 h-16 ${metric.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2`}>
                          {metric.score}
                        </div>
                        <p className="text-sm text-gray-600">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}

        {activeTab === 'strategy' && (
          <div className="space-y-8">
            {/* MBTI Strategy */}
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">MBTI 기반 공략법</h3>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <p className="text-gray-800 leading-relaxed">{analysisData.mbtiStrategy}</p>
              </div>
            </GlassCard>

            {/* Confession Timing */}
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">고백 타이밍 조언</h3>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
                <p className="text-gray-800 leading-relaxed">{analysisData.confessionTiming}</p>
              </div>
            </GlassCard>

            {/* Action Items */}
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">실행 가이드</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "🎯 즉시 실행",
                    items: [
                      "관심사를 더 자주 물어보기",
                      "따뜻한 인사말로 대화 시작하기",
                      "상대방의 일상에 관심 표현하기"
                    ]
                  },
                  {
                    title: "📅 장기 전략",
                    items: [
                      "공통 관심사 찾아서 활동 제안하기",
                      "깊이 있는 대화 주제 준비하기",
                      "적절한 스킨십과 거리감 조절하기"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-4">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-blue-800">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-12">
          <Button
            onClick={() => onNavigate('upload')}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 px-8 py-3"
          >
            새로운 분석 시작하기
          </Button>
          <Button
            variant="outline"
            onClick={() => onNavigate('mypage')}
          >
            분석 이력 보기
          </Button>
        </div>
      </div>
    </div>
  );
}