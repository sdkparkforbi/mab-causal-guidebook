/* =====================================================================
   mAb 인과 네트워크 그림책 — 공통 동작
   - 상단 읽기 진행 바
   - 코드 블록 복사 버튼
   ===================================================================== */

(function () {
  // 읽기 진행 바 -------------------------------------------------------
  const bar = document.getElementById("progress");
  if (bar) {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      bar.style.width = height > 0 ? (scrolled / height) * 100 + "%" : "0%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // 코드 복사 버튼 -----------------------------------------------------
  document.querySelectorAll(".code").forEach((block) => {
    const btn = block.querySelector(".copy");
    const pre = block.querySelector("pre");
    if (!btn || !pre) return;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(pre.innerText);
        const old = btn.textContent;
        btn.textContent = "복사됨 ✓";
        setTimeout(() => (btn.textContent = old), 1400);
      } catch (e) {
        btn.textContent = "복사 실패";
      }
    });
  });

  // 현재 페이지 강조 (topbar crumb 자동) — 데이터 속성 사용 시 확장 가능
})();
