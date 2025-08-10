# 최종 설정 및 실행

## 1. 의존성 설치
```bash
npm install
```

## 2. 개발 서버 실행
```bash
npm start
```

## 3. 빌드 테스트
```bash
npm run build
```

## 4. 문제 해결

### 자주 발생하는 문제들:

1. **Import 경로 오류**
   - 모든 import 경로를 상대 경로로 수정
   - TypeScript 오류 확인 후 수정

2. **Tailwind CSS 스타일 적용 안됨**
   - globals.css가 올바르게 import되었는지 확인
   - tailwind.config.js 설정 확인

3. **shadcn/ui 컴포넌트 오류**
   - 필요한 경우 shadcn/ui 컴포넌트들을 다시 설치:
   ```bash
   npx shadcn@latest add button badge card
   ```

4. **TypeScript 오류**
   - 모든 컴포넌트에서 React import 확인:
   ```typescript
   import React from 'react';
   ```

## 5. 추가 최적화

### VS Code/Cursor 확장 프로그램 설치 권장:
- Tailwind CSS IntelliSense
- TypeScript Importer
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint