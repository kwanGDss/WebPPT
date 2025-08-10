import { 
  Heart, MessageCircle, Mic, Brain, TrendingUp, Users, Zap, Shield, 
  BarChart3, Target, Sparkles, CheckCircle, Globe, Code, Smartphone, 
  DollarSign, Trophy, Star, Clock, Mail, Lightbulb, PieChart, Briefcase, 
  Award, Rocket, Building, Monitor, Database, Settings, User, Calendar, 
  Upload, Download, Share2, Lock, Cpu, LineChart, FileText, Headphones, 
  Map, Eye, PlayCircle, ArrowRight, Layers, Server, Cloud, GitBranch,
  Activity, UserCheck, ShieldCheck, Timer, Gauge, TrendingDown
} from 'lucide-react';

export const PROBLEM_ISSUES = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "텍스트 소통의 한계",
    problem: "카카오톡 메시지만으로는 상대방의 진짜 감정을 파악하기 어려움",
    stat: "95%의 사람들이 경험",
    impact: "오해와 갈등으로 인한 관계 파탄",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "주관적 해석의 위험",
    problem: "개인의 감정 상태에 따른 편향된 메시지 해석",
    stat: "연애 실패의 67%가 소통 문제",
    impact: "잘못된 판단으로 인한 기회 상실",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "과학적 전략�� 부재",
    problem: "체계적이고 데이터 기반의 연애 가이드라인 부족",
    stat: "80%가 감에 의존한 연애",
    impact: "시행착오 반복과 자신감 하락",
    color: "from-yellow-500 to-orange-500"
  }
];

export const TARGET_CUSTOMERS = [
  {
    icon: <User className="w-6 h-6" />,
    title: "연애 초보자",
    description: "연애 경험이 적어 체계적인 가이드가 필요한 20-30대",
    percentage: "40%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "관계 개선 희망자",
    description: "현재 관계를 더 발전시키고 싶은 연인들",
    percentage: "35%",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "데이터 신뢰형",
    description: "과학적 근거와 객관적 분석을 선호하는 사용자",
    percentage: "25%",
    color: "from-purple-500 to-pink-500"
  }
];

export const KEY_FEATURES = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: "파일 업로드",
    description: ".txt/.mp3/.wav 파일을 안전하게 업로드",
    features: ["드래그 앤 드롭 지원", "파일 형식 자동 검증", "AES-256 암호화 저장"],
    color: "from-blue-500 to-cyan-500",
    accuracy: "99%"
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "STT 변환",
    description: "Google Whisper 기반 음성-텍스트 변환",
    features: ["95% 고정밀 변환", "한국어 특화 모델", "실시간 처리 지원"],
    color: "from-green-500 to-emerald-500",
    accuracy: "95%"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "감정 분석",
    description: "Google Gemini AI 기반 감정 흐름 분석",
    features: ["감정 곡선 시각화", "호감도 점수 측정", "대화 패턴 인식"],
    color: "from-purple-500 to-violet-500",
    accuracy: "90%"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "연애 조언",
    description: "AI 기반 맞춤형 연애 전략 제공",
    features: ["상황별 분석 리포트", "실행 가능한 전략", "단계별 가이드"],
    color: "from-pink-500 to-rose-500",
    accuracy: "88%"
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "SNS 공유",
    description: "분석 결과를 SNS 카드로 공유",
    features: ["예쁜 카드 이미지 생성", "개인정보 자동 보호", "원클릭 SNS 공유"],
    color: "from-orange-500 to-amber-500",
    accuracy: "100%"
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "마이페이지",
    description: "개인 계정 및 분석 이력 관리",
    features: ["분석 이력 조회", "불필요한 결과 삭제", "프로필 정보 수정"],
    color: "from-indigo-500 to-blue-600",
    accuracy: "100%"
  }
];

