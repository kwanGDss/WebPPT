# Cursor에서 프로젝트 생성 및 설정

## 1. 새 React 프로젝트 생성
```bash
npx create-react-app date-genie-presentation --template typescript
cd date-genie-presentation
```

## 2. 필요한 의존성 설치
```bash
# Tailwind CSS 설치
npm install -D tailwindcss@latest postcss autoprefixer
npx tailwindcss init -p

# shadcn/ui 설치
npx shadcn@latest init

# Lucide React (아이콘) 설치
npm install lucide-react

# Motion 라이브러리 설치 (애니메이션용)
npm install motion

# React Hook Form (폼 처리용)
npm install react-hook-form@7.55.0

# Recharts (차트용)
npm install recharts

# 기타 유틸리티
npm install clsx tailwind-merge
```

## 3. TypeScript 설정 확인
package.json에서 TypeScript 설정이 올바른지 확인합니다.