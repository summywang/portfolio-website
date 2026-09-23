// Generated from projects/dealer-portal/案例.md by scripts/sync-dealer-portal.py.
import type { CaseStudyData } from "../schema";
export const dealerPortal: CaseStudyData = {
  "slug": "dealer-portal",
  "entryType": "case-study",
  "language": "zh-Hant",
  "provenance": {
    "kind": "original"
  },
  "hero": {
    "title": "E-Bike Service Tool",
    "subtitle": "我重新打造了技師診斷與排修 E-Bike 的工作方式",
    "status": "2025 年 3 月上線",
    "media": {
      "type": "image",
      "src": "/assets/projects/dealer-portal/2026-09-21_dealer-portal_overview_default.jpg",
      "alt": "左側工具導覽、中央車輛總覽、右側任務清單",
      "caption": "工具、車況與待辦同時可見：這是我重新安排維修起點的核心布局。",
      "fit": "contain"
    }
  },
  "snapshot": {
    "summary": [
      "我提出三欄工作區，讓車況、待辦與工具同時可見；並與產品、工程團隊一起，將依關卡推進的服務體驗重構為一套任務導向的維護工具。",
      "E-Bike Service Tool 是 Dealer Portal 中供經銷商技師診斷、維護電動自行車的工具。作為唯一的 UI/UX 設計師，我聚焦一個改變：讓技師先掌握車況，再決定如何處理。 系統自動診斷，更新與維修則保留由技師主動執行。"
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
      "title": "技師被卡在關卡裡，難以立即掌握車況、著手維修",
      "paragraphs": [
        "技師需要先知道這台車有哪些問題，再決定如何處理。舊版卻將檢查與更新放在總覽之前；即使進入總覽，畫面也沒有清楚接上下一個維修行動。"
      ],
      "media": [],
      "pains": [
        {
          "title": "卡在一個問題，就難以看見其他問題",
          "body": "前面的檢查或更新若卡住，技師便難以及時掌握全車維護需求，影響向車主說明車況與安排維修。",
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
      "title": "從「系統主導」轉向「任務導向」",
      "paragraphs": [
        "我們將發現問題與執行修復分開：系統先呈現能診斷的結果，將需要處理的事項留在工作區；技師再依現場需求選擇行動。必要的技術依賴仍保留，更新與維護都由技師主動執行。",
        "我將這個方向落在工作區布局、維修內容結構與實體操作圖解上，依序回應三個相連的設計問題：如何讓待辦突出又不藏住工具？看見任務後，如何知道怎麼處理？需要動手檢測時，如何跟得上指引？"
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
          "title": "我用三欄布局，平衡任務管理與工具取得",
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
                "三欄各自承擔明確任務：左側保留工具、中央呈現車況、右側聚焦當前任務。 歷史紀錄移至 Service Book，讓工作區集中處理眼前這台車。技師能從待辦進入對應處理，也能直接選擇需要的工具。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "image",
                "src": "/assets/projects/dealer-portal/2026-09-21_dealer-portal_overview_component-modal.jpg",
                "alt": "三欄總覽中的部件資訊浮層與任務側欄",
                "caption": "三欄版：工具有固定入口，當前待辦持續可見，中央保留車輛與部件情境。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "任務再依對行駛的影響分級，尚未檢查的項目保留獨立狀態。這讓「有什麼問題」與「還有什麼不知道」同時可見，避免沒有錯誤提示就被理解為檢查已完成。"
              ]
            }
          ]
        },
        {
          "id": "decision-3",
          "label": "維修指引",
          "title": "我將分散的排解資訊，組織成能接著做的指引",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "我建立三段式維修內容結構，並與 marketing 協作分類與撰寫層次，讓工作區中的待辦接上可執行的指引。相較於受彈窗篇幅限制、散落在不同管道的說明，共同結構讓技師依序理解："
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
          "title": "我把畫面上的指令，對應到技師手上的部件",
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
                "這些圖解支持 Full Diagnosis 中需要人工配合的部分。我也與團隊將檢查整理為四個類別；系統會記錄發現的異常並彙整到 Workspace，讓技師完成問題盤點後，再安排修復。"
              ]
            }
          ]
        }
      ]
    }
  },
  "experience": {
    "content": {
      "title": "看見待辦之後，技師能一路處理到服務紀錄",
      "paragraphs": [
        "以下以一次維修的示範路徑，串起工作區、指引與檢測；在系統允許的範圍內，技師可以選擇不同處理順序。"
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
          "text": "技師查看問題說明與排解步驟，再主動執行更新、維護或檢測。",
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
          "text": "Full Diagnosis 結合自動檢查與人工操作引導，將發現的問題彙整回工作區。",
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
        "以上呈現使用規模與流程完成情況；事件次數與使用者轉換率分開計算，尚無可比較的舊版完成率基準。"
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
        "另一個持續面對的難題，是讓技師願意並能夠完成手動檢測與更新。Full Diagnosis 已提供逐步引導；接下來，我們仍在探索 AI 如何在技師需要動手的時刻給出更即時的協助。"
      ],
      "media": []
    }
  }
};
