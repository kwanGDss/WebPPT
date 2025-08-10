import { Clock, Users, Trophy, Award, Brain, Monitor, Database, BarChart } from 'lucide-react';
import { Slide } from '../PresentationComponents';
import { Badge } from '../../ui/badge';
import { TEAM_MEMBERS } from '../SlideData';

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/80 border border-white/50 rounded-2xl shadow-xl ${className}`}>
      {children}
    </div>
  );
}

export function TeamSlide() {
  return (
    <Slide>
      <div className="max-w-7xl w-full px-6 z-10">
        <div className="text-center mb-16">
          <Badge className="bg-indigo-500/20 text-indigo-600 border-indigo-500/30 mb-4">Team</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">팀 소개</h2>
          <p className="text-xl text-gray-600">전문성과 협업으로 완성하는 Date Genie AI</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TEAM_MEMBERS.map((member, index) => (
            <GlassCard key={index} className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  {member.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.background}</p>
                  <div className="text-xs text-gray-500 mb-4">{member.achievement}</div>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">주요 담당 업무</h4>
                <div className="space-y-3">
                  {member.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2" />
                      <span className="text-sm text-gray-700 leading-relaxed">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* 팀 역량 및 협업 구조 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">팀 역량</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: "24년+", label: "총 개발 경력", icon: <Clock className="w-5 h-5" /> },
                { stat: "5명", label: "전문 개발자", icon: <Users className="w-5 h-5" /> },
                { stat: "5개+", label: "완료 프로젝트", icon: <Trophy className="w-5 h-5" /> },
                { stat: "100%", label: "역할 분담률", icon: <Award className="w-5 h-5" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold text-indigo-500">{stat.stat}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">협업 구조</h3>
            <div className="space-y-4">
              {[
                {
                  role: "프로젝트 관리",
                  description: "진영서 팀장이 전체 일정과 품질을 총괄 관리",
                  icon: <Trophy className="w-5 h-5" />
                },
                {
                  role: "프론트엔드",
                  description: "최상용이 사용자 경험과 인터페이스를 담당",
                  icon: <Monitor className="w-5 h-5" />
                },
                {
                  role: "AI 개발",
                  description: "정관영이 핵심 AI 분석 기능을 구현",
                  icon: <Brain className="w-5 h-5" />
                },
                {
                  role: "데이터 시각화",
                  description: "장상연이 감정 곡선과 점수 시각화를 담당",
                  icon: <BarChart className="w-5 h-5" />
                },
                {
                  role: "백엔드",
                  description: "김진관이 시스템 구조와 데이터를 관리",
                  icon: <Database className="w-5 h-5" />
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{item.role}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* 아이디어 주제: 텍스트·음성을 통한 대화 분석 기반 연애 가능성 예측 서비스 */}
        <GlassCard className="p-12 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">아이디어 주제</h3>
          <p className="text-2xl text-gray-700 mb-8 font-medium">
            텍스트·음성을 통한 대화 분석 기반
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              연애 가능성 예측 서비스
            </span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">AI 분석</div>
              <div className="text-gray-600">대화 패턴 분석을 통한 감정 인식</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">맞춤 전략</div>
              <div className="text-gray-600">개인화된 연애 조언</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">실용성</div>
              <div className="text-gray-600">실제 사용 가능한 웹 서비스 구현</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </Slide>
  );
}