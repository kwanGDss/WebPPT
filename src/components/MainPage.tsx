'use client';

import { Heart, MessageCircle, Mic, Brain, Shield, Star, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import type { PageType, User } from '../types';

interface MainPageProps {
  user: User | null;
  onNavigate: (page: PageType) => void;
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export function MainPage({ user, onNavigate }: MainPageProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Date Genie AI</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <button className="text-gray-700 hover:text-purple-600 transition-colors">서비스 소개</button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors">분석 방법</button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors">가격</button>
          </nav>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => onNavigate('mypage')}
                  className="text-gray-700"
                >
                  마이페이지
                </Button>
                <Button 
                  onClick={() => onNavigate('upload')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0"
                >
                  분석 시작
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  onClick={() => onNavigate('login')}
                  className="text-gray-700"
                >
                  로그인
                </Button>
                <Button 
                  onClick={() => onNavigate('register')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0"
                >
                  회원가입
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            AI 기반 연애 분석의 새로운 패러다임
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI가 분석하는
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              완벽한 썸 전략
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            카카오톡 대화와 통화 녹음을 AI로 분석하여 상대방의 감정을 정확히 파악하고
            <br className="hidden md:block" />
            개인 맞춤형 연애 전략을 제공합니다
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              onClick={() => user ? onNavigate('upload') : onNavigate('register')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 px-8 py-6 text-lg"
            >
              {user ? '지금 분석하기' : '무료로 시작하기'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg"
            >
              데모 보기
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "분석 정확도", value: "97%", icon: <Brain className="w-6 h-6" /> },
              { label: "만족한 사용자", value: "10,000+", icon: <Heart className="w-6 h-6" /> },
              { label: "성공률 향상", value: "+40%", icon: <TrendingUp className="w-6 h-6" /> }
            ].map((stat, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 flex justify-center">
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI가 제공하는 핵심 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              첨단 AI 기술로 연애의 모든 순간을 분석하고 최적의 전략을 제안합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "카카오톡 대화 분석",
                description: "대화 패턴, 응답 속도, 이모티콘 사용을 AI로 정밀 분석하여 상대방의 감정 상태를 파악합니다.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Mic className="w-8 h-8" />,
                title: "음성 감정 분석",
                description: "통화 녹음의 목소리 톤과 감정을 AI로 분석하여 숨겨진 감정까지 읽어냅니다.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "썸 가능성 예측",
                description: "머신러닝 기반으로 관계 발전 가능성을 정확하게 예측하고 점수로 제시합니다.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "맞춤형 연애 전략",
                description: "개인별 성향과 상황에 최적화된 구체적인 행동 가이드를 제공합니다.",
                color: "from-pink-500 to-red-500"
              },

              {
                icon: <Shield className="w-8 h-8" />,
                title: "완벽한 개인정보 보호",
                description: "모든 데이터는 암호화되어 안전하게 처리되며 분석 후 즉시 삭제됩니다.",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((feature, index) => (
              <GlassCard key={index} className="p-8 group hover:bg-white/80 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              간단한 3단계로 시작하세요
            </h2>
            <p className="text-xl text-gray-600">
              복잡한 설정 없이 몇 분 만에 AI 연애 분석을 받아보세요
            </p>
          </div>

          <div className="space-y-8 flex flex-col items-center">
            {[
              {
                step: "01",
                title: "파일 업로드",
                description: "카카오톡 대화 내역(.txt)과 통화 녹음(.mp3/.wav)을 안전하게 업로드하세요",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02", 
                title: "AI 분석 진행",
                description: "최첨단 AI가 대화와 음성을 종합적으로 분석하여 감정 상태를 파악합니다",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "결과 확인 및 전략 실행",
                description: "상세한 분석 리포트와 맞춤형 연애 전략을 확인하고 실전에 적용하세요",
                color: "from-green-500 to-emerald-500"
              }
            ].map((step, index) => (
              <GlassCard key={index} className="p-8">
                <div className="flex items-center gap-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 flex justify-center">
        <div className="max-w-4xl w-full">
          <GlassCard className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              지금 바로 시작해보세요
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              AI가 분석한 정확한 데이터를 바탕으로 더 성공적인 연애를 시작하세요.
              첫 분석은 무료로 체험하실 수 있습니다.
            </p>
            <Button 
              size="lg"
              onClick={() => user ? onNavigate('upload') : onNavigate('register')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 px-12 py-6 text-xl"
            >
              {user ? '지금 분석하기' : '무료 체험 시작'}
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-800">Date Genie AI</span>
            </div>
            <div className="text-gray-600 text-center md:text-right">
              <p>© 2024 Date Genie AI. All rights reserved.</p>
              <p className="text-sm mt-1">Made with ❤️ by Team GgoomJJeocke</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}