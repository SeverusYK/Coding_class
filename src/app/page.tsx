// app/page.tsx — Undefined (Data Analytics) Landing
"use client";

import Link from "next/link";
import { useEffect } from "react";

interface IconProps { className?: string }
function ArrowRightIcon(p: IconProps) {
  const { className = "h-4 w-4" } = p || {};
  return (
    <svg data-ic="arrow-right" data-testid="icon-arrow-right" role="img" aria-label="arrow-right"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function SparklesIcon(p: IconProps) {
  const { className = "h-4 w-4" } = p || {};
  return (
    <svg data-ic="sparkles" data-testid="icon-sparkles" role="img" aria-label="sparkles"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3l1.6 3.9L17 8.5l-3.4 1.6L12 14l-1.6-3.9L7 8.5l3.4-1.6L12 3z" />
      <path d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z" />
      <path d="M4 14l.8 1.8L7 16.6 5.8 18 6.6 20 4.8 19.2 3 20l.8-1.8L3 16.6l1.8-.8L4 14z" />
    </svg>
  );
}
function StarIcon(p: IconProps) {
  const { className = "h-5 w-5" } = p || {};
  return (
    <svg data-ic="star" data-testid="icon-star" role="img" aria-label="star"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 17.3 5.5 21l1.2-7-5-4.9 7-.9L12 2l3.3 6.2 7 .9-5 4.9 1.2 7z" />
    </svg>
  );
}
function CalendarIcon(p: IconProps) {
  const { className = "h-5 w-5" } = p || {};
  return (
    <svg data-ic="calendar" data-testid="icon-calendar" role="img" aria-label="calendar"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function CheckCircle2Icon(p: IconProps) {
  const { className = "h-5 w-5" } = p || {};
  return (
    <svg data-ic="check-circle-2" data-testid="icon-check" role="img" aria-label="check"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.1V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
function QuoteIcon(p: IconProps) {
  const { className = "h-5 w-5" } = p || {};
  return (
    <svg data-ic="quote" data-testid="icon-quote" role="img" aria-label="quote"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 7h5v5H8a3 3 0 0 1-3-3V7z" />
      <path d="M14 7h5v5h-4a3 3 0 0 1-3-3V7z" />
    </svg>
  );
}

export default function Page() {
  useEffect(() => {
    if (typeof document === "undefined" || process.env.NODE_ENV === "production") return;
    const results: { name: string; ok: boolean }[] = [];
    const check = (sel: string, name: string) => {
      const ok = !!document.querySelector(sel);
      console.assert(ok, `[SmokeTest] ${name}`);
      results.push({ name, ok });
    };
    check("header .fade-up", "Hero animations present");
    check("#intro", "Intro section exists");
    check("#curriculum", "Curriculum section exists");
    check("#benefits", "Benefits section exists");
    check("#reviews", "Reviews section exists");
    check("#apply", "Apply section exists");
    check('a[data-testid="primary-cta"]', "Primary CTA present");
    check('[data-testid="icon-arrow-right"]', "ArrowRight icon renders");
    check('[data-testid="icon-sparkles"]', "Sparkles icon renders");
    check('[data-testid="icon-calendar"]', "Calendar icon renders");
    check('[data-testid="icon-check"]', "Check icon renders");
    check('[data-testid="icon-star"]', "Star icon renders");
    check('[data-testid="icon-quote"]', "Quote icon renders");
    check('nav a[href="#intro"]', "Nav link to intro present");
    check('[data-testid="brand"]', "Brand label present");
    console.table(results);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-50">
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
        .fade-up { animation: fadeUp .6s ease forwards; }
      `}</style>

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/30 via-cyan-400/20 to-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-rose-400/10 to-amber-400/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="#" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-sm font-black tracking-wider">UN</span>
              <span data-testid="brand" className="text-sm font-semibold text-neutral-200 transition-colors group-hover:text-white">Undefined</span>
            </Link>
            <div className="hidden gap-6 md:flex">
              <Link href="#intro" className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">소개</Link>
              <Link href="#curriculum" className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">커리큘럼</Link>
              <Link href="#benefits" className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">성과</Link>
              <Link href="#reviews" className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">후기</Link>
              <Link href="#apply" className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition hover:bg-white/5 hover:text-white">모집</Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="https://walla.my/your-form" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/10 transition hover:brightness-110">
                지원하기 <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5" />
      </nav>

      <header className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="fade-up" style={{ animationDelay: ".05s" }}>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-200">
              <SparklesIcon className="h-3.5 w-3.5" /> 데이터 분석 · 실전 멘토링
            </span>
          </div>
          <h1 className="fade-up mt-4 text-4xl font-extrabold tracking-tight md:text-6xl" style={{ animationDelay: ".1s" }}>
            한 장의 페이지로도 <span className="bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">고급스럽게</span>
          </h1>
          <p className="fade-up mx-auto mt-4 max-w-xl text-balance text-neutral-300" style={{ animationDelay: ".15s" }}>
            데이터 분석의 설계·실행·전달에 집중합니다. 템플릿과 체크리스트로 다음 기수에도 재사용 가능한 구조.
          </p>
          <div className="fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: ".2s" }}>
            <Link href="#apply" data-testid="primary-cta" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-neutral-900 shadow-lg shadow-white/5 transition hover:shadow-white/10">
              지금 지원하기 <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link href="#curriculum" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-neutral-200 transition hover:border-white/20 hover:bg-white/5">
              커리큘럼 보기
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: "4주", v: "집중 과정" },
              { k: "1:1", v: "개별 피드백" },
              { k: "EDA", v: "→ 모델링" },
              { k: "100%", v: "배포/산출물" },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-black tracking-tight">{s.k}</div>
                <div className="mt-0.5 text-sm text-neutral-300">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="intro" className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="fade-up" style={{ animationDelay: ".05s" }}>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">프로그램 소개</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300">데이터 분석의 핵심을 4주 안에, 포트폴리오까지</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <div className="flex items-center gap-2 text-neutral-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10"><SparklesIcon className="h-5 w-5" /></span>
                <span className="text-sm font-semibold">분석 파이프라인 설계</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">문제정의 → 데이터 수집/정리 → EDA → 모델링 → 리포트로 이어지는 흐름 정착</p>
            </li>
            <li className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <div className="flex items-center gap-2 text-neutral-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10"><CalendarIcon className="h-5 w-5" /></span>
                <span className="text-sm font-semibold">운영 효율</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">과제·데이터·노트북 템플릿 제공, 매 기수 재사용 가능한 커리큘럼</p>
            </li>
            <li className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <div className="flex items-center gap-2 text-neutral-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10"><CheckCircle2Icon className="h-5 w-5" /></span>
                <span className="text-sm font-semibold">실무형 툴셋</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">Colab/VS Code, pandas, numpy, matplotlib/seaborn, scikit-learn 기본기</p>
            </li>
            <li className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <div className="flex items-center gap-2 text-neutral-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10"><StarIcon className="h-5 w-5" /></span>
                <span className="text-sm font-semibold">포트폴리오 산출물</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">EDA 리포트 + 베이스라인 모델 + 발표 슬라이드/README 템플릿 제공</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="curriculum" className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="fade-up" style={{ animationDelay: ".05s" }}>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">4주 커리큘럼</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300">데이터로 문제를 정의하고, 빠르게 가설 검증</p>
          </div>
          <ol className="relative grid gap-6 border-l border-white/10 pl-6">
            {[
              { w: "1주차", t: "환경세팅 · pandas 기본", d: "Colab/VS Code, CSV 읽기/정제, 결측/이상치 처리, tidy data" },
              { w: "2주차", t: "EDA · 시각화", d: "통계요약/그룹바이/피벗, matplotlib/seaborn, 가설 수립" },
              { w: "3주차", t: "모델링 베이스라인", d: "train/valid split, 스케일링, 선형/로지스틱, 성능지표(ACC/F1/RMSE)" },
              { w: "4주차", t: "리포트 · 발표 · 배포", d: "노트북 정리, 슬라이드/README, 간단한 Streamlit 데모" },
            ].map((item) => (
              <li key={item.w} className="group">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-gradient-to-tr from-indigo-400 to-fuchsia-400" />
                <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-4 transition group-hover:bg-white/10">
                  <div className="text-xs font-semibold text-neutral-300">{item.w}</div>
                  <div className="text-lg font-semibold">{item.t}</div>
                  <div className="text-sm text-neutral-300">{item.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="benefits" className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="fade-up" style={{ animationDelay: ".05s" }}>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">완료 시 얻게 되는 것</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300">바로 제출 가능한 포트폴리오 패키지</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "EDA 리포트 템플릿", d: "문제정의·데이터설명·인사이트·한계·다음 단계" },
              { t: "베이스라인 모델 코드", d: "재현 가능한 노트북/스크립트와 실험 로그" },
              { t: "발표 자료/README", d: "슬라이드 + 깃허브 README 골격, 배포 체크리스트" },
            ].map((b) => (
              <div key={b.t} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="font-semibold">{b.t}</div>
                <div className="text-sm text-neutral-300">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="fade-up" style={{ animationDelay: ".05s" }}>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">수강생 후기</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300">진행자의 개입은 최소, 결과는 최대</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "김디자인", text: "데이터 전처리-EDA-모델링 흐름이 한눈에 보이게 정리돼서 속도가 크게 붙었어요." },
              { name: "박개발", text: "Streamlit 데모로 결과를 바로 공유하니 팀 설득이 쉬웠습니다." },
            ].map((r) => (
              <figure key={r.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <QuoteIcon className="h-5 w-5 opacity-60" />
                <blockquote className="mt-3 text-neutral-200">{r.text}</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-neutral-300">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="fade-up" style={{ animationDelay: ".05s" }}>
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">모집 안내</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300">기수별 운영이 쉬운 구조</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <dl className="grid grid-cols-3 gap-3 text-sm">
                <dt className="col-span-1 text-neutral-400">모집기간</dt>
                <dd className="col-span-2 font-medium">2025.11.01 ~ 2025.11.30</dd>
                <dt className="col-span-1 text-neutral-400">대상</dt>
                <dd className="col-span-2 font-medium">대학생·취준생 누구나</dd>
                <dt className="col-span-1 text-neutral-400">진행</dt>
                <dd className="col-span-2 font-medium">개별 연락 후 매칭</dd>
              </dl>
              <p className="mt-4 text-sm text-neutral-300">다음 기수 오픈 시에는 기간만 바꿔도 전체 톤앤매너가 유지됩니다.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-semibold">FAQ(예시)</h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                <li>완전 초보도 가능한가요? → 네, 템플릿과 레퍼런스 제공</li>
                <li>수업 형태는? → 실습 위주의 워크숍 + 개별 피드백</li>
                <li>산출물은? → 개인 랜딩 페이지 + 배포 체크리스트</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="https://walla.my/your-form" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/10 transition hover:brightness-110">
              지원 폼 열기 <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-neutral-200 transition hover:border-white/20 hover:bg-white/5">
              운영 가이드 받기
            </Link>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-12 text-sm text-neutral-400">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>© {new Date().getFullYear()} Undefined · All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#intro" className="hover:text-neutral-200">소개</Link>
            <Link href="#curriculum" className="hover:text-neutral-200">커리큘럼</Link>
            <Link href="#apply" className="hover:text-neutral-200">모집</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
