'use client';

import { useState, useEffect, useCallback } from 'react';
import { Presentation } from './Presentation';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Maximize, 
  Minimize, 
  Play, 
  Pause, 
  Monitor, 
  Clock,
  Eye,
  EyeOff
} from 'lucide-react';

export function PresentationMode() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [startTime, setStartTime] = useState<Date | null>(null);

  // 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 풀스크린 상태 감지
  useEffect(() => {
    const handleFullscreenChange = () => {
      try {
        setIsFullscreen(!!document.fullscreenElement);
      } catch (error) {
        // Handle any errors when checking fullscreen state
        console.info('Could not check fullscreen state');
        setIsFullscreen(false);
      }
    };

    // Only add event listener if the API is available
    if (typeof document.addEventListener === 'function') {
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      return () => {
        try {
          document.removeEventListener('fullscreenchange', handleFullscreenChange);
        } catch (error) {
          // Cleanup error - ignore
        }
      };
    }
  }, []);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isPresenting) return;

      // 입력 필드에서는 키보드 이벤트 무시
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
        case 'Enter':
          event.preventDefault();
          // 다음 슬라이드로 이동
          window.dispatchEvent(new CustomEvent('nextSlide'));
          break;
        case 'ArrowLeft':
          event.preventDefault();
          // 이전 슬라이드로 이동
          window.dispatchEvent(new CustomEvent('prevSlide'));
          break;
        case 'Home':
          event.preventDefault();
          // 첫 슬라이드로
          window.dispatchEvent(new CustomEvent('firstSlide'));
          break;
        case 'End':
          event.preventDefault();
          // 마지막 슬라이드로
          window.dispatchEvent(new CustomEvent('lastSlide'));
          break;
        case 'Escape':
          event.preventDefault();
          handleStopPresentation();
          break;
        case 'f':
        case 'F':
          if (!event.ctrlKey && !event.metaKey) {
            event.preventDefault();
            toggleFullscreen();
          }
          break;
        case 'n':
        case 'N':
          if (!event.ctrlKey && !event.metaKey) {
            event.preventDefault();
            setShowNotes(!showNotes);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isPresenting, showNotes]);

  const toggleFullscreen = useCallback(async () => {
    try {
      // Check if fullscreen API is supported
      if (!document.documentElement.requestFullscreen && !document.exitFullscreen) {
        console.info('Fullscreen API is not supported in this environment');
        return;
      }

      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (error: any) {
      // Silently handle fullscreen errors - they are expected in many environments
      if (error?.name === 'NotAllowedError' || error?.message?.includes('permissions policy')) {
        console.info('Fullscreen mode not available due to browser policies - continuing in windowed mode');
      } else {
        console.info('Fullscreen API unavailable:', error?.message || 'Unknown error');
      }
      // Continue normally without throwing
    }
  }, []);

  const handleStartPresentation = () => {
    setIsPresenting(true);
    setStartTime(new Date());
    
    // 약간의 딜레이 후 풀스크린 모드 진입 시도 (선택사항)
    setTimeout(() => {
      // Check if fullscreen is supported and not already active
      if (!document.fullscreenElement && 
          document.documentElement.requestFullscreen && 
          typeof document.documentElement.requestFullscreen === 'function') {
        // Attempt fullscreen without throwing errors if it fails
        toggleFullscreen();
      }
    }, 100);
  };

  const handleStopPresentation = () => {
    setIsPresenting(false);
    setStartTime(null);
    setShowNotes(false);
    
    if (document.fullscreenElement && 
        document.exitFullscreen && 
        typeof document.exitFullscreen === 'function') {
      try {
        document.exitFullscreen().catch(() => {
          // Silently handle exit fullscreen errors
          console.info('Could not exit fullscreen mode - browser handled it automatically');
        });
      } catch (error) {
        // Handle synchronous errors as well
        console.info('Fullscreen exit not available');
      }
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getElapsedTime = () => {
    if (!startTime) return '00:00';
    const elapsed = Math.floor((currentTime.getTime() - startTime.getTime()) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const presenterNotes = [
    "발표 팁: 자연스럽게 시작하세요",
    "문제점 강조: 기존 연애 상담의 한계", 
    "솔루션 차별점: AI 기반 정밀 분석",
    "시장 규모: 420만명, 650억 규모",
    "핵심 기능: 6가지 기능 모두 중요",
    "기술 스택: 검증된 기술들 조합",
    "사용자 여정: 간단하고 직관적",
    "UI/UX: 감성적이고 실용적",
    "개발 일정: 현실적이고 체계적",
    "성능/보안: 요구사항 모두 충족",
    "마무리: 비전과 가치 강조"
  ];

  if (isPresenting) {
    return (
      <div className="relative w-full h-screen bg-black overflow-hidden no-scrollbar presentation-mode">
        {/* 발표��� 도구 오버레이 */}
        {!isFullscreen && (
          <div className="absolute left-6 right-6 z-50 flex justify-between items-center" style={{ top: '12px' }}>
            <div className="flex items-center gap-4">
              <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
                <Play className="w-3 h-3 mr-1" />
                발표 중
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30">
                <Clock className="w-3 h-3 mr-1" />
                {getElapsedTime()}
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-600 border-purple-500/30">
                <Monitor className="w-3 h-3 mr-1" />
                {formatTime(currentTime)}
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setShowNotes(!showNotes)}
                variant="outline"
                size="sm"
                className="bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                {showNotes ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
              <Button
                onClick={toggleFullscreen}
                variant="outline"
                size="sm"
                className="bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </Button>
              <Button
                onClick={handleStopPresentation}
                variant="outline"
                size="sm"
                className="bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <Pause className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}



        {/* 프레젠테이션 본체 */}
        <div className="w-full h-full">
          <Presentation />
        </div>


      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white" style={{ paddingTop: '80px' }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Date Genie AI</h1>
          <h2 className="text-2xl text-gray-600 mb-8">기획 발표 프레젠테이션</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <h3 className="font-bold text-gray-800 mb-2">발표 시간</h3>
              <p className="text-gray-600">약 15-20분 소요</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <h3 className="font-bold text-gray-800 mb-2">슬라이드 수</h3>
              <p className="text-gray-600">총 11개 슬라이드</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <h3 className="font-bold text-gray-800 mb-2">팀명</h3>
              <p className="text-gray-600">팀 꿈쩍</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">발표 준비</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-gray-700 mb-4">키보드 단축키</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>다음 슬라이드:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded">→ 또는 Space</code>
                </div>
                <div className="flex justify-between">
                  <span>이전 슬라이드:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded">←</code>
                </div>
                <div className="flex justify-between">
                  <span>풀스크린:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded">F</code>
                </div>
                <div className="flex justify-between">
                  <span>발표자 노트:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded">N</code>
                </div>
                <div className="flex justify-between">
                  <span>발표 종료:</span>
                  <code className="bg-gray-100 px-2 py-1 rounded">ESC</code>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-700 mb-4">발표 팁</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• 각 슬라이드마다 발표자 노트가 제공됩니다</p>
                <p>• 시간 표시와 경과 시간을 확인할 수 있습니다</p>
                <p>• 풀스크린 모드에서 가장 효과적입니다</p>
                <p>• ESC 키로 언제든 발표를 중단할 수 있습니다</p>
                <p>• 프레젠테이션 시작 시 자동으로 풀스크린됩니다</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">💡 발표 팁</h4>
            <div className="text-sm text-blue-700 space-y-1">
              <p>• 풀스크린 기능이 지원되지 않더라도 발표 모드는 정상 작동합니다</p>
              <p>• 프로젝터 연결 시 브라우저를 최대화하여 사용하세요</p>
              <p>• F11 키로 브라우저 풀스크린을 직접 활성화할 수 있습니다</p>
              <p>• 키보드 단축키는 풀스크린 여부와 관계없이 동일하게 작동합니다</p>
              <p>• 일부 환경에서는 보안 정책으로 인해 자동 풀스크린이 제한될 수 있습니다</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={handleStartPresentation}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-12 py-4 text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            발표 시작하기
          </Button>
          
          <p className="text-gray-500 mt-4 text-sm">
            발표 시작 시 풀스크린 모드 전환을 시도하며, 지원되지 않는 경우 창 모드로 진행됩니다
          </p>
        </div>
      </div>
    </div>
  );
}