# Import 경로 수정 가이드

모든 컴포넌트 파일에서 다음과 같이 import 경로를 수정해야 합니다:

## App.tsx에서:
```typescript
// 변경 전
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

// 변경 후
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
// (App.tsx는 이미 src 폴더에 있으므로 그대로)
```

## components 폴더 내 파일들에서:
```typescript
// 변경 전
import { Button } from "./components/ui/button";

// 변경 후  
import { Button } from "../ui/button";
```

## presentation 폴더 내 파일들에서:
```typescript
// 변경 전
import { SlideData } from './presentation/SlideData';

// 변경 후
import { SlideData } from './SlideData';
```

## slides 폴더 내 파일들에서:
```typescript
// 변경 전
import { Button } from "./components/ui/button";

// 변경 후
import { Button } from "../../ui/button";
```

## 주요 수정 포인트:
1. `./components/ui/` → `../ui/` 또는 `../../ui/`
2. `./components/presentation/` → `../` 또는 `./`
3. lucide-react, motion 등 라이브러리는 그대로 유지