# AI로 항체 안정성 지식그래프 만들기 — 그림책 자습서

PubMed 초록 수집 → GPT 인과관계 추출 → 네트워크 시각화 → 검증 앱 → 예측 모델(mAb-GATED)
→ 가설 생성 → 논문 쓰기까지, **따라 하며 배우는 GitHub Pages 그림책**입니다.

## 구성

```
mab-causal-guidebook/
├── index.html              # 표지 + 목차
├── assets/
│   ├── style.css           # 그림책 디자인 시스템
│   └── book.js             # 진행 바 · 코드 복사 버튼
└── chapters/
    ├── ch0.html  오리엔테이션 ......... ✅ 완성
    ├── ch1.html  PubMed 수집 .......... ✅ 완성
    ├── ch2.html  관련성 필터링 ........ ✅ 완성
    ├── ch3.html  인과관계 추출 ........ ✅ 완성
    ├── ch4.html  시각화 앱 ............ ✅ 완성 (Vercel)
    ├── ch5.html  검증 앱 .............. ✅ 완성 (Streamlit)
    ├── ch6.html  mAb-GATED ............ ✅ 완성
    ├── ch7.html  가설 생성 ............ ✅ 완성
    ├── ch8.html  논문 쓰기 ............ ✅ 완성
    └── appendix.html  부록 ............ ✅ 완성 (Git·Vercel·Streamlit)
```

## 로컬에서 보기

정적 사이트라 빌드가 필요 없습니다. 둘 중 하나:

- `index.html`을 브라우저로 더블클릭, 또는
- 폴더에서 간단한 서버 실행:
  ```bash
  python -m http.server 8000
  # http://localhost:8000 접속
  ```

## GitHub Pages로 배포

1. 이 폴더를 GitHub 저장소(public)에 올립니다.
2. **Settings ▸ Pages ▸ Branch: `main` / root** 선택 → 저장.
3. 잠시 뒤 `https://<아이디>.github.io/<저장소>/` 에서 공개됩니다.

## 출처가 된 기존 자료

| 그림책 장 | 대응 원본 |
|---|---|
| 1장 | `step1_pubmed_crawling.ipynb` |
| 2장 | `step2_relevance_filtering_en.ipynb` |
| 3장 | `step3_extract_finish.ipynb` |
| 4장 | `mab-causal-network-v2` (GitHub Pages 시각화) |
| 5장 | `mab-review-app` (Streamlit) |
| 6장 | `step4_mab_gated_colab.ipynb` |
| 8장 양식 | `Ensemble ML … Antibody PK Prediction_final.pdf` |

## 라이선스 / 용도

GenAIBiC 강의용 학습 자료. © 2026.
