// 노드 139 스택 카드 기반 클로징 CTA
export default function ClosingCTA() {
  return (
    <div className="flex justify-center py-6">
      <a
        href="mailto:ymkwith@gmail.com"
        aria-label="이메일로 연락하기"
        className="group relative block w-[240px] rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-900"
      >
        {/* 뒤로 삐져나온 탭 */}
        <span className="absolute -right-5 top-0 h-16 w-14 rounded-[16px] bg-white shadow-[0px_8px_24px_0px_rgba(77,77,92,0.1)]" />
        <span className="absolute -right-5 top-[76px] h-[58px] w-14 rounded-[16px] bg-[#5ce585] shadow-[0px_8px_24px_0px_rgba(77,77,92,0.12)]" />
        <span className="absolute -right-5 top-[146px] h-[58px] w-14 rounded-[16px] bg-[#a89ef5] shadow-[0px_8px_24px_0px_rgba(77,77,92,0.12)]" />

        {/* 메인 카드 */}
        <div className="relative flex h-[290px] flex-col justify-between rounded-[18px] bg-white p-6 shadow-[0px_8px_24px_0px_rgba(77,77,92,0.12)] transition-transform duration-300 group-hover:-translate-y-1">
          <p className="text-[19px] font-medium leading-[1.35] text-[#17171c]">
            함께 좋은 제품을
            <br />
            만들고 싶어요.
          </p>
          <p className="text-[11px] text-[#80808a]">강영미 · Product Designer</p>
        </div>
      </a>
    </div>
  );
}
