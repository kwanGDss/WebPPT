'use client';

import { useState } from 'react';
import { Heart, Mail, Lock, User, ArrowLeft, Eye, EyeOff, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import type { PageType, User as UserType } from '../types';

interface LoginPageProps {
  mode: 'login' | 'register';
  onLogin: (user: UserType) => void;
  onNavigate: (page: PageType) => void;
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export function LoginPage({ mode, onLogin, onNavigate }: LoginPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 간단한 유효성 검사
    if (mode === 'register') {
      if (formData.password !== formData.confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        setIsLoading(false);
        return;
      }
      if (!acceptedTerms) {
        alert('이용약관에 동의해주세요.');
        setIsLoading(false);
        return;
      }
    }

    // 실제로는 서버와 통신
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 가짜 사용자 데이터 생성
    const userData: UserType = {
      id: '1',
      email: formData.email,
      name: formData.name || formData.email.split('@')[0]
    };

    onLogin(userData);
    setIsLoading(false);
  };

  const isRegister = mode === 'register';

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-8 text-gray-700 hover:text-purple-600"
          onClick={() => onNavigate('main')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          돌아가기
        </Button>

        <GlassCard className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {isRegister ? 'Date Genie AI 가입' : 'Date Genie AI 로그인'}
            </h1>
            <p className="text-gray-600">
              {isRegister 
                ? 'AI 기반 연애 분석 서비스를 시작해보세요' 
                : '다시 만나서 반가워요!'
              }
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegister && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">이름</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="이름을 입력하세요"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="pl-10 bg-white/50 border-white/50 focus:border-purple-300"
                    required={isRegister}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">이메일</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="pl-10 bg-white/50 border-white/50 focus:border-purple-300"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">비밀번호</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호를 입력하세요"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="pl-10 pr-10 bg-white/50 border-white/50 focus:border-purple-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {isRegister && (
                <p className="text-xs text-gray-500">8자 이상, 영문/숫자/특수문자 포함</p>
              )}
            </div>

            {isRegister && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700">비밀번호 확인</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="비밀번호를 다시 입력하세요"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="pl-10 pr-10 bg-white/50 border-white/50 focus:border-purple-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            )}

            {isRegister && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={acceptedTerms}
                    onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
                  />
                  <Label htmlFor="terms" className="text-sm text-gray-600">
                    이용약관 및 개인정보처리방침에 동의합니다
                  </Label>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">개인정보 보호 정책</p>
                      <p>모든 데이터는 최고 수준의 암호화로 보호되며, 분석 완료 후 즉시 삭제됩니다. 개인정보는 절대 제3자와 공유되지 않습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading || (isRegister && !acceptedTerms)}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 py-6 text-lg"
            >
              {isLoading ? '처리 중...' : (isRegister ? '회원가입' : '로그인')}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              {isRegister ? '이미 계정이 있으신가요?' : '아직 계정이 없으신가요?'}
              <button
                onClick={() => onNavigate(isRegister ? 'login' : 'register')}
                className="ml-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                {isRegister ? '로그인' : '회원가입'}
              </button>
            </p>
          </div>

          {!isRegister && (
            <div className="mt-4 text-center">
              <button className="text-sm text-gray-500 hover:text-gray-700">
                비밀번호를 잊으셨나요?
              </button>
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}