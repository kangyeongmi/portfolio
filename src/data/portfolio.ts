export const portfolioData = {
  hero: {
    headline: "반갑습니다. 복잡한 흐름을 정리하고 사용자의 판단을 돕는 강영미입니다.",
    subHeadline:
      "복잡한 B2B SaaS와 특수 디바이스 환경을 설계해왔습니다. 데이터를 보고 다음 행동을 바로 결정할 수 있는 화면을 만드는 데 집중합니다.",
    strengths: [
      "디자인 시스템 구축 및 운영",
      "AI 활용 디자인 프로세스",
      "데이터 시각화",
      "사용성 테스트 및 검증",
      "크로스팀 커뮤니케이션",
    ],
    toolGroups: [
      {
        label: "Design",
        items: ["Figma", "Storybook", "Prototyping", "와이어프레임", "GUI 가이드"],
      },
      {
        label: "AI",
        items: ["Claude", "ChatGPT", "Gemini", "Midjourney", "Codex", "Antigravity"],
      },
      {
        label: "Visual",
        items: ["Photoshop", "Illustrator", "After Effects", "Lottie"],
      },
      { label: "Dev", items: ["VS Code", "GitHub", "HTML/CSS"] },
      { label: "Collab", items: ["Jira", "Confluence", "Notion", "Slack"] },
      {
        label: "UX",
        items: ["유저 플로우", "사용성 테스트", "디자인 QA", "개발 핸드오프"],
      },
    ],
  },
  recruiterSummary: [
    {
      title: "현장 상황을 고려한 설계로 실수를 줄여요",
      description: "야외나 흔들리는 차 안에서도 실수 없이 정보를 확인하고 바로 움직일 수 있도록 조작 편의성을 극대화한 화면을 만들었습니다.",
      project: "모빌리티 및 기기",
    },
    {
      title: "사용자 역할 중심으로 복잡한 흐름을 정리해요",
      description: "방대한 데이터와 기능을 사용자 역할별 행동 단위로 재구성하여 복잡한 업무 흐름에서도 길을 잃지 않게 돕습니다.",
      project: "복잡한 정보 구조",
    },
    {
      title: "행동을 이끄는 데이터 시각화 규칙을 설계해요",
      description: "단순 수치 나열을 넘어, 관리자가 실시간 상황을 즉시 판단하고 다음 행동을 결정하게 돕는 대시보드 규칙을 세웁니다.",
      project: "데이터 시각화",
    },
    {
      title: "AI 자동 검증으로 리뷰 시간을 줄이고 품질을 높여요",
      description: "수동 리뷰의 실수와 지연 문제를 해결하기 위해 디자인 원칙을 학습시킨 AI 크리틱 프롬프트를 설계하여 자동 검증 체계를 마련했습니다.",
      project: "시스템 및 생산성",
    },
  ],
  projects: [
    {
      id: "p09",
      title: "Neo Happytalk R&D",
      role: "Product Design Lead",
      period: "2025",
      company: "블룸에이아이",
      platform: "Web SaaS",
      users: "상담사, 운영자, 관리자, End-user",
      summary: "여러 솔루션을 하나로 통합하기 위한 미래 비전과 청사진을 설계하고, 대표 보고를 통해 UX 방향성을 전사에 전파했습니다.",
      tags: ["플랫폼 통합", "UX 비전 수립", "차세대 설계"],
      problem: "제품들이 서로 나뉘어 있어 사용자 경험이 끊기고 통합적인 로드맵이 부족한 상황이었습니다.",
      strategy: "통합 정보 구조를 도출하고 차세대 제품에 공통으로 쓰일 화면 구성 원칙을 정립했습니다.",
      ownership: "통합 UX 방향을 제안해서 제품 개발 로드맵에 반영되게 만들었습니다.",
      images: [
        "/images/portfolio/neo_happytalk_rnd_2.png",
        "/images/portfolio/neo_happytalk_rnd_3.png",
        "/images/portfolio/happytalk_ai_kb_5.png",
      ],
      caseStudy: {
        context:
          "노후한 PHP 기반 코드 위에서 화면을 개선하는 데 시간이 오래 걸리는 상황이었습니다. 동시에 해피톡·콜브릿지 등 사내 여러 제품을 하나로 결합해, 브랜드를 전환하며 사용할 수 있는 통합 제품의 미래 청사진을 그리는 선행 연구가 필요했습니다.",
        process: [
          "내부 제품 상태를 휴리스틱으로 점검하는 리서치 진행",
          "제품 전반의 병목 지점 도출",
          "개선 방향을 담은 화면 제작",
          "내부·전사 전파 후 대표 보고로 청사진을 확정하고 진행",
        ],
        decisions: [
          {
            title: "개별 화면 수정 대신 통합 신제품으로 전환",
            detail:
              "노후 화면을 리스트업하니 고쳐야 할 화면이 지나치게 많았고, 화면 내부의 문제도 산재해 있었습니다. 개별 개선으로는 한계가 분명해, 아예 새로운 프로덕트로 통합 서비스를 제공하는 방향을 택했습니다.",
          },
          {
            title: "콜·해피톡을 스위칭하는 챗·콜 통합 서비스",
            detail:
              "분리돼 있던 제품 경험을 하나로 묶어, 고객사가 콜과 해피톡을 전환하며 챗·콜 통합 서비스를 한 곳에서 이용하도록 설계했습니다.",
          },
        ],
        results: [
          "전반적인 UI 룩과 디자인을 정비하고, 영역 내 기본 요소의 순서·배치를 재정리",
          "상담사가 꼭 봐야 하는 화면·정보를 미리 알려주고 띄워주는 인박스 영역 설계",
          "좌측 하단의 상담 인입 알림 및 서비스 알림 화면 구성",
          "상담 채팅 과정에서 나타나는 유려한 채팅 경험 설계",
        ],
        gallery: [
          {
            src: "/images/portfolio/neo_rnd_tobe_1.png",
            caption:
              "To-Be · 통합 콘솔 — 브랜드 스위칭 사이드바, 상담 인박스, 우측 상담 요약·헬프센터·키워드를 하나의 화면으로 통합",
          },
          {
            src: "/images/portfolio/neo_rnd_tobe_2.png",
            caption:
              "좌측 하단 알림 영역 — 중요 알림 스택과 상담 인입 알림함으로 놓치기 쉬운 문의를 상단에 노출",
          },
          {
            src: "/images/portfolio/neo_rnd_tobe_3.png",
            caption:
              "상담 인박스 패널 — 메모·파일·태그·시간 보류·AI 탭과 상담 보류/종료 액션을 한곳에 모아 상담사 동선 단축",
          },
        ],
      },
    },
    {
      id: "p11",
      title: "Happytalk End-user Renewal",
      role: "Product Designer",
      period: "2026.04 ~ 2026.05",
      company: "블룸에이아이",
      platform: "Mobile / Web",
      users: "일반 사용자 (B2C)",
      summary: "사용자가 경험하는 채팅 화면을 더 현대적이고 쓰기 편하게 고쳤습니다.",
      tags: ["모바일 UX", "인터랙션", "B2C 리뉴얼"],
      problem: "채팅 UI가 오래되어 브랜드 이미지를 깎고 있었고, 모바일에서 한 손으로 조작하기 불편했습니다.",
      strategy: "부드러운 움직임을 넣고 한 손으로 누르기 쉬운 위치에 주요 버튼을 배치했습니다.",
      ownership: "리뉴얼 후에 사용자가 중간에 나가는 비율을 줄이고 긍정적인 피드백을 받았습니다.",
      images: [
        "/images/portfolio/happytalk_enduser_mobile.png",
        "/images/portfolio/happytalk_enduser_web.png",
      ],
      caseStudy: {
        context:
          "엔드유저 웹 위젯의 설정 페이지에 기능이 산발적으로 덕지덕지 붙어 있었고, 노후한 UI에 어디가 어떻게 연계되는 페이지인지 앵커조차 되지 않아 설정을 이해하는 첫 장벽이 높았습니다. 웹 위젯 설치 장벽을 낮추고 러닝커브를 완만하게 해, 누구나 홈페이지에 채팅 버튼을 달 수 있도록 하는 것이 목표였습니다.",
        process: [
          "설정·웹 위젯 설정 페이지와 최종 엔드유저 웹 위젯 화면을 함께 분석",
          "설정별 동선 분석",
          "AI 프로토타이핑으로 화면 케이스를 정돈하고, 설정 시 웹에 노출되는 홈 위젯 페이지도 케이스·타사 플로우와 함께 점검",
          "기획·개발·디자인 논의로 수정 가능한 범위를 일정 내에서 확정해 진행",
        ],
        decisions: [
          {
            title: "최신 홈 위젯 트렌드에 맞춘 디자인 룩 업데이트",
            detail:
              "노후한 위젯 디자인을 최근 홈 위젯 트렌드와 디자인 결에 맞춰 갱신해, 브랜드 인상과 첫 진입 장벽을 함께 개선했습니다.",
          },
          {
            title: "상담내역을 '메시지' 탭으로 분리",
            detail:
              "이전에는 상담 버튼을 눌러야만 보이던 상담내역 리스트를 별도의 메시지 탭으로 빼, 메시지 리스트로 정리했습니다.",
          },
          {
            title: "홈 버튼 → 채팅 문의 유입으로 플로우 전면 개편",
            detail:
              "홈 버튼을 누르면 곧바로 채팅으로 문의가 유입되도록, UX 플로우를 채팅 문의 유입 중심으로 다시 설계했습니다.",
          },
        ],
        results: [
          "노후 위젯을 최신 홈 위젯 트렌드에 맞춰 갱신해 브랜드 인상과 첫 진입 인상을 개선",
          "설정·연계 구조를 정돈하고 러닝커브를 낮춰, 누구나 홈페이지에 채팅 버튼을 달 수 있는 흐름으로 단순화",
          "홈 → 채팅 유입과 메시지 탭 분리로 엔드유저의 문의 시작·이력 확인 동선을 단축",
        ],
        gallery: [
          {
            src: "/images/portfolio/enduser_home.png",
            caption:
              "To-Be · 홈 — 인사·입력창과 '다른 방법으로'(카카오·메시지·전화)를 노출, 홈에서 바로 채팅 문의로 유입",
          },
          {
            src: "/images/portfolio/enduser_message.png",
            caption:
              "To-Be · 메시지 탭 — 상담 버튼을 눌러야 보이던 상담내역을 별도 메시지 리스트로 분리",
          },
          {
            src: "/images/portfolio/enduser_chat.png",
            caption:
              "To-Be · 채팅 — 빠른 답변 칩과 입력창으로 문의를 매끄럽게 이어가는 채팅 경험",
          },
        ],
      },
    },
    {
      id: "p07",
      title: "Happytalk LNB & SaaS UX",
      role: "Product Designer",
      period: "2024.07 ~ 2025.05",
      company: "블룸에이아이",
      platform: "Web SaaS",
      users: "상담사, 운영자, End-user",
      summary: "복잡한 메뉴 구조를 사용자 역할 중심으로 다시 짜서 필요한 기능을 더 빨리 찾게 만들었습니다.",
      tags: ["IA 재설계", "정보 접근성", "메뉴 리뉴얼"],
      problem: "기능이 계속 추가되면서 메뉴가 복잡해졌고, 사용자가 원하는 메뉴를 찾는 데 시간이 오래 걸렸습니다.",
      strategy: "역할별 핵심 동선을 분석해서 메뉴를 계층화하고 개인화된 영역을 추가했습니다.",
      ownership: "메뉴 탐색 시간을 줄이고 처음 사용하는 분들의 적응 기간을 단축했습니다.",
      images: [
        "/images/portfolio/happytalk_lnb_asis.png",
        "/images/portfolio/happytalk_lnb_tobe.png",
      ],
      caseStudy: {
        context:
          "LNB의 디자인 구조 자체가 노후해, 기존 영역을 그대로 유지한 채 쓰기 어려운 상태였습니다. 디자인 리뉴얼에 가깝지만, 데이터가 보기 어렵게 흩어져 정리되지 않은 채 그루핑돼 있던 화면들을 함께 재정리했습니다.",
        process: [
          "현황 IA·디자인 분석",
          "어느 범주를 어디로 옮길지 기획·디자인·개발 크로스 검토로 페이지 구조 정리 (전담 인력 부재로 검토에 시간 소요)",
          "일정 내 '최대한 단순화' 원칙으로 LNB 디자인 리뉴얼",
          "데이터 영역에 산발적이던 항목을 묶음별로 재그루핑",
        ],
        decisions: [
          {
            title: "전면 재설계 대신, 기존 구조 유지 + 비주얼 리뉴얼",
            detail:
              "전담 인력과 일정이 빠듯한 상황에서 기존 IA 골격은 최대한 유지하되, 노후한 LNB를 정돈해 '많이 바뀐 듯한' 인상을 주는 방향을 택했습니다. 개발 리스크를 줄이면서 체감 개선을 확보하기 위한 선택이었습니다.",
          },
          {
            title: "데이터·리포트를 '운영 인사이트'로 분리·승격",
            detail:
              "상담관리 하위에 흩어져 있던 데이터를 별도 영역(운영 인사이트)으로 신설·이관해, 리포트 보고가 필요한 관리자·매니저가 한곳에서 데이터를 받아 쓸 수 있게 했습니다.",
          },
        ],
        results: [
          "운영 측 피드백상 메뉴가 더 잘 보이고 정리된 인상으로, 항목 탐색이 한결 수월해짐 (정성 기준)",
          "데이터를 '운영 인사이트'로 모아 리포트가 필요한 관리자·매니저의 데이터 접근 동선을 단축",
        ],
        gallery: [
          {
            src: "/images/portfolio/lnb_asis_dashboard.png",
            caption: "As-Is · 설정 LNB — 대시보드·관리 항목이 긴 단일 목록으로 노후",
          },
          {
            src: "/images/portfolio/lnb_asis_consult.png",
            caption: "As-Is · 상담관리 LNB — 리포팅·데이터가 상담관리 하위에 흩어져 중첩",
          },
          {
            src: "/images/portfolio/lnb_tobe_insight.png",
            caption:
              "To-Be · 그룹 단위로 재정리하고 '운영 인사이트'를 상단에 신설해 데이터·리포트 동선을 한곳으로 통합",
          },
        ],
      },
    },
    {
      id: "p04",
      title: "Dashboard / Statistics UX",
      role: "Product Designer",
      period: "2024.07 ~ 2025.05",
      company: "블룸에이아이",
      platform: "Web",
      users: "상담 운영자, 관리자",
      summary: "관리자가 실시간 데이터를 보고 지금 무엇을 해야 하는지 바로 판단하게 도왔습니다.",
      tags: ["데이터 시각화", "모니터링", "판단 지원"],
      problem: "예전 수치와 지금 당장 일어나는 일이 섞여 있어 급한 이슈에 바로 대응하기 어려웠습니다.",
      strategy: "이슈가 생기면 상단에 바로 경고를 띄우고, 데이터 상태에 따라 눈에 띄는 색을 써서 상담사 상태를 구분했습니다.",
      ownership: "단순히 숫자만 보여주는 게 아니라, 사람을 다시 배치하는 등 관리자가 다음 행동을 결정하게 도왔습니다.",
      images: [
        "/images/portfolio/happytalk_stats_dashboard_1.png",
        "/images/portfolio/happytalk_stats_dashboard_2.png",
      ],
    },
    {
      id: "p06",
      title: "Design system 자동화 프로세스 구현",
      role: "Product Designer",
      period: "2024.07 ~ 2025.05",
      company: "블룸에이아이",
      platform: "Web SaaS",
      users: "내부 개발팀 및 디자이너",
      summary: "디자인 시스템을 프론트팀과 협업하여 개발 속도를 높이고 있습니다.",
      tags: ["디자인 시스템", "협업 효율", "일관성"],
      problem: "화면마다 디자인이 조금씩 다르고 작업 속도가 늦어지는 문제를 해결하고 싶었습니다.",
      strategy: "디자인 시스템을 Storybook 가이드라인으로 구축하고 Git 활용으로 디자인 가이드라인을 지속 업데이트하고 있습니다.",
      ownership: "시스템을 팀에 잘 정착시켜서 소통 비용을 줄이고 새로운 화면을 더 빠르게 만들었습니다.",
      images: [],
    },
    {
      id: "p10",
      title: "Happytalk AI Knowledge Base",
      role: "Product Designer",
      period: "2024.12 ~ 2025.02",
      company: "블룸에이아이",
      platform: "Web SaaS",
      users: "상담 운영자, 관리자",
      summary: "AI가 상담 지식을 학습하고 답변하게 돕는 관리용 인터페이스를 설계했습니다.",
      tags: ["AI 지식 관리", "정보 구조화", "SaaS UX"],
      problem: "방대한 매뉴얼을 일일이 찾아야 하는 상담원의 불편함과 답변이 달라지는 문제를 해결하려 했습니다.",
      strategy: "지식 데이터의 가공과 학습 상태를 한눈에 관리하는 대시보드를 구축했습니다.",
      ownership: "상담원이 지식을 찾는 시간을 줄여 운영 효율을 40% 이상 높였습니다.",
      images: [
        "/images/portfolio/happytalk_ai_kb_1.png",
        "/images/portfolio/happytalk_ai_kb_2.png",
        "/images/portfolio/happytalk_ai_kb_3.png",
        "/images/portfolio/happytalk_ai_kb_4.png",
      ],
    },
    {
      id: "p01",
      title: "Caddie App Tablet UX",
      role: "Product Designer",
      period: "2021.10 ~ 2023.06",
      company: "골프존 / 골프존씨엠",
      platform: "Android Tablet, Web Admin",
      users: "골프장 캐디 및 관제 운영자",
      summary: "강한 햇빛 아래에서도 실수를 줄이고 조작하기 쉬운 태블릿 화면을 만들었습니다.",
      tags: ["현장 사용성", "특수 환경", "조작 편의성"],
      problem: "강한 햇빛과 카트 진동 때문에 화면을 보기 어렵고 무전 중심의 소통으로 경기가 지연되는 문제가 있었습니다.",
      strategy: "정보는 48pt 이상으로 크게 표시하고, 버튼을 실제 크기보다 120% 넓게 설정해 실수로 잘못 누르는 경우를 줄였습니다.",
      ownership: "현장 테스트를 거쳐 야외에서 쓰기 편한 기준을 세우고 경기 지연율을 낮췄습니다.",
      images: [
        "/images/portfolio/caddie_app_1.png",
        "/images/portfolio/caddie_app_2.png",
        "/images/portfolio/caddie_app_3.png",
        "/images/portfolio/caddie_admin_1.png",
      ],
    },
    {
      id: "p13",
      title: "Heythere CRM shadcn UI Kit",
      role: "Product Designer",
      period: "2025",
      company: "블룸에이아이",
      platform: "Web SaaS (CRM)",
      users: "마케터, 고객사, 상담 운영자, 영업",
      summary: "shadcn 기반 UI 키트로 제품 전반의 일관성과 재사용성을 높이고, 개별 화면의 사용성과 플로우를 함께 개선했습니다.",
      tags: ["제품 일관성", "컴포넌트 재사용성", "사용성·플로우 개선"],
      problem: "CRM 화면이 빠르게 늘면서 컴포넌트가 화면마다 제각각이라 일관성이 떨어졌고, 화면별 사용 흐름도 매끄럽지 않은 구간이 있었습니다.",
      strategy: "shadcn 기반 UI 키트를 공통 컴포넌트와 토큰으로 표준화해 재사용성을 높이고, 그 위에서 주요 화면의 사용성과 플로우를 다시 정리했습니다.",
      ownership: "일관성과 재사용성 기준을 세워 팀에 정착시키고, 핵심 화면의 사용성·흐름 개선을 직접 주도했습니다.",
      images: [
        "/images/portfolio/heythere_crm_editor_1.png",
        "/images/portfolio/heythere_crm_editor_2.png",
        "/images/portfolio/heythere_crm_editor_3.png",
      ],
    },
    {
      id: "p02",
      title: "Voice Caddie Device UX",
      role: "GUI / Product Designer",
      period: "2019.09 ~ 2021.09",
      company: "Voice Caddie",
      platform: "Smart Watch · Hand Device · Native App",
      users: "필드에서 기기와 앱을 함께 쓰는 골퍼",
      summary: "스마트워치·핸드 디바이스 GUI부터 네이티브 골프 앱과 인터랙션 모션까지, 브이씨의 디바이스·앱 제품 경험을 두루 설계했습니다.",
      tags: ["기기 GUI", "네이티브 앱", "인터랙션 모션"],
      problem: "스마트워치(T7·T8·T9)와 핸드 디바이스, 여러 골프 앱에 걸쳐 화면이 분산돼, 작은 화면 가독성과 일관된 사용 경험을 확보하기 어려웠습니다.",
      strategy: "워치에는 핵심 거리 데이터만 남기고 상세는 앱으로 이관했고, 제품군 전반에 일관된 GUI 가이드와 Lottie 기반 인터랙션 모션을 정립했습니다. MySwingCaddie·MyVoiceCaddie 네이티브 앱을 메인 디자인·출시하고 iOS/Android 가이드·에셋을 관리했으며, 야디지북 핸드 디바이스 GUI와 50만 대 규모 워치 양산 흐름까지 담당했습니다.",
      ownership: "50만 대 규모 스마트워치 디자인 기준을 세우고, 앱 출시·가이드 운영·양산까지 브이씨의 디바이스·앱 전반을 주도했습니다.",
      images: [
        "/images/portfolio/voice_caddie_watch_1.png",
        "/images/portfolio/voice_caddie_app_1.png",
        "/images/portfolio/voice_caddie_app_2.png",
        "/images/portfolio/voice_caddie_app_3.png",
      ],
    },
    {
      id: "p08",
      title: "AI Critic Process Design",
      role: "UX Designer / Lead",
      period: "2025.01 ~ 진행 중",
      company: "블룸에이아이",
      platform: "Internal Process",
      users: "디자인팀",
      summary: "AI를 활용한 시안 검토 프로세스를 만들어 리뷰 시간을 줄이고 디자인 품질을 고르게 유지했습니다.",
      tags: ["AI 업무 효율화", "디자인 QA", "품질 관리"],
      problem: "수동 리뷰 과정에서의 실수와 긴 검토 시간 때문에 작업이 지연되는 구간이 있었습니다.",
      strategy: "디자인 원칙을 학습시킨 AI 크리틱 프롬프트를 설계하여 자동 검증 체계를 마련했습니다.",
      ownership: "AI 활용 가이드를 배포하여 팀 내 디자인 QA 품질을 상향 평준화했고, 2025년 8월부터는 AI 디자인 크리틱 품질 점검을 상시 운영하고 있습니다.",
      images: [],
    },
    {
      id: "p14",
      title: "Frontend Vibe Design Workflow",
      role: "Product Designer / Design Lead",
      period: "2026.03 ~ 진행 중",
      company: "블룸에이아이",
      platform: "Internal Process / Web",
      users: "디자이너, 프론트엔드 개발팀",
      summary: "정적 시안을 넘어 실제 동작하는 데모로 디자인을 검증하고, 디자인과 개발의 협업·핸드오프 방식을 개선하고 있습니다.",
      tags: ["디자인-개발 협업", "동작 데모 검증", "핸드오프 개선"],
      problem: "정적 시안만으로는 권한·상태별 케이스와 실제 인터랙션이 충분히 드러나지 않아, 디자인과 개발 사이에 해석 차이와 재작업이 생기기 쉬웠습니다.",
      strategy: "디자이너가 직접 동작하는 데모를 만들어 다양한 케이스를 검증하고, 확정된 결과를 운영 환경과 분리된 형태로 개발팀과 공유하는 협업 흐름을 만들었습니다.",
      ownership: "디자인을 동작하는 형태로 검증·확정하는 협업 방식을 설계해, 디자인-개발 핸드오프의 정확도를 높였습니다.",
      images: ["/images/portfolio/vibe_workflow_demo.png"],
    },
    {
      id: "p03",
      title: "Golfzon Album App",
      role: "UI Designer",
      period: "2021.11 ~ 2022.02",
      company: "골프존",
      platform: "Hybrid Mobile App",
      users: "골프존 서비스 이용 B2C 고객",
      summary: "데이터를 보고 핵심 기능을 더 잘 보이게 옮겨서 사용자의 사용 동선을 줄였습니다.",
      tags: ["데이터 분석", "UX 개선", "모바일 앱"],
      problem: "앨범 확인 메뉴가 너무 깊이 숨어 있어 사용자가 찾기 어렵고 사용 빈도가 낮았습니다.",
      strategy: "행동 데이터를 분석해서 동선을 줄이고 핵심 버튼을 더 잘 보이게 강조했습니다.",
      ownership: "",
      images: [
        "/images/portfolio/golfzon_album_1.png",
        "/images/portfolio/golfzon_album_2.png",
        "/images/portfolio/golfzon_album_3.png",
      ],
    },
  ],
  career: [
    {
      company: "블룸에이아이",
      period: "2024.07 - 재직 중",
      role: "Product Designer / UXUI Designer",
      description: "해피톡·콜브릿지·헤이데어 Product Design 및 AI 기능 UX 설계. 대시보드·통계·온보딩·Admin 등 핵심 화면 UX 재설계, 차세대 상담 솔루션 네오 해피톡 R&D 방향성 연구 주도, 태스크 플로우 신규 기획, shadcn/ui 기반 UI 전환, 디자인 시스템·협업 프로세스 정비 및 AI 크리틱 프로세스 도입.",
    },
    {
      company: "바른컴퍼니",
      period: "2024.02 - 2024.06",
      role: "UXUI Designer / Web Designer",
      description: "웹서비스 리디자인 및 운영, 디자인 시스템 초기 구축 참여. 브랜드 톤과 웹 UI 구조 개선.",
    },
    {
      company: "골프존씨엠",
      period: "2023.02 - 2023.06",
      role: "Product Designer / UXUI Designer",
      description: "Caddie App Tablet Android 및 Admin Web 운영 디자인, 가이드 관리, QA, UT 진행.",
    },
    {
      company: "골프존",
      period: "2021.10 - 2023.02",
      role: "Product Designer / UI Designer",
      description: "Caddie App Tablet Native UX/UI 기획 및 디자인 시스템 구축. 골프존앨범 App MVP 운영 및 GA 데이터 기반 리뉴얼 수행.",
    },
    {
      company: "브이씨 (Voice Caddie)",
      period: "2019.09 - 2021.09",
      role: "GUI Designer / Product Designer",
      description: "스마트워치(T7, T8, T9) GUI 메인 디자인 및 가이드 배포. MySwingCaddie, MyVoiceCaddie 앱 메인 디자인 및 Lottie 기반 인터랙션 모션 제작.",
    },
    {
      company: "알마로꼬",
      period: "2018.04 - 2019.04",
      role: "Brand / Graphic Designer",
      description: "Castelbajac, Lecoqsportif 등 오프라인 프로모션 기획/디자인 및 공간 브랜딩 수행.",
    },
  ],
  contact: {
    email: "ymkwith@gmail.com",
    phone: "010-2328-1916",
    figma:
      "https://www.figma.com/file/bNqLd22t01eB5L63r2YyXF/Untitled?type=design&node-id=0%3A1&mode=design&t=h2p9V2dYd4CgT235-1",
  },
};

export type PortfolioData = typeof portfolioData;
export type CaseStudy = {
  context: string;
  process: string[];
  decisions: { title: string; detail: string }[];
  results: string[];
  gallery?: { src: string; caption?: string }[];
};
export type Project = (typeof portfolioData.projects)[number] & {
  images?: string[];
  caseStudy?: CaseStudy;
};
export type RecruiterSummaryItem = (typeof portfolioData.recruiterSummary)[number];
export type CareerItem = (typeof portfolioData.career)[number];
