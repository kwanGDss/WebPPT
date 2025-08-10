'use client';

import { useState } from 'react';
import { User, Settings, History, Trash2, Eye, ArrowLeft, Calendar, Heart, TrendingUp, LogOut, Edit3, Camera, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Alert, AlertDescription } from './ui/alert';
import type { PageType, User as UserType, AnalysisData } from '../types';

interface MyPageProps {
  user: UserType | null;
  analysisResults: AnalysisData[];
  onNavigate: (page: PageType) => void;
  onLogout: () => void;
  onViewAnalysis: (analysis: AnalysisData) => void;
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export function MyPage({ user, analysisResults, onNavigate, onLogout, onViewAnalysis }: MyPageProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'history' | 'settings'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    bio: ''
  });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h2>
          <Button onClick={() => onNavigate('login')}>로그인하기</Button>
        </div>
      </div>
    );
  }

  const handleProfileSave = () => {
    // 실제로는 서버에 저장
    setIsEditing(false);
    alert('프로필이 업데이트되었습니다.');
  };

  const handleDeleteAnalysis = (id: string) => {
    // 실제로는 서버에서 삭제
    setShowDeleteConfirm(null);
    alert('분석 결과가 삭제되었습니다.');
  };

  const handleAccountDelete = () => {
    if (confirm('정말로 계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
      alert('계정이 삭제되었습니다.');
      onLogout();
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500 bg-green-50 border-green-200';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-500 bg-red-50 border-red-200';
  };

  const averageScore = analysisResults.length > 0 
    ? Math.round(analysisResults.reduce((sum, result) => sum + (result.loveScore || 0), 0) / analysisResults.length)
    : 0;

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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">마이페이지</h1>
              <p className="text-gray-600">{user.name}님의 Date Genie AI 활동</p>
            </div>
            
            <Button
              onClick={() => onNavigate('upload')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0"
            >
              새로운 분석 시작
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <History className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{analysisResults.length}</div>
            <div className="text-sm text-gray-600">총 분석 횟수</div>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{averageScore}점</div>
            <div className="text-sm text-gray-600">평균 썸 점수</div>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {analysisResults.filter(r => (r.loveScore || 0) >= 80).length}
            </div>
            <div className="text-sm text-gray-600">성공 가능성 높음</div>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {new Set(analysisResults.map(r => r.partnerName)).size}
            </div>
            <div className="text-sm text-gray-600">분석한 상대방</div>
          </GlassCard>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-full p-1 border border-white/50">
            {[
              { id: 'profile', label: '프로필', icon: <User className="w-4 h-4" /> },
              { id: 'history', label: '분석 이력', icon: <History className="w-4 h-4" /> },
              { id: 'settings', label: '설정', icon: <Settings className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && (
          <GlassCard className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Picture */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={user.profileImage || undefined} />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                      {user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mt-4">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>

              {/* Profile Form */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">프로필 정보</h3>
                  <Button
                    variant="outline"
                    onClick={() => isEditing ? handleProfileSave() : setIsEditing(true)}
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    {isEditing ? '저장' : '편집'}
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">이름</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                        disabled={!isEditing}
                        className="bg-white/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">이메일</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                          disabled={!isEditing}
                          className="pl-10 bg-white/50"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">전화번호</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                        disabled={!isEditing}
                        className="pl-10 bg-white/50"
                        placeholder="010-0000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">자기소개</Label>
                    <textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full p-3 border border-gray-200 rounded-lg bg-white/50 disabled:bg-gray-50 disabled:text-gray-500"
                      rows={4}
                      placeholder="자신을 소개해보세요..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6">
            {analysisResults.length === 0 ? (
              <GlassCard className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <History className="w-10 h-10 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">아직 분석 결과가 없습니다</h3>
                <p className="text-gray-600 mb-6">
                  첫 번째 AI 연애 분석을 시작해보세요!
                </p>
                <Button
                  onClick={() => onNavigate('upload')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0"
                >
                  분석 시작하기
                </Button>
              </GlassCard>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {analysisResults.map((result) => (
                  <GlassCard key={result.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {result.partnerName}님과의 분석
                          </h3>
                          <p className="text-sm text-gray-600">
                            {result.date ? new Date(result.date).toLocaleDateString('ko-KR') : '날짜 없음'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onViewAnalysis(result)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowDeleteConfirm(result.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">썸 가능성 점수</span>
                        <Badge className={`${getScoreColor(result.loveScore || 0)}`}>
                          {result.loveScore || 0}점
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-1">한줄 요약</div>
                        <p className="text-sm text-gray-800 leading-relaxed line-clamp-2">
                          {result.summary}
                        </p>
                      </div>
                      
                      <div>
                        <div className="text-sm text-gray-600 mb-1">설렘 포인트</div>
                        <p className="text-sm text-gray-800 italic line-clamp-1">
                          "{result.loveQuote}"
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onViewAnalysis(result)}
                        className="flex-1"
                      >
                        상세 보기
                      </Button>
                    </div>

                    {/* Delete Confirmation Modal */}
                    {showDeleteConfirm === result.id && (
                      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl p-6 max-w-sm mx-4">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            분석 결과 삭제
                          </h4>
                          <p className="text-gray-600 mb-6">
                            {result.partnerName}님과의 분석 결과를 정말 삭제하시겠습니까?
                          </p>
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              onClick={() => setShowDeleteConfirm(null)}
                              className="flex-1"
                            >
                              취소
                            </Button>
                            <Button
                              onClick={() => handleDeleteAnalysis(result.id)}
                              className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                            >
                              삭제
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </GlassCard>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            {/* Account Settings */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">계정 설정</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <div className="font-medium text-gray-900">이메일 알림</div>
                    <div className="text-sm text-gray-600">분석 완료 시 이메일로 알림을 받습니다</div>
                  </div>
                  <Button variant="outline" size="sm">설정</Button>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <div className="font-medium text-gray-900">데이터 보안</div>
                    <div className="text-sm text-gray-600">분석 완료 후 파일 자동 삭제</div>
                  </div>
                  <Badge className="bg-green-50 text-green-700 border-green-300">활성화</Badge>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <div className="font-medium text-gray-900">비밀번호 변경</div>
                    <div className="text-sm text-gray-600">계정 보안을 위해 정기적으로 변경해주세요</div>
                  </div>
                  <Button variant="outline" size="sm">변경</Button>
                </div>
              </div>
            </GlassCard>

            {/* Privacy & Security */}
            <GlassCard className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">개인정보 및 보안</h3>
              <Alert className="mb-4">
                <AlertDescription>
                  Date Genie AI는 사용자의 개인정보를 최고 수준의 보안으로 보호합니다. 
                  업로드된 모든 파일은 분석 완료 후 즉시 삭제되며, 제3자와 공유되지 않습니다.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <div className="font-medium text-gray-900">개인정보 처리방침</div>
                    <div className="text-sm text-gray-600">개인정보 수집 및 이용에 대한 안내</div>
                  </div>
                  <Button variant="outline" size="sm">보기</Button>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <div className="font-medium text-gray-900">서비스 이용약관</div>
                    <div className="text-sm text-gray-600">Date Genie AI 서비스 이용 약관</div>
                  </div>
                  <Button variant="outline" size="sm">보기</Button>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-gray-900">내 데이터 다운로드</div>
                    <div className="text-sm text-gray-600">개인정보 및 분석 결과 다운로드</div>
                  </div>
                  <Button variant="outline" size="sm">요청</Button>
                </div>
              </div>
            </GlassCard>

            {/* Danger Zone */}
            <GlassCard className="p-6 border-red-200">
              <h3 className="text-lg font-bold text-red-700 mb-4">위험 구역</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-red-200">
                  <div>
                    <div className="font-medium text-red-700">모든 분석 결과 삭제</div>
                    <div className="text-sm text-red-600">저장된 모든 분석 결과를 삭제합니다</div>
                  </div>
                  <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50">
                    삭제
                  </Button>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <div className="font-medium text-red-700">계정 삭제</div>
                    <div className="text-sm text-red-600">계정과 모든 데이터가 영구적으로 삭제됩니다</div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAccountDelete}
                    className="border-red-300 text-red-700 hover:bg-red-50"
                  >
                    계정 삭제
                  </Button>
                </div>
              </div>
            </GlassCard>

            {/* Logout */}
            <div className="text-center pt-6">
              <Button
                onClick={onLogout}
                variant="outline"
                className="text-gray-600 hover:text-gray-800"
              >
                <LogOut className="w-4 h-4 mr-2" />
                로그아웃
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}