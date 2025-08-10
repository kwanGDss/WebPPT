# 파일 구조 생성 명령어

## src 폴더 내에 다음 구조를 생성:

```bash
# 메인 폴더들 생성
mkdir -p src/components/ui
mkdir -p src/components/figma
mkdir -p src/components/presentation/sections
mkdir -p src/components/presentation/slides
mkdir -p src/styles
mkdir -p src/guidelines

# 각 폴더에 파일들을 복사해야 합니다:
```

## 복사해야 할 파일 목록:

### 1. 메인 파일들
- `src/App.tsx` ← 현재 App.tsx
- `src/styles/globals.css` ← 현재 globals.css

### 2. 메인 컴포넌트들
- `src/components/AllSlidesView.tsx`
- `src/components/Presentation.tsx`
- `src/components/PresentationMode.tsx`
- `src/components/AnalysisResultPage.tsx`
- `src/components/LoginPage.tsx`
- `src/components/MainPage.tsx`
- `src/components/MyPage.tsx`
- `src/components/UploadPage.tsx`

### 3. UI 컴포넌트들 (components/ui/)
- 모든 shadcn/ui 컴포넌트 파일들 복사

### 4. 프레젠테이션 관련 파일들
- `src/components/presentation/PresentationComponents.tsx`
- `src/components/presentation/SlideData.tsx`
- `src/components/presentation/TechConstants.tsx`
- `src/components/presentation/TechIcons.tsx`

### 5. 섹션 파일들 (components/presentation/sections/)
- `AISection.tsx`
- `BackendSection.tsx`
- `FrontendSection.tsx`
- `PerformanceSection.tsx`
- `ToolsSection.tsx`

### 6. 슬라이드 파일들 (components/presentation/slides/)
- `DevelopmentScheduleSlide.tsx`
- `ProblemSlide.tsx`
- `SolutionSlide.tsx`
- `TeamSlide.tsx`
- `TechnologySlide.tsx`
- `TitleSlide.tsx`
- `UIDesignSlide.tsx`
- `UserJourneySlide.tsx`

### 7. 기타 파일들
- `src/components/figma/ImageWithFallback.tsx`
- `src/guidelines/Guidelines.md`