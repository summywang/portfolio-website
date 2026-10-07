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
    "title": "E-Bike 診斷維修工具",
    "subtitle": "串起技師、車輛與系統，讓技師更有效率的推進工作",
    "status": "2025 年 3 月上線",
    "media": {
      "type": "image",
      "src": "/assets/projects/dealer-portal/2026-10-08_overview.jpg",
      "alt": "上線版三欄總覽：左側工具、中央車輛與部件位置、右側任務和待完成診斷",
      "fit": "contain"
    }
  },
  "snapshot": {
    "summary": [
      "作為團隊唯一的 UI/UX 設計師，我與售服、產品及工程團隊共同重構診斷維修體驗。我提出三欄工作區，將車況、當前任務與工具放在同一個情境中，再以維修指引與部件圖解接上實際操作，讓技師能判斷優先順序、自主推進工作。"
    ],
    "product": "Hyena E-Bike Service Tool",
    "role": "Product Designer",
    "timeline": "2023–2025",
    "team": "1 位 PO、1 位 Scrum Master、2 位前端、3 位後端、3 位 QA",
    "focus": [
      "任務導向流程",
      "軟硬體整合",
      "資訊架構",
      "跨團隊協作"
    ],
    "context": {
      "title": "服務北美、歐洲與日本經銷商的 e-bike 維修工具",
      "paragraphs": [
        "使用者來自不同自行車品牌的經銷商，並不隸屬 Hyena，也不一定熟悉電輔系統。工具需要帶著新手理解車況，同時讓資深技師保有判斷與操作的空間。每項檢測又牽涉實體零件、韌體與雲端驗證，流程必須兼顧人的工作方式與系統的必要依賴。"
      ],
      "metrics": [
        "支援北美、歐洲、日本等 70 個品牌車商",
        "4,000+ 經銷商技師",
        "每年維護 40,000+ 台車輛"
      ]
    }
  },
  "problem": {
    "content": {
      "title": "檢測項目越來越多，技師卻得先過關，才能看清全車",
      "paragraphs": [
        "時間來到 2024 年，客戶車款持續增加，系統不斷升級，必要的檢測與更新項目也跟著堆疊。售服團隊仍在規劃更多支援工具，舊版架構卻逐漸難以承接。我們攜手重新整理技師的工作流程，讓工具能跟上產品與維修需求的成長。"
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
          "src": "/assets/projects/dealer-portal/2026-10-08_overview.jpg",
          "alt": "上線版車況總覽與任務清單",
          "caption": "之後：先看見車況與待辦，再選擇要處理的工作。",
          "fit": "contain"
        }
      ],
      "pains": [
        {
          "title": "局部異常擋住整體車況",
          "body": "舊版以逐關檢查帶領技師，一旦卡在前面的異常，就難以先看見後續問題，影響向車主說明車況與安排整體維修。"
        },
        {
          "title": "處理順序受系統牽制",
          "body": "技師即使已有明確的維修目標，也可能得先處理流程中的其他項目，無法依現場需要決定優先順序。"
        },
        {
          "title": "找到資訊，還要再找工具與實體零件",
          "body": "總覽以零件圖示、序號與韌體資訊為主。對不熟悉電輔系統的經銷商而言，零件名稱未必能對應到車上的位置，診斷入口與技術文件也需要另外查找。"
        }
      ]
    }
  },
  "strategy": {
    "content": {
      "title": "先盤點問題，再由技師安排修復",
      "paragraphs": [
        "打破關卡、直接進入總覽，是團隊共同的方向。我們將診斷與修復分開：檢查發現的異常先記錄，能繼續的檢查繼續進行，再把問題彙整成可處理的任務；必要的技術依賴仍然保留。",
        "我的設計重點是讓這份自由有依據：工作區要同時呈現已知問題與尚未檢查的狀態，任務要接上指引與工具，需要人配合的操作則給出具體對照。系統提供判斷所需的資訊，由技師主動執行更新與維護。"
      ]
    }
  },
  "decisions": {
    "content": {
      "items": [
        {
          "id": "decision-1",
          "label": "Workspace",
          "title": "借用遊戲任務的組織方式，平衡車況、待辦與工具",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "Beta 版已經有 Workspace，但搜尋與工具卡片占據主要畫面。品牌商在 Demo 時回饋：功能很多，卻看不出從哪裡開始。布局探索也讓我看見兩端的代價：只強調任務會藏住工具，羅列工具又會弱化當前待辦。"
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
                "與售服持續討論時，另一組需求逐漸清楚：零件外觀相近、經銷商可能不知道控制器在哪裡，新的診斷與更新工具又需要擴充空間。我從遊戲任務欄想到形式，團隊再聯想到專案管理的 Workspace，一起發展成任務導向的工作區。",
                "我提出以車輛為中心的三欄布局。借用遊戲破任務的角度來理解，就是先認識角色與裝備、了解目前任務，再找到可用的工具：中央車圖建立車輛與部件的脈絡，右側聚焦當前任務，左側保留穩定且可擴充的工具入口。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "video",
                "src": "/assets/projects/dealer-portal/2026-10-08_workspace.mp4",
                "poster": "/assets/projects/dealer-portal/2026-10-08_overview.jpg",
                "alt": "從三欄總覽選擇韌體更新任務，進入更新頁面",
                "caption": "上線版操作：車輛、任務與工具同時可見，技師從當前待辦進入處理。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "這個選擇保留兩種起點：技師可以跟著任務處理，也能直接開啟熟悉的工具。歷史紀錄移至 Service Book，讓工作區專注眼前這台車；任務分級與待檢查狀態則協助判斷先後，避免把待辦清空誤認為全車已檢查完成。"
              ]
            }
          ]
        },
        {
          "id": "decision-3",
          "label": "維修指引",
          "title": "固定理解順序，讓可擴充的內容接上實際排查",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "增加工具還不夠，技師也需要理解為什麼要做、如何開始。我建立三段式內容結構，與 marketing 協作分類與撰寫層次，將受彈窗篇幅限制、分散在不同管道的說明，整理成一致的閱讀順序："
              ]
            },
            {
              "type": "list",
              "items": [
                "Description：先理解部件正常時如何運作。",
                "Potential Impact：知道異常未處理可能帶來什麼影響。",
                "Troubleshooting：依步驟檢查可能的異常源頭。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "video",
                "src": "/assets/projects/dealer-portal/2026-10-08_guidance.mp4",
                "poster": "/assets/projects/dealer-portal/2026-10-08_guidance.jpg",
                "alt": "扭力感測器指引的問題說明、影響、圖解與可展開排查步驟",
                "caption": "同一份指引串起問題理解、圖解與檢測入口；售服可持續擴充步驟與媒體。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "我固定的是理解順序，並保留步驟、圖文與檢測模組的擴充彈性。技師可在指引中進入對應工具，邊做邊理解；無法自行排除時，再帶著車輛資訊轉交售服，透過 Zendesk 接手。"
              ]
            }
          ]
        },
        {
          "id": "decision-5",
          "label": "實體操作引導",
          "title": "把系統指令對應到看得見、按得到的部件",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "知道要檢測哪個部件，仍不代表知道該碰哪裡。連公司內部都曾有人認不出 power button；若只用零件名稱與文字指令，對不熟悉產品的經銷商仍有距離。我為不同款式 HMI 繪製字母對照圖，工程師再以相同標記安排檢測，讓指令能直接對應到實體按鍵。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "video",
                "src": "/assets/projects/dealer-portal/2026-10-08_hmi.mp4",
                "poster": "/assets/projects/dealer-portal/2026-10-08_hmi.jpg",
                "alt": "依 HMI 字母圖操作按鍵、讀取偵測計數，再由技師確認燈號",
                "caption": "上線版操作節錄：按鍵由系統計數，燈號由技師確認；省略中間重複操作與等待，未加速。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "圖解也要區分「正在檢查的零件」與「人要操作的位置」。例如感測器檢查需要技師操作車輛，不能只畫感測器所在處，讓人誤以為要拆換零件。這類引導把自動檢查、人的操作與人的判讀接在一起，支持系統無法獨立完成的檢測。"
              ]
            }
          ]
        },
        {
          "id": "decision-transparency",
          "label": "讓複雜關係透明",
          "title": "發布之前，先交代資料會去哪裡、誰能看見",
          "blocks": [
            {
              "type": "text",
              "paragraphs": [
                "經銷商不屬於公司內部，也未必了解 Dealer Portal 與 HRA 的關係。我規劃在發布服務報告前，將發布位置與可存取角色一起說清楚，讓技師能理解這次操作會影響哪些產品與對象。"
              ]
            },
            {
              "type": "media",
              "media": {
                "type": "image",
                "src": "/assets/projects/dealer-portal/2026-10-08_publication.jpg",
                "alt": "服務報告發布視窗列出 Dealer Portal、HRA 的報告位置及各自可存取對象",
                "caption": "發布提示：並列兩個產品的位置、可見對象與取消發布的說明。由實際錄影裁出視窗。",
                "fit": "contain"
              }
            },
            {
              "type": "text",
              "paragraphs": [
                "同樣的原則也出現在維修過程：從更新前的準備條件，到檢測中的操作與結果提示，將系統背後的條件轉成眼前能理解的資訊。報告的實際採用仍有限；清楚交代操作後果，是這項設計已落實的部分。"
              ]
            }
          ]
        }
      ]
    }
  },
  "experience": {
    "content": {
      "title": "一次實際操作，看見「檢查完成」與「問題解決」的差別",
      "paragraphs": [
        "這段上線版錄影中，操作者先更新韌體、檢查扭力感測器，接著補做完整診斷，才發現需要更新的控制器參數。以下保留關鍵狀態轉換；這是一條實際示範路徑，處理順序仍可依現場需求安排。"
      ],
      "steps": [
        {
          "id": "step-1",
          "title": "感測器檢測通過",
          "text": "從扭力感測器任務進入指引與檢測工具，依圖解操作，查看各項感測器的檢測結果。",
          "media": {
            "type": "image",
            "src": "/assets/projects/dealer-portal/2026-10-08_sensor-result.jpg",
            "alt": "感測器診斷顯示速度、踏頻與扭力感測器結果",
            "fit": "contain"
          }
        },
        {
          "id": "step-2",
          "title": "待辦清空，仍有未檢查項目",
          "text": "處理眼前任務後，工作區仍保留 Full Diagnosis 待完成狀態，提醒目前沒有待辦不代表已看過全車。",
          "media": {
            "type": "image",
            "src": "/assets/projects/dealer-portal/2026-10-08_pending-checks.jpg",
            "alt": "工作區沒有當前任務，完整診斷仍為待完成狀態",
            "fit": "contain"
          }
        },
        {
          "id": "step-3",
          "title": "診斷完成，帶回新的問題",
          "text": "完整診斷走完後，摘要仍列出一項 Critical；操作者可回到 Workspace 處理控制器參數更新，無須把修復當成完成診斷的前提。",
          "media": {
            "type": "image",
            "src": "/assets/projects/dealer-portal/2026-10-08_diagnosis-summary.jpg",
            "alt": "完整診斷摘要仍列出一項 Critical，提供回工作區處理的入口",
            "fit": "contain"
          }
        },
        {
          "id": "step-4",
          "title": "主動更新，再確認狀態",
          "text": "操作者執行參數更新並確認完成，返回工作區後，這次操作路徑的待辦與檢查狀態才一併清除。接著也可建立服務報告留下紀錄。",
          "media": {
            "type": "image",
            "src": "/assets/projects/dealer-portal/2026-10-08_all-clear.jpg",
            "alt": "參數更新後，工作區顯示 All Clear 與已完成的完整診斷",
            "fit": "contain"
          }
        }
      ],
      "caption": "畫面擷取自 2026 年 10 月的上線版錄影；本車使用非 Hyena 電池，診斷分類依這台車的配置呈現。"
    }
  },
  "impact": {
    "content": {
      "title": "上線首年，服務 52,909 台車輛",
      "paragraphs": [
        "新版於 2025 年 3 月上線，首年服務 52,909 台去重車輛。以下呈現團隊共同支持的產品使用成果；進入總覽的時間對應「更早掌握車況」，診斷漏斗與事件量則反映實際使用。"
      ],
      "media": [],
      "closingParagraphs": [
        "時間比較只涵蓋進入總覽、掌握車況的階段，不代表完整診斷或實際修復耗時；兩版計時與樣本的可比性仍待完整核對。事件總量、去重車輛與使用者漏斗是不同口徑，也不能單獨證明某一項設計的因果效果。"
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
          "text": "完整診斷使用者漏斗轉換率 93.51%。11,995 位開始者中，11,217 位在 30 分鐘內依序完成三步漏斗。",
          "source": "作者提供的上線首年平台統計"
        }
      ]
    }
  },
  "reflection": {
    "content": {
      "title": "流程有終點，仍要確認它是不是技師需要的終點",
      "paragraphs": [
        "我們希望服務不只停在修好車，也能把這次做了什麼交代清楚，因此加入服務報告。但實際使用情況很低。技師可能已有自己的報告系統，這仍是待確認的假設；目前能確定的是，完整的交付設計尚未換來預期採用。",
        "若繼續迭代，我會先釐清經銷商原本如何記錄與交付服務、在哪個環節需要這份報告，再判斷該調整流程、銜接既有工具，或縮小功能。接下來的重點，是確認這個終點如何接進他們真正的工作。",
        "另一個延續下來的價值是內容結構。與 marketing、售服一起建立的排解知識，後來也應用於 Ask AI。當時保留擴充彈性的選擇，讓既有內容有機會支持新的服務方式；人工檢測如何得到更即時的協助，仍是後續探索。"
      ]
    }
  }
};
