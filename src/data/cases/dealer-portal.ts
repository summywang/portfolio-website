// 唯一中文正文來源：作者與 AI 直接共同編輯。
// 標題 title/subtitle、正文 paragraphs/text、圖說 caption、圖片 src；保留引號與逗號。
// 事實與來源界線見內容庫的 projects/dealer-portal/專案筆記.md；禁止以舊稿生成覆蓋。
import type { CaseStudyData } from "../schema";
export const dealerPortal: CaseStudyData = {
  "slug": "dealer-portal",
  "entryType": "case-study",
  "language": "zh-Hant",
  "provenance": {
    "kind": "original"
  },
  "hero": {
    "title": "E-Bike 診斷維護工具",
    "subtitle": "我重新打造了診斷與排修流程，讓技師更有效率地推進工作",
    "status": "2025 年 3 月上線",
    "media": {
      "type": "image",
      "src": "/assets/projects/dealer-portal/2026-09-21_dealer-portal_overview_default.jpg",
      "alt": "左側工具導覽、中央車輛總覽、右側任務清單",
      "caption": "先掌握車況，再選擇行動：我將全車資訊、維護任務與工具放進同一個工作區。",
      "fit": "contain"
    }
  },
  "snapshot": {
    "summary": [
      "作為唯一的 UI/UX 設計師，我與 PO 共同主導整體流程與介面設計，建立任務導向的工作方式與模組化的 UX 基礎，支援未來更多診斷項目與工具的擴充，革新技師的工作體驗。"
    ],
    "product": "E-Bike Service Tool",
    "role": "Product Designer",
    "timeline": "2023 Q2 啟動，2025 年 3 月上線，持續維護中",
    "team": "1 位 PO、1 位 Scrum Master、2 位前端、3 位後端、3 位 QA",
    "focus": [
      "任務導向流程",
      "軟硬體整合",
      "設計系統"
    ],
    "context": {
      "title": "服務北美、歐洲與日本經銷商的 e-bike 維修工具",
      "paragraphs": [
        "使用者多為自行車行的經銷商，不一定具備 e-bike 專業維修經驗。工具必須讓新手快速找到問題並完成修復，也讓資深技師保有安排服務的自主權。",
        "這是一個軟硬體緊密交織的複雜專案：每項檢測都牽涉實體部件、韌體與雲端驗證，也要同時回應品牌商、售服等內外部利害關係人。我們選擇打破舊版架構，從根本重塑技師的工作流程，而不是在原有流程上修補。"
      ],
      "metrics": [
        "支援北美、歐洲、日本多個品牌車商",
        "4,000+ 經銷商技師",
        "每年維護 40,000+ 台車輛"
      ]
    }
  },
  "problem": {
    "content": {
      "title": "關卡越來越長，技師放棄走完整個診斷流程",
      "paragraphs": [
        "隨著系統升級，必要的診斷與更新項目持續增加，售服也提出更多支援工具的擴充需求。"
      ],
      "mediaLayout": "comparison",
      "media": [
        {
          "type": "image",
          "src": "/assets/projects/dealer-portal/2026-09-24_legacy-overview-diagnosis.jpg",
          "alt": "舊版 Bike Overview 以部件小卡顯示序號與韌體資訊，右下疊放逐項檢查的 Automatic Diagnosis 畫面",
          "caption": "之前：以部件資訊為主的總覽（左）及關卡式診斷（右下）",
          "fit": "contain"
        },
        {
          "type": "image",
          "src": "/assets/projects/dealer-portal/2026-09-24_overview-component-popover.jpg",
          "alt": "新版 Service Tool 三欄總覽：中央車圖點開 Motor 圖釘，浮層顯示部件資訊與 Critical 異常入口，右側為 Workspace 任務清單",
          "caption": "之後：一連車就進入任務導向的總覽頁",
          "fit": "contain"
        }
      ],
      "pains": [
        {
          "title": "卡在眼前關卡，無法掌握全車問題",
          "body": "這是影響最深、直接促成重構的問題。技師被迫跟隨自動檢測；一關卡住，後續問題便看不見，無法第一時間向車主說明車況、安排整體維修。"
        },
        {
          "title": "最想處理的問題，無法優先著手",
          "body": "「我想先修復馬達，但出現了另一個關卡異常」技師無法依現場需求，自主決定處理的優先順序。"
        },
        {
          "title": "總覽頁資訊無助於維修，技師得花時間自己找",
          "body": "即使走完關卡進入總覽頁，技師看到的是一排零件圖示與序號，不清楚零件的實際外觀與安裝位置；診斷工具與技術文件也不在第一眼可見的資訊裡，技師得另外查找，拖慢維修進度。"
        }
      ]
    }
  },
  "strategy": {
    "content": {
      "title": "任務導向，讓技師看清問題後自主推進",
      "paragraphs": [
        "我們將診斷與修復分開：先呈現系統能偵測的異常與維護需求，把尚未檢查的部分明確標示，讓技師有依據地安排接下來的工作。必要的技術依賴仍保留，更新、維護與修復由技師主動執行。",
        "我將設計重點放在三個相連的環節：用工作區協助判斷要處理什麼，用維修指引接上可採取的行動，再用部件圖解引導實際檢測。每一項設計都要幫助技師從目前的狀態走到下一步。"
      ],
      "media": []
    }
  },
  "decisions": {
    "content": {
      "items": [
        {
          "id": "decision-1",
          "label": "Workspace",
          "title": "我把車況、待辦與工具並置，讓技師看清後就能著手",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "Beta 版已經有 Workspace，但畫面主要區域仍被搜尋與工具卡片占據。向品牌商 Demo 時，對方回饋功能很多，卻看不出該從哪裡開始。布局探索讓我看見取捨：只突出任務會藏住工具，羅列工具又會弱化眼前的待辦。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "image",
                "src": "/assets/projects/dealer-portal/2026-09-22_dealer-portal_beta-search-tools-workspace.png",
                "alt": "大型搜尋區、分組工具卡片與車輛任務側欄",
                "caption": "Beta：Workspace 已存在，但搜尋與工具卡片占據主要區域，任務與工具競爭注意力。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "於是我提出三欄布局，並與團隊討論定案：左側放工具、中央呈現車況、右側聚焦當前任務。技師判斷問題的同時就能看見行動入口，可以從待辦進入處理，也能直接開啟需要的工具；歷史紀錄移至 Service Book，讓工作區只專注眼前這台車。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "image",
                "src": "/assets/projects/dealer-portal/2026-09-21_dealer-portal_overview_component-modal.jpg",
                "alt": "三欄總覽中的部件資訊浮層與任務側欄",
                "caption": "三欄版：對照車況與待辦決定要做什麼，再從任務或固定工具入口開始處理。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "任務依是否影響行駛分為 Critical 與 Warning，協助技師判斷先後；尚未檢查的項目另有獨立狀態。處理完眼前異常，工作區仍會提醒剩餘檢查，讓技師繼續盤點全車。"
              ]
            }
          ]
        },
        {
          "id": "decision-3",
          "label": "維修指引",
          "title": "我將問題說明接上排查步驟，讓技師知道如何繼續",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "我建立三段式維修內容結構，並與 marketing 協作分類與撰寫層次。技師從待辦進入後，需要知道問題代表什麼，以及接下來能怎麼查；我將原本受彈窗篇幅限制、分散在不同管道的說明，整理成一致的閱讀順序："
              ]
            },
            {
              "type": "list",
              "items": [
                "Description：先理解部件正常時如何運作。",
                "Potential Impact：知道異常未處理可能衍生什麼問題。",
                "Troubleshooting：逐步檢查可能的異常源頭。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "image",
                "src": "/assets/projects/dealer-portal/2026-09-22_dealer-portal_troubleshooting_full.jpg",
                "alt": "含三段內容、影片、檢測入口與售服求助的排解指南",
                "caption": "同一份指引依序回答：正常時如何運作、為什麼需要處理、現在該檢查什麼。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "這個結構固定閱讀順序，同時保留售服擴充步驟、媒體與檢測模組的彈性。技師可以邊做邊理解；無法自行排除時，也能直接回報並帶入車輛資訊，交由售服透過 Zendesk 接手。"
              ]
            }
          ]
        },
        {
          "id": "decision-5",
          "label": "部件引導",
          "title": "讓不熟悉零件的技師也能上手：車圖定位與部件對照",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "經銷商常同時維修多個品牌的車，技師不一定熟悉每款 e-bike 的零件。我在總覽中央放上車圖，用圖釘標出各部件的位置；點開圖釘就能看到部件外觀與資訊，以及這個部件的異常入口。技師不必先認得零件名稱，也能從車上的位置找到問題，直接進入處理。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "image",
                "src": "/assets/projects/dealer-portal/2026-09-24_overview-component-popover.jpg",
                "alt": "總覽車圖上點開 Motor 圖釘，浮層顯示部件資訊與 Error 32 的 Critical 異常入口",
                "caption": "點開部件圖釘，即可看到部件資訊與對應異常，並直接進入處理。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "到了需要動手檢測的步驟，我也為不同款式 HMI 繪製字母對照圖，工程師再以相同標記安排檢測。有了排查步驟，技師仍需要知道實際該碰哪裡；即使公司內部，也曾有人認不出 power button。對照圖將名稱轉為可辨識的按鍵位置，支持需要人工配合的檢查。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "image",
                "src": "/assets/projects/dealer-portal/2026-09-22_dealer-portal_full-diagnosis_hmi-assisted.jpg",
                "alt": "帶字母標示的 HMI、操作指令與按鍵偵測次數",
                "caption": "字母標記將檢測指令對應到實體按鍵，技師能照著部件圖操作。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "這些圖解支持 Full Diagnosis 中需要人工配合的部分。我也與團隊將檢查整理為四個類別；檢測發現異常時先記錄並繼續，完成後彙整到 Workspace，讓技師掌握檢查結果，再安排修復。",
                "這項檢測引導源自品牌商提出的需求，上線後也獲得客戶高度評價。"
              ]
            }
          ]
        }
      ]
    }
  },
  "experience": {
    "content": {
      "title": "從掌握問題到留下紀錄，每一步都有接續的行動",
      "paragraphs": [
        "這條示範路徑呈現技師如何了解車況、選擇行動、補足檢查並留下紀錄。實際處理順序由技師依現場需求與系統的必要依賴安排。"
      ],
      "media": [],
      "steps": [
        {
          "id": "step-1",
          "title": "先掌握車況與待辦",
          "text": "連車後，自動檢查將可偵測異常與更新需求帶入 Workspace，尚未檢查的部分另行標示。",
          "media": {
            "type": "image",
            "src": "/assets/projects/dealer-portal/2026-09-21_dealer-portal_overview_default.jpg",
            "alt": "三欄車況總覽與 Workspace",
            "caption": "工具、車況與當前待辦同時可見。",
            "fit": "contain"
          }
        },
        {
          "id": "step-2",
          "title": "選擇任務，依指引處理",
          "text": "技師依維修需求選擇任務，查看問題說明與排解步驟，再主動執行更新、維護或檢測。",
          "media": {
            "type": "image",
            "src": "/assets/projects/dealer-portal/2026-09-22_dealer-portal_troubleshooting_full.jpg",
            "alt": "三段式維修指南與檢測入口",
            "caption": "先理解問題，再依排解指引主動操作。",
            "fit": "contain"
          }
        },
        {
          "id": "step-3",
          "title": "補足尚未完成的檢查",
          "text": "處理已知異常後，技師仍可依待檢查狀態進行 Full Diagnosis；自動檢查與人工操作發現的問題會彙整回工作區。",
          "media": {
            "type": "image",
            "src": "/assets/projects/dealer-portal/2026-09-22_dealer-portal_full-diagnosis_hmi-assisted.jpg",
            "alt": "HMI 人工檢測與字母對照圖",
            "caption": "需要人工配合時，部件圖與字母標記引導實際操作。",
            "fit": "contain"
          }
        },
        {
          "id": "step-4",
          "title": "留下這次服務的紀錄",
          "text": "工作區隨任務與檢查狀態提示下一步；服務報告可記錄已完成工作與尚未處理的任務。",
          "media": {
            "type": "image",
            "src": "/assets/projects/dealer-portal/2026-09-22_dealer-portal_workspace-lifecycle.png",
            "alt": "任務清單、完整診斷提示、服務報告提示三種示範狀態",
            "caption": "待辦處理後仍提示剩餘檢查，再銜接服務報告；沒有待辦不等於已完成全車檢查。",
            "fit": "contain"
          }
        }
      ]
    }
  },
  "impact": {
    "content": {
      "title": "上線首年，服務 52,909 台車輛",
      "paragraphs": [
        "新版於 2025 年 3 月上線。任務導向的維護體驗已進入經銷商的實際服務流程；以下是設計、工程與售服共同支持的產品使用成果。"
      ],
      "media": [],
      "closingParagraphs": [
        "時間比較只涵蓋技師進入總覽、掌握車況的階段，不代表完整診斷或實際修復耗時；事件次數與使用者轉換率分開計算。"
      ],
      "evidence": [
        {
          "kind": "measured",
          "text": "從連車到掌握車況與待辦，平均由 4 分 25 秒縮短至 1.6 分鐘。",
          "source": "作者提供的前身與新版平均時間"
        },
        {
          "kind": "measured",
          "text": "157,412 次完成／消除事件。六類完成事件加總，並非去重任務數。",
          "source": "作者提供的上線首年平台統計"
        },
        {
          "kind": "measured",
          "text": "50,314 次 Full Diagnosis 完成事件。另以使用者漏斗觀察，11,995 位開始診斷者中，11,217 位在 30 分鐘內依序完成三步漏斗，轉換率為 93.51%。",
          "source": "作者提供的上線首年平台統計"
        }
      ]
    }
  },
  "reflection": {
    "content": {
      "title": "我把內容結構視為持續迭代的設計工作",
      "paragraphs": [
        "與 marketing、售服協作，讓我更重視 UI/UX 如何支持內容持續生長。三段式結構保留一致的理解順序，也能容納新的排解步驟、媒體與檢測模組。後來 Knowledge Base 應用於 Ask AI，讓這份結構工作的價值延續到新的服務方式。",
        "讓工作持續推進，也需要照顧系統無法自動完成的部分。實際排修仍仰賴技師的專業與手動操作；Full Diagnosis 提供逐步引導，但如何讓技師願意完成檢測與更新，仍是持續面對的難題。我們也在探索 AI 如何在需要動手的時刻給出更即時的協助。"
      ],
      "media": []
    }
  }
};
