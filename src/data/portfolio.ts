export const portfolioData = {
  hero: {
    headline: "반갑습니다. 복잡한 제품을 더 쉽게 만드는 강영미입니다.",
    subHeadline:
      "디지털 제품·업무 흐름·대시보드·관리자 도구·AI 기능을 설계하며, 문제 정의부터 정보 구조·인터페이스·디자인 시스템, PO/PM·엔지니어 협업까지 함께합니다. AI 윤리와 Human-AI Interaction, 업무 자동화에 관심이 많습니다.",
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
  projects: [
    {
      id: "p09",
      title: "Neo Happytalk R&D",
      role: "Product Design Lead",
      period: "2025",
      company: "블룸에이아이",
      platform: "Web SaaS",
      users: "상담사, 운영자, 관리자, End-user",
      summary: "여러 솔루션을 하나로 합치는 통합 방향과 화면 구성을 연구하고, 대표 보고를 거쳐 내부에 공유했습니다.",
      tags: ["플랫폼 통합", "UX 비전 수립", "차세대 설계"],
      problem: "제품들이 서로 나뉘어 있어 사용자 경험이 끊기고 통합적인 로드맵이 부족한 상황이었습니다.",
      strategy: "공통 정보 구조를 정리하고, 새 제품에 함께 쓸 화면 구성 원칙을 만들었습니다.",
      ownership: "통합 UX 방향을 제안했고, 이후 제품 개발 로드맵 논의에 반영되었습니다.",
      images: [
        "/images/portfolio/neo_happytalk_rnd_2.png",
        "/images/portfolio/neo_happytalk_rnd_3.png",
        "/images/portfolio/happytalk_ai_kb_5.png",
      ],
      caseStudy: {
        context:
          "노후한 PHP 기반 코드 위에서 화면을 개선하는 데 시간이 오래 걸리는 상황이었습니다. 동시에 해피톡·콜브릿지 등 사내 여러 제품을 하나로 결합해, 브랜드를 전환하며 사용할 수 있는 통합 제품의 방향을 그려 보는 선행 연구가 필요했습니다.",
        process: [
          "내부 제품 상태를 휴리스틱으로 점검하는 리서치 진행",
          "제품 전반의 병목 지점 도출",
          "개선 방향을 담은 화면 제작",
          "내부 공유와 대표 보고를 거쳐 방향을 확정하고 진행",
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
          "상담 채팅 화면의 흐름 정리",
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
      platform: "Mobile · Web",
      users: "일반 사용자 (B2C)",
      summary: "사용자가 보는 채팅 화면을 더 보기 편하고 쓰기 쉽게 정리했습니다.",
      tags: ["모바일 UX", "인터랙션", "B2C 리뉴얼"],
      problem: "채팅 UI가 오래되어 브랜드 이미지를 깎고 있었고, 모바일에서 한 손으로 조작하기 불편했습니다.",
      strategy: "부드러운 움직임을 넣고 한 손으로 누르기 쉬운 위치에 주요 버튼을 배치했습니다.",
      ownership: "리뉴얼 후 사용 흐름이 매끄러워졌다는 긍정적인 피드백을 받았습니다.",
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
            title: "홈 버튼을 채팅 문의 시작점으로 정리",
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
      ownership: "역할 중심으로 메뉴를 다시 정리해, 처음 쓰는 사람도 필요한 기능을 더 쉽게 찾도록 했습니다.",
      images: [
        "/images/portfolio/happytalk_lnb_asis.png",
        "/images/portfolio/happytalk_lnb_tobe.png",
      ],
      caseStudy: {
        context:
          "LNB의 디자인 구조 자체가 노후해, 기존 영역을 그대로 유지한 채 쓰기 어려운 상태였습니다. 디자인 리뉴얼에 가깝지만, 데이터가 보기 어렵게 흩어져 정리되지 않은 채 그루핑돼 있던 화면들을 함께 재정리했습니다.",
        process: [
          "현황 IA·디자인 분석",
          "어느 범주를 어디로 옮길지 기획·디자인·개발 크로스 검토로 페이지 구조 정리",
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
      ownership: "숫자만 나열하지 않고, 관리자가 인력 재배치 같은 다음 행동을 정하는 데 도움이 되도록 했습니다.",
      images: [
        "/images/portfolio/happytalk_stats_dashboard_1.png",
        "/images/portfolio/happytalk_stats_dashboard_2.png",
      ],
    },
    {
      id: "p06",
      title: "Design System",
      role: "Product Designer",
      period: "2024.07 ~ 2025.05",
      company: "블룸에이아이",
      platform: "Web SaaS",
      users: "내부 개발팀 및 디자이너",
      summary: "디자인 시스템을 프론트팀과 협업하여 개발 속도를 높이고 있습니다.",
      tags: ["디자인 시스템", "협업 효율", "일관성"],
      problem: "화면마다 디자인이 조금씩 다르고 작업 속도가 늦어지는 문제를 해결하고 싶었습니다.",
      strategy: "디자인 시스템을 Storybook 가이드라인으로 구축하고 Git 활용으로 디자인 가이드라인을 지속 업데이트하고 있습니다.",
      ownership: "시스템을 팀에 정착시켜 소통 비용을 줄이고, 새 화면을 더 빠르게 만들 수 있게 했습니다.",
      images: [],
    },
    {
      id: "p10",
      title: "Happytalk AI Knowledge Base",
      role: "Product Designer",
      period: "2025.09 ~ 2025.12",
      company: "블룸에이아이",
      platform: "Web SaaS",
      users: "상담 운영자, 관리자",
      summary: "AI가 상담 지식을 학습하고 답변하게 돕는 관리용 인터페이스를 설계했습니다.",
      tags: ["AI 지식 관리", "정보 구조화", "SaaS UX"],
      problem: "방대한 매뉴얼을 일일이 찾아야 하는 상담원의 불편함과 답변이 달라지는 문제를 해결하려 했습니다.",
      strategy: "지식 데이터의 가공과 학습 상태를 관리하는 대시보드를 만들었습니다.",
      ownership: "상담원이 지식을 찾는 시간을 줄여 운영 효율을 높였습니다.",
      images: [
        "/images/portfolio/happytalk_ai_kb_1.png",
        "/images/portfolio/happytalk_ai_kb_2.png",
        "/images/portfolio/happytalk_ai_kb_3.png",
        "/images/portfolio/happytalk_ai_kb_4.png",
      ],
    },
    {
      id: "p15",
      title: "Callbridge Product UX",
      role: "Product Designer",
      period: "2025.11 ~ 2026.03",
      company: "블룸에이아이",
      platform: "Web SaaS",
      users: "상담 운영자, 관리자",
      summary: "콜브릿지·해피톡 SNB 통일과 키컬러 정리로 버튼 위계를 또렷하게 다듬고, AI 상담 분석 대시보드를 함께 만들었습니다.",
      tags: ["SNB 통일", "비주얼 위계 정리", "AI 분석 대시보드"],
      problem: "콜브릿지와 해피톡의 SNB가 서로 달랐고, 키컬러가 화면 곳곳에 과하게 쓰여 정작 중요한 버튼의 위계와 액션이 잘 보이지 않았습니다. 상담 데이터도 기록에 그쳐 운영 인사이트로 이어지지 않았습니다.",
      strategy: "콜브릿지·해피톡 SNB를 하나로 맞추고, 키컬러 사용 범위를 줄여 버튼 위계와 화면 내 액션이 또렷이 보이도록 정리했습니다. AI가 분석한 상담 주제·반복 이슈는 운영 리스크와 개선 포인트 중심의 대시보드로 보여줬습니다.",
      ownership: "콜브릿지 화면의 SNB와 비주얼 위계를 정리하고, 운영자가 데이터를 보고 다음 판단을 내릴 수 있는 분석 대시보드를 만들었습니다.",
      images: [],
    },
    {
      id: "p01",
      title: "Caddie App Tablet UX",
      role: "Product Designer",
      period: "2021.10 ~ 2023.06",
      company: "골프존",
      platform: "Android Tablet · Web Admin",
      users: "골프장 캐디 및 관제 운영자",
      summary: "강한 햇빛 아래에서도 실수를 줄이고 조작하기 쉬운 태블릿 화면을 만들었습니다.",
      tags: ["현장 사용성", "특수 환경", "조작 편의성"],
      problem: "강한 햇빛과 카트 진동 때문에 화면을 보기 어렵고 무전 중심의 소통으로 경기가 지연되는 문제가 있었습니다.",
      strategy: "정보는 48pt 이상으로 크게 표시하고, 버튼을 실제 크기보다 120% 넓게 설정해 실수로 잘못 누르는 경우를 줄였습니다.",
      ownership: "현장 테스트를 거쳐 야외에서 쓰기 편하도록 화면을 다듬었습니다.",
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
      ownership: "공통 컴포넌트와 토큰을 팀에 정착시키고, 주요 화면의 사용성·흐름 개선 작업을 맡아 진행했습니다.",
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
      company: "주식회사 VC",
      platform: "Smart Watch · Hand Device · Native App",
      users: "필드에서 기기와 앱을 함께 쓰는 골퍼",
      summary: "스마트워치·핸드 디바이스 GUI부터 네이티브 골프 앱과 인터랙션 모션까지, VC의 디바이스·앱 제품 경험을 두루 설계했습니다.",
      tags: ["기기 GUI", "네이티브 앱", "인터랙션 모션"],
      problem: "스마트워치(T7·T8·T9)와 핸드 디바이스, 여러 골프 앱에 걸쳐 화면이 분산돼, 작은 화면 가독성과 일관된 사용 경험을 확보하기 어려웠습니다.",
      strategy: "워치에는 핵심 거리 데이터만 남기고 상세는 앱으로 이관했고, 제품군 전반에 일관된 GUI 가이드와 Lottie 기반 인터랙션 모션을 정리했습니다. MySwingCaddie·MyVoiceCaddie 네이티브 앱을 메인 디자인·출시하고 iOS/Android 가이드·에셋을 관리했으며, 야디지북 핸드 디바이스 GUI와 1년 싸이클의 제품 양산 흐름을 경험했습니다.",
      ownership: "스마트워치 GUI 디자인을 맡고, 앱 출시·가이드 운영부터 제품 양산까지 VC의 디바이스·앱 제작 전반을 경험했습니다.",
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
      ownership: "AI 활용 가이드를 팀에 공유했고, 2025년 8월부터는 AI 디자인 크리틱 점검을 상시 운영하고 있습니다.",
      images: [],
    },
    {
      id: "p14",
      title: "Frontend Vibe Design Workflow",
      role: "Product Designer",
      period: "2026.03 ~ 진행 중",
      company: "블룸에이아이",
      platform: "Internal Process · Web",
      users: "디자이너, 프론트엔드 개발팀",
      summary: "정적 시안을 넘어 실제 동작하는 데모로 디자인을 검증하고, 디자인과 개발의 협업·핸드오프 방식을 개선하고 있습니다.",
      tags: ["디자인-개발 협업", "동작 데모 검증", "핸드오프 개선"],
      problem: "정적 시안만으로는 권한·상태별 케이스와 실제 인터랙션이 충분히 드러나지 않아, 디자인과 개발 사이에 해석 차이와 재작업이 생기기 쉬웠습니다.",
      strategy: "디자이너가 직접 동작하는 데모를 만들어 다양한 케이스를 검증하고, 확정된 결과를 운영 환경과 분리된 형태로 개발팀과 공유하는 협업 흐름을 만들었습니다.",
      ownership: "디자인을 동작하는 형태로 확인하는 협업 방식을 만들어, 디자인-개발 사이의 해석 차이를 줄였습니다.",
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
  contact: {
    email: "ymkwith@gmail.com",
    phone: "010-2328-1916",
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
