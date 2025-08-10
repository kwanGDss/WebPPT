'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Heart, Timer, Headphones, Brain, Activity, ShieldCheck, Users, Target, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

import { 
  TARGET_CUSTOMERS, KEY_FEATURES, PERFORMANCE_METRICS, SECURITY_FEATURES
} from './presentation/SlideData';
import { LayoutGrid, Server, Workflow, GitFork, Code2 } from 'lucide-react';
import { HTML5Logo, CSS3Logo, JavaScriptLogo, JavaLogo, OracleLogo, PythonLogo, GitHubLogo, GeminiLogo, WhisperLogo, MatplotlibLogo } from './presentation/TechIcons';

export function AllSlidesView() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, 10)); // 총 11개 슬라이드 (0-10)
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // 입력 필드에서는 키보드 이벤트 무시
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'Home':
          event.preventDefault();
          setCurrentSlide(0);
          break;
        case 'End':
          event.preventDefault();
          setCurrentSlide(10);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

  // 슬라이드 데이터 정의
  const slides = [
    // 0. 타이틀 슬라이드
    <div key="title" className="h-full flex items-start justify-center pt-20">
      <div className="text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-12 animate-pulse">
          <Heart className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-6xl font-bold text-gray-800 mb-6">Date Genie AI</h1>
        <h2 className="text-3xl text-gray-600 mb-8 leading-relaxed">AI 기반 연애 분석과<br />서비스 기획안</h2>
        <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
          카카오톡 대화와 음성 통화를 분석하여 썸 가능성과 맞춤형 연애 전략을 제안하는 혁신적인 AI 서비스
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <Badge className="bg-pink-100 text-pink-700 border-pink-300 px-8 py-4 text-xl">
            팀 꿈쩍
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 border-blue-300 px-8 py-4 text-xl">
            2025.08.11
          </Badge>
        </div>
      </div>
    </div>,

    // 1. 문제점 슬라이드
    <div key="problem" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-red-500/20 text-red-600 border-red-500/30 mb-4">Problem</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">현재 연애 상담의 문제점</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Users className="w-8 h-8 text-white" />,
              title: "주관적 조언",
              description: "친구들의 개인적 경험에만 의존",
              color: "from-red-500 to-pink-500"
            },
            {
              icon: <Timer className="w-8 h-8 text-white" />,
              title: "시간 소요",
              description: "상담 시간이 많이 필요",
              color: "from-orange-500 to-red-500"
            },
            {
              icon: <Target className="w-8 h-8 text-white" />,
              title: "일반적 조언",
              description: "개인 맞춤형 전략 부족",
              color: "from-yellow-500 to-orange-500"
            },
            {
              icon: <Activity className="w-8 h-8 text-white" />,
              title: "감정적 판단",
              description: "객관적 분석 도구의 부재",
              color: "from-purple-500 to-pink-500"
            }
          ].map((problem, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 text-center group hover:bg-white/20 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {problem.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // 2. 솔루션 슬라이드
    <div key="solution" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30 mb-4">Solution</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Date Genie AI 솔루션</h2>
          <p className="text-xl text-gray-600">AI 기술과 심리학 이론의 완벽한 결합</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">AI 감정 분석</h3>
                <p className="text-gray-600">정확도 90% 이상의 감정 분석</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>카카오톡 대화 텍스트 분석</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>음성 통화 STT 변환 및 분석</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span>실시간 감정 상태 모니터링</span>
              </li>
            </ul>
          </div>
          
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">연애 조언 전략</h3>
                <p className="text-gray-600">AI 기반 맞춤형 연애 조언</p>
              </div>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>대화 패턴 분석</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>상황별 조언 제공</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span>맞춤형 어프로치 전략 제공</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>,

    // 3. 타겟 시장 슬라이드
    <div key="market" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30 mb-4">Market</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">타겟 시장 분석</h2>
          <p className="text-xl text-gray-600">국내 420만명 데이팅 앱 사용자 대상</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">시장 규모</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">20-30대 인구</span>
                <span className="text-3xl font-bold text-blue-500">850만명</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">데이팅 앱 사용자</span>
                <span className="text-3xl font-bold text-green-500">420만명</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">타겟 시장 규모</span>
                <span className="text-3xl font-bold text-purple-500">₩650억</span>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">핵심 타겟 고객</h3>
            <div className="space-y-4">
              {TARGET_CUSTOMERS.map((target, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${target.color} rounded-xl flex items-center justify-center`}>
                    {target.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{target.title}</h4>
                    <p className="text-sm text-gray-600">{target.description}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-300">
                    {target.percentage}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,

    // 4. 핵심 기능 슬라이드
    <div key="features" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-purple-500/20 text-purple-600 border-purple-500/30 mb-4">Features</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">핵심 기능</h2>
          <p className="text-xl text-gray-600">요구사항 정의서 기반 6대 핵심 기능</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEY_FEATURES.map((feature, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 group hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <Badge className="bg-green-100 text-green-700 border-green-300 text-xs">
                  {feature.accuracy}
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{feature.description}</p>
              <div className="space-y-1">
                {feature.features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-600 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // 5. 기술 스택 슬라이드
    <div key="technology" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-indigo-500/20 text-indigo-600 border-indigo-500/30 mb-4">Technology</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">기술 스택</h2>
          <p className="text-xl text-gray-600">검증된 최신 기술을 활용한 안정적인 서비스</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              category: "Frontend", 
              techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap"], 
              color: "from-blue-500 to-cyan-500",
              icons: [HTML5Logo, CSS3Logo, JavaScriptLogo, LayoutGrid]
            },
            { 
              category: "Backend", 
              techs: ["JSP/Servlet", "Oracle DB", "Tomcat", "JDBC"], 
              color: "from-green-500 to-emerald-500",
              icons: [JavaLogo, OracleLogo, Server, Workflow]
            },
            { 
              category: "AI/ML", 
              techs: ["Google Gemini", "Google STT", "Python", "matplotlib"], 
              color: "from-purple-500 to-pink-500",
              icons: [GeminiLogo, WhisperLogo, PythonLogo, MatplotlibLogo]
            },
            { 
              category: "Tools", 
              techs: ["GitHub", "GitKraken", "Eclipse IDE", "VS Code"], 
              color: "from-orange-500 to-red-500",
              icons: [GitHubLogo, GitFork, Code2, Code2]
            }
          ].map((stack, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 text-center">
              <div className={`w-16 h-16 ${stack.category === 'AI/ML' || stack.category === 'Frontend' || stack.category === 'Backend' ? 'bg-white border border-gray-200' : `bg-gradient-to-br ${stack.color}`} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {React.createElement(stack.icons[0], { 
                  className: stack.category === 'AI/ML' || stack.category === 'Frontend' || stack.category === 'Backend' ? "w-10 h-10" : "w-8 h-8 text-white" 
                })}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">{stack.category}</h3>
              <div className="grid grid-cols-2 gap-2">
                {stack.techs.map((tech, idx) => {
                  const IconComponent = stack.icons[idx];
                  return (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white/50 rounded-lg">
                      {React.createElement(IconComponent, { className: "w-4 h-4 text-gray-600" })}
                      <span className="text-xs text-gray-700">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // 6. 사용자 여정 슬라이드
    <div key="user-journey" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-teal-500/20 text-teal-600 border-teal-500/30 mb-4">User Journey</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">사용자 여정</h2>
          <p className="text-xl text-gray-600">5단계로 완성되는 맞춤형 연애 전략</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: "1", title: "회원가입", description: "소셜 로그인으로 간편 가입", icon: <Users className="w-6 h-6" /> },
            { step: "2", title: "파일 업로드", description: "카톡 대화, 음성 파일 업로드", icon: <Headphones className="w-6 h-6" /> },
            { step: "3", title: "AI 분석", description: "감정 분석 및 패턴 인식", icon: <Brain className="w-6 h-6" /> },
            { step: "4", title: "결과 확인", description: "썸 가능성과 분석 결과", icon: <Heart className="w-6 h-6" /> },
            { step: "5", title: "전략 제공", description: "AI 맞춤 연애 전략", icon: <Target className="w-6 h-6" /> }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 mb-4 group hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {index < 4 && (
                <ChevronRight className="w-6 h-6 text-gray-400 mx-auto hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>,

    // 7. UI/UX 디자인 슬라이드
    <div key="design" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-pink-500/20 text-pink-600 border-pink-500/30 mb-4">Design</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">UI/UX 디자인</h2>
          <p className="text-xl text-gray-600">감성적이고 직관적인 사용자 경험</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "색상 시스템", description: "화이트-핑크-블루 그라데이션", color: "from-pink-500 to-blue-500" },
            { title: "글래스모피즘", description: "투명하고 세련된 UI 요소", color: "from-blue-500 to-purple-500" },
            { title: "반응형 디자인", description: "모바일·PC 최적화", color: "from-purple-500 to-pink-500" },
            { title: "직관적 네비게이션", description: "사용자 친화적 인터페이스", color: "from-green-500 to-blue-500" },
            { title: "감정 표현", description: "연애 감정을 표현하는 아이콘", color: "from-orange-500 to-pink-500" },
            { title: "접근성", description: "모든 사용자를 위한 디자인", color: "from-indigo-500 to-purple-500" }
          ].map((design, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6 text-center group hover:bg-white/20 transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${design.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{design.title}</h3>
              <p className="text-gray-600 text-sm">{design.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // 8. 개발 일정 슬라이드
    <div key="schedule" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-yellow-500/20 text-yellow-600 border-yellow-500/30 mb-4">Schedule</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">개발 일정</h2>
          <p className="text-xl text-gray-600">체계적인 6개월 개발 계획</p>
        </div>
        
        <div className="space-y-6">
          {[
            { phase: "1단계", period: "1-2개월", title: "기획 및 설계", tasks: ["요구사항 분석", "시스템 아키텍처 설계", "UI/UX 디자인", "기술 스택 선정"] },
            { phase: "2단계", period: "2-3개월", title: "프론트엔드 개발", tasks: ["React 애플리케이션 구축", "반응형 UI 구현", "사용자 인터페이스 개발", "컴포넌트 라이브러리 구축"] },
            { phase: "3단계", period: "3-4개월", title: "백엔드 및 AI 개발", tasks: ["서버 API 개발", "데이터베이스 설계", "AI 모델 개발 및 훈련", "STT 시스템 구축"] },
            { phase: "4단계", period: "4-5개월", title: "통합 및 테스트", tasks: ["시스템 통합", "성능 최적화", "보안 강화", "사용성 테스트"] },
            { phase: "5단계", period: "5-6개월", title: "배포 및 운영", tasks: ["클라우드 배포", "모니터링 시스템", "사용자 피드백 수집", "서비스 개선"] }
          ].map((phase, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
                  <p className="text-gray-600">{phase.period}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {phase.tasks.map((task, idx) => (
                  <Badge key={idx} variant="outline" className="p-2 text-center">
                    {task}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // 9. 성능 & 보안 슬라이드
    <div key="performance" className="h-full flex items-start justify-center pt-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <Badge className="bg-red-500/20 text-red-600 border-red-500/30 mb-4">Performance</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">성능 & 보안</h2>
          <p className="text-xl text-gray-600">요구사항 정의서의 모든 성능 지표 달성</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">성능 지표</h3>
            <div className="space-y-6">
              {PERFORMANCE_METRICS.map((metric, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    {metric.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-blue-600">{metric.metric}</span>
                      <span className="font-medium text-gray-800">{metric.label}</span>
                    </div>
                    <p className="text-sm text-gray-600">목표: {metric.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">보안 기능</h3>
            <div className="space-y-4">
              {SECURITY_FEATURES.map((security, index) => (
                <div key={index} className="border border-red-200 rounded-lg p-4 bg-red-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-red-800">{security.title}</h4>
                    <Badge className={
                      security.implementation === "완료" ? "bg-green-100 text-green-700 border-green-300" :
                      "bg-orange-100 text-orange-700 border-orange-300"
                    }>
                      {security.implementation}
                    </Badge>
                  </div>
                  <p className="text-red-700 text-sm mb-2">{security.description}</p>
                  <div className="text-xs text-red-600">우선순위: {security.priority}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,

    // 10. 감사 인사 슬라이드
    <div key="thanks" className="h-full flex items-start justify-center pt-20">
      <div className="text-center">
        <div className="w-32 h-32 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-12 animate-pulse">
          <Heart className="w-16 h-16 text-white" />
        </div>
        
        <h2 className="text-6xl font-bold text-gray-800 mb-8">감사합니다!</h2>
        <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Date Genie AI가 만들어갈 새로운 연애의 미래에 함께해주세요.
          <br />
          AI 기술로 더 행복한 관계를 만드는 여정이 시작됩니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">AI 기술</h3>
            <p className="text-gray-600">90%+ 정확도의 감정 분석으로 더 정확한 연애 조언</p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">맞춤 전략</h3>
            <p className="text-gray-600">AI 기반 개인화된 연애 전략으로 성공률 향상</p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">안전한 서비스</h3>
            <p className="text-gray-600">개인정보 보호와 데이터 보안을 최우선으로</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Badge className="bg-pink-100 text-pink-700 border-pink-300 px-8 py-4 text-xl">
              팀 꿈쩍
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 border-blue-300 px-8 py-4 text-xl">
              2025.08.11
            </Badge>
          </div>
          
          <p className="text-lg text-gray-500">
            연애의 새로운 패러다임, Date Genie AI와 함께하세요 ✨
          </p>
        </div>
      </div>
    </div>
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 overflow-hidden no-scrollbar presentation-container">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full overflow-hidden no-scrollbar presentation-slide">
        {/* 현재 슬라이드 표시 */}
        {slides[currentSlide]}
        
        {/* 네비게이션 컨트롤 */}
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
                    onClick={() => setCurrentSlide(index)}
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

        {/* 슬라이드 카운터 */}
        <div className="absolute right-8 top-4 z-20">
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl shadow-xl px-4 py-2">
            <span className="text-gray-700 font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