export const TECH_STACK = {
  ai: [
    { name: "Google Gemini", desc: "자연어 처리 & 감정 분석", accuracy: "90%", color: "from-blue-500 to-green-500" },
    { name: "OpenAI Whisper", desc: "음성-텍스트 변환", accuracy: "95%", color: "from-green-500 to-blue-500" }
  ],
  backend: [
    { name: "JSP/Servlet", desc: "Java 웹 개발", feature: "서버 사이드 처리", color: "from-orange-500 to-red-500" },
    { name: "Oracle DB", desc: "관계형 데이터베이스", feature: "안정성 & 확장성", color: "from-red-600 to-orange-600" },
    { name: "Apache Tomcat", desc: "웹 애플리케이션 서버", feature: "JSP 지원", color: "from-yellow-500 to-orange-500" },
    { name: "JDBC", desc: "데이터베이스 연결", feature: "Java-DB 연동", color: "from-blue-600 to-purple-600" }
  ],
  frontend: [
    { name: "HTML5", desc: "웹 표준 마크업", feature: "시맨틱 구조", color: "from-orange-500 to-red-500" },
    { name: "CSS3", desc: "스타일링 & 레이아웃", feature: "반응형 디자인", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", desc: "동적 인터랙션", feature: "사용자 경험", color: "from-yellow-500 to-orange-500" },
    { name: "Bootstrap", desc: "UI 프레임워크", feature: "빠른 개발", color: "from-purple-500 to-blue-500" }
  ],
  tools: [
    { name: "Python", desc: "데이터 분석 & 시각화", feature: "matplotlib", color: "from-blue-500 to-green-500" },
    { name: "GitHub", desc: "버전 관리", feature: "협업 & 배포", color: "from-gray-800 to-gray-600" },
    { name: "GitKraken", desc: "Git GUI 도구", feature: "시각적 관리", color: "from-teal-500 to-cyan-500" },
    { name: "Eclipse IDE", desc: "Java 개발 환경", feature: "통합 개발", color: "from-purple-600 to-blue-600" }
  ]
};

export const USER_JOURNEY = [
  {
    step: "01",
    title: "회원가입/로그인",
    description: "이메일 인증과 개인정보 입력으로 계정 생성",
    details: ["이메일/아이디 중복검사", "비밀번호 확인", "닉네임/성별/연령대 입력"],
    duration: "2-3분",
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "02",
    title: "파일 업로드",
    description: "카카오톡 대화(.txt) 또는 통화 녹음(.mp3/.wav) 업로드",
    details: ["파일 형식 검증", "용량 제한 확인", "암호화 업로드"],
    duration: "1-2분",
    color: "from-green-500 to-emerald-500"
  },
  {
    step: "03",
    title: "AI 분석 처리",
    description: "업로드된 데이터를 AI가 종합 분석하여 결과 생성",
    details: ["STT 변환", "감정 분석", "연애 조언 생성"],
    duration: "3-5초",
    color: "from-purple-500 to-pink-500"
  },
  {
    step: "04",
    title: "결과 확인",
    description: "감정 곡선, 호감도 점수, 설렘 문장 등 상세 결과 확인",
    details: ["시각화 차트", "분석 리포트", "실행 가능한 조언"],
    duration: "제한없음",
    color: "from-pink-500 to-red-500"
  },
  {
    step: "05",
    title: "공유 및 관리",
    description: "결과를 SNS에 공유하고 마이페이지에서 이력 관리",
    details: ["카드 이미지 생성", "SNS 공유", "이력 저장"],
    duration: "1분",
    color: "from-orange-500 to-amber-500"
  }
];

export const UI_SCREENS = [
  {
    screen: "메인 페이지",
    description: "서비스 소개와 시작하기 버튼",
    features: ["Hero 섹션", "기능 소개", "시작하기 CTA"],
    responsive: "모바일 우선"
  },
  {
    screen: "회원가입/로그인",
    description: "사용자 인증 및 계정 생성",
    features: ["폼 검증", "소셜 로그인", "비밀번호 찾기"],
    responsive: "반응형 폼"
  },
  {
    screen: "업로드 페이지",
    description: "파일 업로드 및 검증",
    features: ["드래그앤드롭", "진행률 표시", "미리보기"],
    responsive: "터치 친화적"
  },
  {
    screen: "분석 결과",
    description: "AI 분석 결과 시각화",
    features: ["차트 표시", "상세 리포트", "공유 기능"],
    responsive: "차트 최적화"
  },
  {
    screen: "마이페이지",
    description: "사용자 계정 및 이력 관리",
    features: ["프로필 수정", "이력 조회", "설정 변경"],
    responsive: "탭 네비게이션"
  }
];

export const PERFORMANCE_METRICS = [
  { metric: "< 5초", label: "서버 응답 속도", target: "5초 이내", icon: <Timer className="w-5 h-5" /> },
  { metric: "95%+", label: "STT 변환 정확도", target: "95% 이상", icon: <Headphones className="w-5 h-5" /> },
  { metric: "90%+", label: "감정 분석 정확도", target: "90% 이상", icon: <Brain className="w-5 h-5" /> },
  { metric: "< 2초", label: "페이지 전환 속도", target: "2초 이내", icon: <Zap className="w-5 h-5" /> },
  { metric: "< 20초", label: "결과 조회 시간", target: "20초 이내", icon: <Activity className="w-5 h-5" /> },
  { metric: "256bit", label: "데이터 암호화", target: "AES-256", icon: <ShieldCheck className="w-5 h-5" /> }
];

export const SECURITY_FEATURES = [
  {
    title: "데이터 암호화",
    description: "업로드되는 모든 파일을 AES-256으로 암호화",
    implementation: "진행중",
    priority: "높음"
  },
  {
    title: "2단계 인증",
    description: "마이페이지 접근 시 추가 보안 인증",
    implementation: "계획",
    priority: "중간"
  },
  {
    title: "세션 관리",
    description: "안전한 세션 유지 및 자동 로그아웃",
    implementation: "진행중",
    priority: "높음"
  },
  {
    title: "개인정보 보호",
    description: "분석 완료 후 원본 파일 자동 삭제",
    implementation: "계획",
    priority: "최고"
  }
];

export const BUSINESS_MODEL_DATA = {
  pricing: {
    free: {
      name: "무료 체험",
      price: "₩0",
      features: ["월 1회 분석", "기본 결과", "커뮤니티 지원"],
      users: "신규 사용자"
    },
    premium: {
      name: "프리미엄",
      price: "₩9,900/월",
      features: ["무제한 분석", "상세 리포트", "우선 지원", "고급 기능"],
      users: "활성 사용자"
    }
  },
  revenue: [
    { source: "프리미엄 구독", percentage: 70, amount: "월 7,000만원" },
    { source: "기업 솔루션", percentage: 20, amount: "월 2,000만원" },
    { source: "광고/제휴", percentage: 10, amount: "월 1,000만원" }
  ]
};

// 팀원 정보 업데이트 (첨부 이미지 기반)
export const TEAM_MEMBERS = [
  {
    name: "진영서",
    role: "팀장 (Project Manager)",
    experience: "5년",
    expertise: ["프로젝트 관리", "JSP 개발", "PPT 제작", "팀 리더십"],
    background: "프로젝트 총괄 관리 및 일정 조율 전문",
    achievement: "JSP 기반 가입 및 작성, PPT 제작 및 최종 발표",
    responsibilities: [
      "프로젝트 총괄 관리 및 일정 조율",
      "JSP 기반 가입 및 작성 (회원 분석, 차별성, 개발 계획 등)",
      "PPT 제작 및 최종 발표",
      "팀원 간 소통 조율 및 진행 상황 점검",
      "요구사항 정리 및 우선순위 설정"
    ],
    color: "from-blue-500 to-purple-600",
    icon: <Trophy className="w-6 h-6" />
  },
  {
    name: "최상용",
    role: "Frontend Developer",
    experience: "4년",
    expertise: ["HTML/CSS", "웹 디자인", "UI/UX", "사용자 경험"],
    background: "전체 웹사이트 디자인 및 레이아웃 전문",
    achievement: "회원가입/로그인 화면 개발, 카카오톡 파일 업로드 인터페이스 구현",
    responsibilities: [
      "전체 웹사이트 디자인 및 레이아웃 (HTML/CSS)",
      "회원가입/로그인 화면 개발",
      "카카오톡 파일 업로드 인터페이스 구현",
      "메인 페이지 및 네비게이션 구성",
      "전체적인 사용자 경험(UX) 설계"
    ],
    color: "from-green-500 to-blue-500",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    name: "정관영",
    role: "AI Developer",
    experience: "6년",
    expertise: ["Python", "Hugging Face", "감정 분석", "AI 기반 분석"],
    background: "AI 대화 분석 및 감정 패턴 분석 전문",
    achievement: "감정 음향 요약 및 메인 표현 학습 문제 도출, LLM 기반 고백 타이밍 조언",
    responsibilities: [
      "AI 대화 분석 (Python + Hugging Face)",
      "감정 음향 요약 및 메인 표현 학습 문제 도출",
      "AI 기반 성격 패턴 분석 및 전략 제안",
      "썸 가능성 점수 계산 및 LLM 기반 고백 타이밍 조언",
      "데이터 전처리 (Python + Pandas)"
    ],
    color: "from-purple-500 to-pink-500",
    icon: <Brain className="w-6 h-6" />
  },
  {
    name: "장상연",
    role: "Data Visualization Developer",
    experience: "4년",
    expertise: ["Chart.js", "D3.js", "데이터 시각화", "프로그레스 바"],
    background: "감정 곡선 그래프 구현 및 시각적 표현 전문",
    achievement: "감정 곡선 그래프 구현, 썸 가능성 점수 시각화",
    responsibilities: [
      "감정 곡선 그래프 구현 (Chart.js, D3.js 등)",
      "최고 공감일 시각적 표현 개발",
      "썸 가능성 점수 시각화 (프로그레스 바, 점수 표시 등)",
      "메인 페이지 레이아웃 및 데이터 표현",
      "Python matplotlib과 웹 차트 라이브러리 연동"
    ],
    color: "from-cyan-500 to-blue-500",
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    name: "김진관",
    role: "Backend Developer",
    experience: "5년",
    expertise: ["Java/JSP", "데이터베이스 설계", "API 연결", "LLM 관리"],
    background: "회원가입/로그인 시스템 개발 및 데이터베이스 설계 전문",
    achievement: "데이터베이스 설계 및 구축, 카카오톡 대화 파일 업로드 처리",
    responsibilities: [
      "회원가입/로그인 시스템 개발 (Java/JSP)",
      "데이터베이스 설계 및 구축",
      "카카오톡 대화 파일 업로드 처리 기능 구현",
      "LLM API 연결 및 관리"
    ],
    color: "from-orange-500 to-red-500",
    icon: <Database className="w-6 h-6" />
  }
];

// 개발 일정 업데이트 (첨부 이미지 기반)
export const DEVELOPMENT_SCHEDULE = {
  timeline: [
    {
      task: "서비스 기획 및 요구사항 분석/로직 정의",
      responsible: "진영서",
      startWeek: 1, // 7월 5주
      endWeek: 2,   // 8월 1주
      duration: 2,
      color: "from-blue-500 to-cyan-500",
      details: ["시장 분석", "요구사항 정의", "서비스 로직 설계", "프로젝트 계획"]
    },
    {
      task: "웹사이트 UI/UX 설계 및 인터페이스 기획",
      responsible: "최상용",
      startWeek: 1, // 7월 5주  
      endWeek: 3,   // 8월 2주
      duration: 3,
      color: "from-green-500 to-emerald-500",
      details: ["UI/UX 설계", "인터페이스 기획", "API 연동 설계", "업로드 처리 시스템"]
    },
    {
      task: "AI 감정 분석 모델 구현",
      responsible: "정관영",
      startWeek: 2, // 8월 1주
      endWeek: 4,   // 8월 3주
      duration: 3,
      color: "from-purple-500 to-pink-500",
      details: ["AI 모델 구현", "감정 분석 알고리즘", "성격 패턴 분석", "썸 가능성 점수"]
    },
    {
      task: "감정 곡선 및 데이터 시각화",
      responsible: "장상연",
      startWeek: 2, // 8월 1주
      endWeek: 4,   // 8월 3주
      duration: 3,
      color: "from-cyan-500 to-blue-500",
      details: ["Chart.js 구현", "D3.js 그래프", "프로그레스 바", "시각적 표현"]
    },
    {
      task: "백엔드 시스템 및 DB 구축",
      responsible: "김진관",
      startWeek: 2, // 8월 1주
      endWeek: 4,   // 8월 3주
      duration: 3,
      color: "from-orange-500 to-red-500",
      details: ["시스템 통합", "DB 설계", "API 연결", "파일 업로드"]
    },
    {
      task: "최종 통합 및 발표",
      responsible: "진영서",
      startWeek: 4, // 8월 3주
      endWeek: 5,   // 8월 4주
      duration: 2,
      color: "from-pink-500 to-purple-500",
      details: ["최종 통합", "발표 준비", "시연 테스트", "문서 정리"]
    }
  ],
  weeks: ["7월 5주", "8월 1주", "8월 2주", "8월 3주", "8월 4주"]
};

export const DEVELOPMENT_PHASES = [
  {
    phase: "Phase 1",
    period: "7월 5주 - 8월 1주",
    title: "프로젝트 기획 및 설계",
    status: "완료",
    progress: 100,
    color: "from-green-500 to-emerald-500",
    tasks: [
      { task: "서비스 기획 및 로직 정의", status: "완료" },
      { task: "UI/UX 설계 및 구현", status: "완료" },
      { task: "팀 역할 분담", status: "완료" }
    ]
  },
  {
    phase: "Phase 2", 
    period: "8월 1주 - 8월 2주",
    title: "핵심 기능 개발",
    status: "진행중",
    progress: 75,
    color: "from-blue-500 to-cyan-500",
    tasks: [
      { task: "UI/UX 인터페이스 구현", status: "진행중" },
      { task: "AI 감정 분석 모델", status: "진행중" },
      { task: "백엔드 시스템 구축", status: "진행중" }
    ]
  },
  {
    phase: "Phase 3",
    period: "8월 2주 - 8월 4주", 
    title: "통합 및 완성",
    status: "예정",
    progress: 25,
    color: "from-purple-500 to-pink-500",
    tasks: [
      { task: "시스템 통합 테스트", status: "예정" },
      { task: "최종 통합 및 발표", status: "예정" },
      { task: "문서화 및 정리", status: "예정" }
    ]
  }
];

export const FREQUENTLY_ASKED_QUESTIONS = [
  {
    q: "개인정보 ��호는 어떻게 보장하나요?",
    a: "AES-256 암호화를 사용하며, 분석 완료 후 모든 원본 데이터가 자동 삭제됩니다. 절대 제3자와 공유하지 않습니다.",
    category: "보안"
  },
  {
    q: "STT 변환 정확도는 실제로 95%인가요?",
    a: "한국어 특화 모델을 사용하여 달성한 검증된 수치입니다. ���속적인 학습으로 정확도를 개선하고 있습니다.",
    category: "기술"
  },
  {
    q: "분석 결과의 신뢰성은?",
    a: "심리학 전문가와 AI 엔지니어가 협력하여 개발한 모델로, 90% 이상의 분석 정확도를 보장합니다.",
    category: "서비스"
  },
  {
    q: "월 구독료가 너무 비싸지 않나요?",
    a: "무료 체험을 제공하며, 프리미엄 기능의 가치를 고려할 때 합리적인 가격입니다. 학생 할인도 제공합니다.",
    category: "가격"
  },
  {
    q: "모바일에서도 잘 작동하나요?",
    a: "모바일 우선으로 설계되어 터치 인터페이스와 작은 화면에 최적화되어 있습니다.",
    category: "기술"
  }
];

export const INVESTMENT_PLAN = {
  target: "30억원",
  progress: 60,
  timeline: "3개월",
  usage: [
    { category: "기술 개발", percentage: 40, amount: "12억원" },
    { category: "마케팅", percentage: 30, amount: "9억원" },
    { category: "팀 확장", percentage: 20, amount: "6억원" },
    { category: "운영비", percentage: 10, amount: "3억원" }
  ]
};