'use client';

import { useState } from 'react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Eye, Presentation, List } from 'lucide-react';

// Import views
import { AllSlidesView } from './components/AllSlidesView';
import { Presentation as SlideMode } from './components/Presentation';
import { PresentationMode } from './components/PresentationMode';

type ViewMode = 'slide-mode' | 'presentation';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('slide-mode');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/50 shadow-sm h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DG</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Date Genie AI</h1>
                <p className="text-sm text-gray-600">기획 발표 프레젠테이션</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => setCurrentView('slide-mode')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentView === 'slide-mode'
                    ? 'bg-gray-900 text-white shadow-lg hover:bg-gray-800 active:bg-gray-950'
                    : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100'
                }`}
              >
                <Eye className="w-4 h-4" />
                슬라이드 모드
              </Button>
              <Button
                size="sm"
                onClick={() => setCurrentView('presentation')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentView === 'presentation'
                    ? 'bg-gray-900 text-white shadow-lg hover:bg-gray-800 active:bg-gray-950'
                    : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100'
                }`}
              >
                <Presentation className="w-4 h-4" />
                발표 모드
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {currentView === 'slide-mode' && <SlideMode />}
        {currentView === 'presentation' && <PresentationMode />}
      </main>
        {/* 발표/슬라이드 모드에서도 레이아웃 틀은 유지 */}
        <footer className={`bg-white/50 backdrop-blur-sm border-t border-gray-200/50 py-6`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge className="bg-pink-100 text-pink-700 border-pink-300">
                  팀 꿈쩍
                </Badge>
                <Badge className="bg-blue-100 text-blue-700 border-blue-300">
                  2025.08.11
                </Badge>
              </div>
              <p className="text-sm text-gray-500">
                Date Genie AI - AI 기반 연애 상담 서비스
              </p>
            </div>
          </div>
        </footer>
    </div>
  );
}