'use client';

import { useState, useRef } from 'react';
import { Upload, FileText, Mic, ArrowLeft, AlertCircle, CheckCircle, Brain, Loader2, Shield, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import type { PageType, User, AnalysisData } from '../types';

interface UploadPageProps {
  user: User | null;
  onAnalysisComplete: (analysis: AnalysisData) => void;
  onNavigate: (page: PageType) => void;
}

interface UploadedFile {
  file: File;
  type: 'chat' | 'audio';
  status: 'uploaded' | 'processing' | 'completed' | 'error';
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export function UploadPage({ user, onAnalysisComplete, onNavigate }: UploadPageProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [partnerName, setPartnerName] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const chatInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (files: FileList | null, type: 'chat' | 'audio') => {
    if (!files) return;

    const file = files[0];
    if (!file) return;

    // 파일 형식 검증
    if (type === 'chat' && !file.name.endsWith('.txt')) {
      alert('카카오톡 대화는 .txt 파일만 업로드 가능합니다.');
      return;
    }
    if (type === 'audio' && !['audio/mpeg', 'audio/wav', 'audio/mp3'].includes(file.type)) {
      alert('음성 파일은 .mp3 또는 .wav 파일만 업로드 가능합니다.');
      return;
    }

    const newFile: UploadedFile = {
      file,
      type,
      status: 'uploaded'
    };

    setUploadedFiles(prev => [...prev.filter(f => f.type !== type), newFile]);
  };

  const handleDrop = (e: React.DragEvent, type: 'chat' | 'audio') => {
    e.preventDefault();
    setDragOver(false);
    handleFileUpload(e.dataTransfer.files, type);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const removeFile = (type: 'chat' | 'audio') => {
    setUploadedFiles(prev => prev.filter(f => f.type !== type));
  };

  const startAnalysis = async () => {
    if (uploadedFiles.length === 0 || !partnerName.trim()) {
      alert('파일을 업로드하고 상대방 이름을 입력해주세요.');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // 분석 진행 시뮬레이션
    const stages = [
      { progress: 20, message: '파일 데이터 전처리 중...' },
      { progress: 40, message: '자연어 처리 분석 중...' },
      { progress: 60, message: '음성 감정 분석 중...' },
      { progress: 80, message: '종합 평가 중...' },
      { progress: 100, message: '분석 완료!' }
    ];

    for (const stage of stages) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setAnalysisProgress(stage.progress);
    }

    // 가짜 분석 결과 생성
    const analysisResult: AnalysisData = {
      id: Date.now().toString(),
      userId: user?.id || '1',
      status: 'completed',
      date: new Date().toISOString(),
      partnerName: partnerName.trim(),
      loveScore: Math.floor(Math.random() * 30) + 70, // 70-100
      emotionCurve: Array.from({ length: 10 }, () => Math.floor(Math.random() * 40) + 30),
      bestMoment: "2024년 11월 15일 오후 9시경",
      loveQuote: "오늘 하루 어땠어? 라는 당신의 따뜻한 관심이 느껴져요 💕",

      confessionTiming: "다음 주말, 둘만의 시간을 가질 때가 최적의 타이밍입니다.",
      conversationBalance: {
        me: Math.floor(Math.random() * 20) + 40,
        partner: Math.floor(Math.random() * 20) + 40
      },
      summary: "전반적으로 긍정적인 관계로 발전하고 있으며, 상대방도 당신에게 호감을 가지고 있는 것으로 분석됩니다.",
      emotionAnalysis: {
        positive: Math.floor(Math.random() * 20) + 60,
        neutral: Math.floor(Math.random() * 15) + 15,
        negative: Math.floor(Math.random() * 10) + 5
      }
    };

    onAnalysisComplete(analysisResult);
    setIsAnalyzing(false);
  };

  const chatFile = uploadedFiles.find(f => f.type === 'chat');
  const audioFile = uploadedFiles.find(f => f.type === 'audio');

  if (isAnalyzing) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <GlassCard className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI 분석 진행 중</h2>
            <p className="text-gray-600 mb-6">
              {partnerName}님과의 관계를 정밀 분석하고 있습니다...
            </p>
            <div className="space-y-3">
              <Progress value={analysisProgress} className="h-3" />
              <p className="text-sm text-gray-500">{analysisProgress}% 완료</p>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-blue-600">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-sm">잠시만 기다려주세요...</span>
            </div>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-4xl mx-auto">
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
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI 연애 분석 시작</h1>
          <p className="text-gray-600">
            카카오톡 대화와 통화 녹음을 업로드하여 AI 기반 관계 분석을 받아보세요
          </p>
        </div>

        {/* Security Notice */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <Shield className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            <strong>개인정보 보호:</strong> 업로드된 모든 파일은 분석 완료 후 즉시 삭제되며, 
            최고 수준의 암호화로 보호됩니다. 제3자와 공유되지 않습니다.
          </AlertDescription>
        </Alert>

        {/* Partner Name Input */}
        <GlassCard className="p-6 mb-8">
          <Label htmlFor="partner-name" className="text-lg font-semibold text-gray-900 mb-4 block">
            상대방 이름 (별명)
          </Label>
          <Input
            id="partner-name"
            type="text"
            placeholder="예: 영희, 민수, 썸남/썸녀 등"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            className="text-lg bg-white/70 border-white/50 focus:border-purple-300"
          />
          <p className="text-sm text-gray-500 mt-2">
            분석 결과에서 사용될 이름입니다. 실명이 아니어도 괜찮습니다.
          </p>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Chat File Upload */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">카카오톡 대화</h3>
                <p className="text-sm text-gray-600">필수 · .txt 파일</p>
              </div>
            </div>

            {chatFile ? (
              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-green-800">{chatFile.file.name}</p>
                      <p className="text-sm text-green-600">
                        {(chatFile.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile('chat')}
                    className="text-red-500 hover:text-red-700"
                  >
                    삭제
                  </Button>
                </div>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragOver ? 'border-purple-400 bg-purple-50' : 'border-gray-300'
                }`}
                onDrop={(e) => handleDrop(e, 'chat')}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">카카오톡 대화 파일(.txt)을 업로드하세요</p>
                <Button
                  variant="outline"
                  onClick={() => chatInputRef.current?.click()}
                  className="mb-2"
                >
                  파일 선택
                </Button>
                <p className="text-xs text-gray-500">또는 파일을 여기로 드래그하세요</p>
              </div>
            )}

            <input
              ref={chatInputRef}
              type="file"
              accept=".txt"
              onChange={(e) => handleFileUpload(e.target.files, 'chat')}
              className="hidden"
            />

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-blue-800">
                  <p className="font-medium mb-1">카카오톡 내보내기 방법:</p>
                  <p>대화방 → 설정(≡) → 대화 내용 내보내기 → 텍스트로 저장</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Audio File Upload */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">통화 녹음</h3>
                <p className="text-sm text-gray-600">선택 · .mp3, .wav 파일</p>
              </div>
            </div>

            {audioFile ? (
              <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-green-800">{audioFile.file.name}</p>
                      <p className="text-sm text-green-600">
                        {(audioFile.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile('audio')}
                    className="text-red-500 hover:text-red-700"
                  >
                    삭제
                  </Button>
                </div>
              </div>
            ) : (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragOver ? 'border-purple-400 bg-purple-50' : 'border-gray-300'
                }`}
                onDrop={(e) => handleDrop(e, 'audio')}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <Mic className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">통화 녹음 파일을 업로드하세요</p>
                <Button
                  variant="outline"
                  onClick={() => audioInputRef.current?.click()}
                  className="mb-2"
                >
                  파일 선택
                </Button>
                <p className="text-xs text-gray-500">또는 파일을 여기로 드래그하세요</p>
              </div>
            )}

            <input
              ref={audioInputRef}
              type="file"
              accept=".mp3,.wav,audio/*"
              onChange={(e) => handleFileUpload(e.target.files, 'audio')}
              className="hidden"
            />

            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-amber-800">
                  <p className="font-medium mb-1">통화 녹음 안내:</p>
                  <p>상대방 동의 하에 녹음된 파일만 업로드해주세요. 음성 분석은 더 정확한 감정 분석에 도움을 줍니다.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Analysis Button */}
        <div className="text-center">
          <Button
            onClick={startAnalysis}
            disabled={!chatFile || !partnerName.trim()}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 px-12 py-6 text-xl"
          >
            <Brain className="w-6 h-6 mr-3" />
            AI 분석 시작하기
          </Button>
          
          {(!chatFile || !partnerName.trim()) && (
            <p className="text-sm text-gray-500 mt-3">
              카카오톡 대화 파일과 상대방 이름을 입력해주세요
            </p>
          )}
        </div>

        {/* Features Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            AI 분석으로 확인할 수 있는 것들
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "썸 가능성 점수", desc: "0-100점 정밀 측정", color: "from-pink-500 to-red-500" },
              { title: "감정 변화 곡선", desc: "시간별 감정 추이", color: "from-blue-500 to-cyan-500" },

              { title: "최적 고백 타이밍", desc: "성공률 높은 시점", color: "from-purple-500 to-pink-500" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}