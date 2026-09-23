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
      "我提出三欄工作區，並與產品、工程團隊一起重整診斷與排修流程，讓技師先掌握全車維護需求，再選擇任務、取得工具與指引，推進眼前的維修工作。",
      "E-Bike Service Tool 是 Dealer Portal 中供經銷商技師使用的診斷維護工具。作為唯一的 UI/UX 設計師，我聚焦從「看清問題」到「著手處理」的銜接：系統自動診斷並整理待辦，技師依現場情況與專業判斷安排處理，主動執行更新與維修。"
    ],
    "product": "E-Bike Service Tool",
    "role": "Product Designer",
    "timeline": "2023 年第二季開始，2025 年 3 月上線，持續維護至今",
    "team": "1 位 PO、1 位 Scrum Master、2 位前端、3 位後端、3 位 QA",
    "focus": [
      "任務導向流程",
      "資訊架構",
      "維修操作引導"
    ]
  },
  "problem": {
    "content": {
      "title": "還沒看清全車問題，技師就得先處理眼前關卡",
      "paragraphs": [
        "要安排維修，技師需要先掌握車況與維護需求。舊版將檢查與更新放在總覽之前，前面的異常可能阻礙後續資訊取得；進入總覽後，技師仍得自行尋找下一步。工作在掌握問題、安排順序與取得工具之間反覆受阻。"
      ],
      "media": [],
      "pains": [
        {
          "title": "卡在一個問題，就難以看見其他問題",
          "body": "前面的檢查或更新若卡住，其他維護需求便難以及時看見。技師得隨關卡逐步了解問題，難以一開始就向車主說明車況、安排整體維修。",
          "media": []
        },
        {
          "title": "最想處理的問題，無法優先著手",
          "body": "即使已有優先處理的目標，技師仍可能得先排除前面關卡的異常，才能繼續處理原本的維修需求。",
          "media": [
            {
              "type": "image",
              "src": "/assets/projects/dealer-portal/2026-09-21_dealer-portal_legacy_automatic-diagnosis.png",
              "alt": "舊版自動診斷、部件異常與排解彈窗",
              "caption": "前往總覽之前，技師先遇到檢查異常；部分關卡仍需處理後才能繼續。",
              "fit": "contain"
            }
          ]
        },
        {
          "title": "看見部件資料，卻不知道下一步該做什麼",
          "body": "總覽以序號與韌體版本等部件資料為主，診斷工具與支援入口不顯眼，技師仍得自行找出要處理的項目與可用工具，才能著手維修。",
          "media": [
            {
              "type": "image",
              "src": "/assets/projects/dealer-portal/2026-09-21_dealer-portal_legacy_bike-overview.png",
              "alt": "Bike Overview 的部件小卡、序號及韌體資訊，左側車輛資訊下有 Advanced Diagnosis 入口",
              "caption": "舊版總覽以部件小卡列出身分資料；診斷入口位於車輛資訊下方，維修任務沒有成為畫面重點。",
              "fit": "contain"
            }
          ]
        }
      ]
    }
  },
  "strategy": {
    "content": {
      "title": "先讓技師看清問題，再由技師決定如何推進",
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
                "我提出三欄布局，並與團隊討論調整，回應 Beta 操作起點不清楚的問題。當時已有 Workspace，但主要區域仍由搜尋與工具卡片占據；品牌商 Demo 回饋也指出功能多、流程不夠清楚。布局探索讓我看見取捨：只突出任務會藏住工具，羅列工具又容易弱化當前待辦。"
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
                "我將左側留給工具、中央呈現車況、右側聚焦當前任務，讓技師判斷問題時也能看見行動入口。技師可以從待辦進入對應處理，也能直接使用需要的工具；歷史紀錄則移至 Service Book，讓工作區集中在眼前這台車。"
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
                "任務依對行駛的影響分級，協助技師判斷優先順序；尚未檢查的項目也保留獨立狀態。處理完眼前異常後，工作區仍能提醒剩餘檢查，讓技師繼續盤點全車問題。"
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
          "label": "檢測引導",
          "title": "我用部件對照圖，將檢測指令轉成能跟著做的操作",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "我為不同款式 HMI 繪製字母對照圖，工程師再以相同標記安排檢測。有了排查步驟，技師仍需要知道實際該碰哪裡；即使公司內部，也曾有人認不出 power button。對照圖將名稱轉為可辨識的按鍵位置，支持需要人工配合的檢查。"
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
                "這些圖解支持 Full Diagnosis 中需要人工配合的部分。我也與團隊將檢查整理為四個類別；檢測發現異常時先記錄並繼續，完成後彙整到 Workspace，讓技師掌握檢查結果，再安排修復。"
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
        "這些數據呈現工具的使用規模與診斷流程完成情況；事件次數與使用者轉換率分開計算。尚無可比較的舊版完成率或實際修復耗時基準，不能據此量化維修效率的提升。"
      ],
      "evidence": [
        {
          "kind": "measured",
          "text": "52,909 台不重複車輛。依首年平台統計。",
          "source": "作者提供的上線首年平台統計"
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
