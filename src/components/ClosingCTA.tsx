"use client";

import { useState } from "react";

interface ClosingCTAProps {
  email: string;
  phone: string;
}

const TABS = [
  { key: "intro", color: "#e9eaee", label: "소개", top: 0, height: 64 },
  { key: "contact", color: "#5ce585", label: "연락처", top: 76, height: 58 },
  { key: "thanks", color: "#a89ef5", label: "감사 인사", top: 146, height: 58 },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function ClosingCTA({ email, phone }: ClosingCTAProps) {
  const [active, setActive] = useState<TabKey>("intro");

  return (
    <div className="flex justify-center py-6">
      <div className="relative w-[240px]">
        {/* 우측에 삐져나온 탭 (클릭 시 카드 내용 전환) */}
        {TABS.map((tab) => {
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              aria-label={tab.label}
              aria-pressed={isActive}
              onClick={() => setActive(tab.key)}
              className={`absolute rounded-[16px] shadow-[0px_8px_24px_0px_rgba(77,77,92,0.12)] transition-all duration-300 ${
                isActive ? "-right-7 w-16" : "-right-5 w-14"
              }`}
              style={{ top: tab.top, height: tab.height, background: tab.color }}
            />
          );
        })}

        {/* 메인 카드 */}
        <div className="relative flex h-[290px] flex-col justify-between rounded-[18px] bg-white p-6 shadow-[0px_8px_24px_0px_rgba(77,77,92,0.12)]">
          {active === "intro" && (
            <>
              <p className="text-[19px] font-medium leading-[1.35] text-[#17171c]">
                함께 좋은 제품을
                <br />
                만들고 싶어요.
              </p>
              <p className="text-[11px] text-[#80808a]">강영미 · Product Designer</p>
            </>
          )}

          {active === "contact" && (
            <>
              <div>
                <p className="mb-3 text-[15px] font-semibold text-[#17171c]">연락처</p>
                <a
                  href={`mailto:${email}`}
                  className="block text-[14px] text-[#17171c] hover:underline"
                >
                  {email}
                </a>
                <a
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="mt-1.5 block text-[14px] text-[#17171c] hover:underline"
                >
                  {phone}
                </a>
              </div>
              <p className="text-[11px] text-[#80808a]">강영미 · Product Designer</p>
            </>
          )}

          {active === "thanks" && (
            <>
              <p className="text-[18px] font-medium leading-[1.45] text-[#17171c]">
                시간 내어 제 포트폴리오를
                <br />
                봐주셔서 감사합니다.
              </p>
              <p className="text-[11px] text-[#80808a]">강영미 · Product Designer</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
