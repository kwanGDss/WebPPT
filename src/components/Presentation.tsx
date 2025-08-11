'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Brain, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Import individual slide components
import { TitleSlide } from './presentation/slides/TitleSlide';
import { ProblemSlide } from './presentation/slides/ProblemSlide';
import { SolutionSlide } from './presentation/slides/SolutionSlide';
import { TechnologySlide } from './presentation/slides/TechnologySlide';
import { UserJourneySlide } from './presentation/slides/UserJourneySlide';
import { UIDesignSlide } from './presentation/slides/UIDesignSlide';
import { DevelopmentScheduleSlide } from './presentation/slides/DevelopmentScheduleSlide';
import { Slide } from './presentation/PresentationComponents';
import { 
  TARGET_CUSTOMERS, KEY_FEATURES, PERFORMANCE_METRICS, SECURITY_FEATURES
} from './presentation/SlideData';

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TitleSlide key={0} />,
    <ProblemSlide key={1} />,
    <SolutionSlide key={2} />,
    
    // Target Market Slide (3)
    <Slide key={3}>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-3">
          <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30 mb-2">Market</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">타겟 시장 분석</h2>
          <p className="text-xl text-gray-600">국내 420만명 데이팅 앱 사용자 대상</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">시장 규모</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-lg">20-30대 인구</span>
                <span className="text-2xl font-bold text-blue-500">850만명</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-lg">데이팅 앱 사용자</span>
                <span className="text-2xl font-bold text-green-500">420만명</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-lg">타겟 시장 규모</span>
                <span className="text-2xl font-bold text-purple-500">₩650억</span>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-3">핵심 타겟 고객</h3>
            <div className="space-y-2">
              {TARGET_CUSTOMERS.map((target, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className={`w-8 h-8 bg-gradient-to-br ${target.color} rounded-lg flex items-center justify-center`}>
                    {target.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base">{target.title}</h4>
                    <p className="text-sm text-gray-600">{target.description}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-300 text-xs">
                    {target.percentage}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // Key Features Slide (4)
    <Slide key={4}>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-4">
          <Badge className="bg-purple-500/20 text-purple-600 border-purple-500/30 mb-2">Features</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">핵심 기능</h2>
          <p className="text-xl text-gray-600">요구사항 정의서 기반 6대 핵심 기능</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {KEY_FEATURES.map((feature, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-4 group hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-300 text-xs">
                  {feature.accuracy}
                </Badge>
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">{feature.title}</h3>
              <p className="text-gray-600 text-base mb-3 leading-relaxed">{feature.description}</p>
              <div className="space-y-1">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>,

    <TechnologySlide key={5} />,
    <UserJourneySlide key={6} />,
    <UIDesignSlide key={7} />,
    <DevelopmentScheduleSlide key={8} />,

    // Performance & Security Slide (9)
    <Slide key={9}>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-4">
          <Badge className="bg-red-500/20 text-red-600 border-red-500/30 mb-2">Performance</Badge>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">성능 & 보안</h2>
          <p className="text-lg text-gray-600">요구사항 정의서의 모든 성능 지표 달성</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">성능 지표</h3>
            <div className="space-y-4 flex-1">
              {PERFORMANCE_METRICS.map((metric, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-blue-50/50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl font-bold text-blue-600">{metric.metric}</span>
                      <span className="font-medium text-gray-800">{metric.label}</span>
                    </div>
                    <p className="text-sm text-gray-600">목표: {metric.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">보안 기능</h3>
            <div className="space-y-3">
              {SECURITY_FEATURES.map((security, index) => (
                <div key={index} className="border border-red-200 rounded-lg p-3 bg-red-50">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-red-800 text-sm">{security.title}</h4>
                    <Badge className={
                      security.implementation === "완료" ? "bg-green-100 text-green-700 border-green-300 text-xs" :
                      "bg-orange-100 text-orange-700 border-orange-300 text-xs"
                    }>
                      {security.implementation}
                    </Badge>
                  </div>
                  <p className="text-red-700 text-xs mb-1">{security.description}</p>
                  <div className="text-xs text-red-600">우선순위: {security.priority}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 감사합니다 슬라이드 (10)
    <Slide key={10}>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-6">감사합니다!</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Date Genie AI가 만들어갈 새로운 연애의 미래에 함께해주세요.
            <br />
            AI 기술로 더 행복한 관계를 만드는 여정이 시작됩니다.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">AI 기술</h3>
              <p className="text-gray-600 text-sm">90%+ 정확도의 감정 분석</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">맞춤 전략</h3>
              <p className="text-gray-600 text-sm">AI 기반 개인화된 전략</p>
            </div>
            
            <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">안전한 서비스</h3>
              <p className="text-gray-600 text-sm">개인정보 보호 최우선</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <Badge className="bg-pink-100 text-pink-700 border-pink-300 px-6 py-3 text-lg">
                팀 꿈쩍
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 border-blue-300 px-6 py-3 text-lg">
                2025.08.11
              </Badge>
            </div>
            
            <p className="text-gray-500">
              연애의 새로운 패러다임, Date Genie AI와 함께하세요 ✨
            </p>
          </div>
        </div>
      </div>
    </Slide>
  ];



  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 키보드 네비게이션과 커스텀 이벤트 처리
  useEffect(() => {
    const handleCustomEvents = (event: Event) => {
      const customEvent = event as CustomEvent;
      switch (customEvent.type) {
        case 'nextSlide':
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          break;
        case 'prevSlide':
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
          break;
        case 'firstSlide':
          setCurrentSlide(0);
          break;
        case 'lastSlide':
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener('nextSlide', handleCustomEvents);
    window.addEventListener('prevSlide', handleCustomEvents);
    window.addEventListener('firstSlide', handleCustomEvents);
    window.addEventListener('lastSlide', handleCustomEvents);

    return () => {
      window.removeEventListener('nextSlide', handleCustomEvents);
      window.removeEventListener('prevSlide', handleCustomEvents);
      window.removeEventListener('firstSlide', handleCustomEvents);
      window.removeEventListener('lastSlide', handleCustomEvents);
    };
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden no-scrollbar presentation-container">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Slide Content */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <div className="w-full flex items-center justify-center">
          {slides[currentSlide]}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl px-6 py-3">
          <div className="flex items-center gap-4">
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="sm"
              disabled={currentSlide === 0}
              className="text-gray-700 hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="sm"
              disabled={currentSlide === slides.length - 1}
              className="text-gray-700 hover:bg-white/20"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>


    </div>
  );
}