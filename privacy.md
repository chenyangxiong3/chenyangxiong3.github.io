---
title: Privacy Policy
---

# Privacy Policy / 隱私權政策

**Languages / 語言**：English (below) · [繁體中文（台灣／香港）](#繁體中文完整隱私權政策台灣香港適用) · [日本語（プライバシー通知）](privacy-ja.html) · [48-Hour Intimate Imagery Removal / 私密影像 48 小時刪圖入口](takedown.html)

Effective date: 21 November 2026.  
**Operator & Data Controller**: Chenyang Xiong (熊晨陽), an individual developer based in mainland China.  
**Data Protection Officer (DPO) & Privacy / Abuse Contact**: Chenyang Xiong — [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com).

## Who may use the service

The service generally requires a minimum age of 16. When Apple’s regional and account signals indicate that age assurance applies, we require an Apple declared age range confirming 18 or older; parental approval does not waive this threshold. This switch is supplied by Apple and does not disclose a state name to us. We do not use IP geolocation to decide this requirement. In the standard 16+ route, we store the date of birth you provide in Supabase (however, if a new account declares an age under 13, we do not retain the birth date and automatically delete the account and its personal data). In the Apple route, we store qualification status, the minimum age, verification method, policy version and check time, but not Apple's specific age range or an exact birthday from Apple. Previously provided birthdays remain part of the account record. These declarations are not identity documents or independent identity verification. Qualified accounts reuse their recorded status at later sign-ins. On this device we restore a previously qualified account promptly and check in the background; temporary service errors do not automatically revoke prior qualification. A confirmed failure to meet the requirement restricts app access and stops location recording. An unsent restriction may remain locally after sign-out until synchronized to prevent an offline restart from discarding it. Age records are not shown to other users, are included in your account export and are deleted with your account, subject to applicable retention duties. Export and account deletion remain available on the age gate for restricted accounts (ages 13–15 or under-18 in regulated regions). If age information is incorrect, or you believe an ineligible account exists, contact us.

## Data we process and why

- **Account & authentication**: Apple or Google sign-in identifier, account email, nickname and avatar — used for authentication, account display and support. Before a nickname becomes visible, we submit it to Microsoft Azure AI Content Safety for text screening. Rejected nicknames are not published; you may choose another.
- **Location & hexagonal grid footprints**: Precise location events and derived hexagonal grid footprints — used to build your map, sync it across devices, and provide sharing features only if you turn them on. If you enable background recording and grant iOS "Always" location permission, collection may continue when the app is not on screen or is relaunched by iOS. You can pause recording in the app and change iOS permission at any time.
- **Photos & photo library metadata**: Photo library location and time metadata are read on your device only after you enable photo discovery, to find photos associated with your grid cells. Photo content is uploaded only after you actively select it. Uploaded originals, thumbnails, avatars, and related metadata support the photo and map features. When you update your avatar, we submit the selected image to Microsoft Azure AI Content Safety before changing the visible avatar; if review is unavailable or any category score is above zero, the previous avatar remains.
- **Social features & one-to-one messages**: Friendships, access requests, one-to-one messages, message read state, blocked users, and visit activity — used to provide social features and prevent repeat notifications. Recent chats, conversations, and friend lists may be cached in protected files on your device for faster display; signing out clears that account's local cache.
- **Reports, appeals & nonconsensual intimate imagery (TIDA) takedowns**: In-app reports and appeals are processed to handle abuse and enforce community rules. When a recipient reports a private message, we copy only that reported message and submit it to Microsoft Azure AI Content Safety; we do not routinely scan unreported private conversations. For nonconsensual intimate imagery removal requests submitted via our public [48-Hour Removal Portal](takedown.html) (no account required), we collect requester/representative name, contact email (and optional phone), locating details, electronic signature, good-faith statement, and a hashed source IP for abuse prevention.
- **Technical diagnostics & SDK data**: Diagnostics, performance metrics, and network request metadata needed to operate the app, render maps, prevent abuse, and investigate failures.

The legal basis depends on your jurisdiction and the feature: provision of the service you request, your explicit choices for optional location/photo discovery and sharing, compliance with legal obligations (such as safety and takedown laws), and legitimate interests in security and abuse prevention. You may withdraw an optional choice in Settings; prior lawful processing is unaffected.

## Visibility and sharing

Sharing footprints and uploaded photos with other users is **off by default**. If you turn it on, people who visited the same grid cell may see your activity and photos in that cell, and friends or people you grant full access may see your full shared map. You may switch sharing off at any time; newly requested views will be denied. People who already downloaded or saw content may retain copies. Blocking a user prevents new access through the app. Do not upload photos of others without a lawful basis or permission where required.

## Providers and international data transfers

Because Yonprint is operated by an individual developer in mainland China using cloud and platform services across multiple regions, your personal data may be stored in, transferred to, or accessed from jurisdictions outside your home country or region (including Japan, the United States, and mainland China):

- **Supabase (Processor)**: Hosts our database, authentication, private photo storage, and backups primarily in its **Tokyo (`ap-northeast-1`)** region. However, Supabase Edge Functions may execute in regions close to the requester, and service logs, operational metadata, support access, or CDN edge delivery may occur outside Tokyo under [Supabase's DPA](https://supabase.com/legal/customer-resources/data-processing-addendum) and [Data Residency FAQ](https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq).
- **Microsoft Azure AI Content Safety (Processor)**: Processes uploaded photos, selected avatar updates, proposed nicknames, and the specific private message reported by its recipient using our configured **Japan East** resource under Microsoft's [Products and Services DPA](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA).
- **Google Sign-In (Identity Provider)**: When you choose Google sign-in, Google processes authentication and fraud-prevention/SDK telemetry data globally (including the United States) under [Google APIs Terms](https://developers.google.com/terms) and Google's privacy policy. Its SDK privacy declaration covers name, email, phone number, approximate location, user/device identifiers, usage data, and other technical data.
- **Apple (Sign in with Apple & DeclaredAgeRange)**: When you use Sign in with Apple or Apple's age-assurance signals, Apple processes data on-device and within Apple's infrastructure under [Sign in with Apple & Privacy](https://www.apple.com/legal/privacy/data/en/sign-in-with-apple/).
- **Mapbox (Map Service Provider)**: Provides map tiles and rendering services globally (including the United States and global CDNs) under [Mapbox's Privacy Policy](https://www.mapbox.com/legal/privacy) and [Mapbox DPA](https://www.mapbox.com/legal/dpa). Its SDK privacy declaration covers location, user identifier, product interactions, usage, performance, and diagnostic data. Mapbox's map attribution control provides its telemetry opt-out choice.
- **Resend (Alert Email Processor)**: Delivers moderation alert emails (and, where enabled, takedown confirmation receipts) primarily in the **United States** under [Resend's DPA](https://resend.com/legal/dpa). Alert emails contain only non-sensitive metadata (case number, priority, deadline, and console link) and never include intimate imagery, chat text, or precise coordinates.
- **Operator Remote Access (Mainland China)**: As the individual developer and operator based in **mainland China**, I remotely access necessary production data only for system maintenance, troubleshooting, content moderation, takedown execution, and responding to user rights requests, using restricted moderator/service credentials.

We do **not** sell personal data or use third-party SDKs for targeted advertising or cross-app tracking.

## Storage, security and retention

Uploaded photos are held in private storage and delivered through short-lived signed links after access checks. We use row-level security, role restrictions, and access checks, though no internet service can guarantee absolute security.

- **Active account, footprints, photos & normal chats**: Retained while your account is active. Permanent account deletion removes your Auth identity, profile, footprints, uploaded photos, and associated records, except where retention is required by law.
- **Reported or removed private-message evidence**: Extra copies of reported private messages and automated text-analysis records are retained while a report or appeal is open, and are automatically purged once **180 days** have passed after the report is reviewed/resolved with no pending appeal; extra evidence copies of removed messages are automatically purged **180 days** after recording once the appeal window closes with no pending appeal.
- **TIDA takedown quarantined evidence**: Images restricted under a nonconsensual intimate imagery takedown request are moved out of user-accessible buckets into a moderator-only private quarantine bucket to immediately cut off access, and are physically purged once verification and any required legal review conclude.
- **Provider backups & logs**: Temporary provider backups and operational logs expire under each provider's standard retention schedule.

## Your choices and rights

In the app, you can pause location recording, disable photo discovery and sharing, block users, export your account records as a JSON file, save individual photos you uploaded through a separate option, or permanently delete your account. You may email our DPO at [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com) to request access, correction, deletion, portability, restriction, or to object, subject to applicable law. We will respond within the legally required period. You may also lodge a complaint with your local data protection authority (such as the PDPC in Singapore, PPC in Japan, OPC in New Zealand, PCPD in Hong Kong, or relevant authorities in Taiwan and the United States).

## Changes and contact

We will post material changes here and update the effective date. Contact our Data Protection Officer (Chenyang Xiong) at [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com) for privacy requests or complaints. For nonconsensual intimate imagery removal requests under the U.S. TAKE IT DOWN Act (no account required, 48-hour removal process), use our [Intimate Imagery Removal Portal](takedown.html).

---

## 繁體中文完整隱私權政策（台灣／香港適用）

**生效日期**：2026 年 11 月 21 日。

### 一、蒐集個人資料之機關／營運者名稱與聯絡方式
- **營運者（個人資料控制者）**：熊晨陽（Chenyang Xiong），位於中國大陸之個人開發者。
- **個人資料保護負責人（DPO）與隱私／檢舉聯繫信箱**：熊晨陽 — [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com)。
- **私密影像 48 小時刪圖入口（無須帳號）**：[私密影像 48 小時刪圖入口](takedown.html)。

### 二、適用年齡與資格驗證
本服務一般要求年滿 16 歲；當 Apple 之地區與帳號訊號顯示需適用年齡保障規定時，須透過 Apple 聲明年齡範圍確認年滿 18 歲，且監護人同意不得替代此門檻。該訊號由 Apple 提供，不會向我們揭露具體州別，我們亦不使用 IP 定位判斷此門檻。一般 16+ 流程會於 Supabase 保存您自報之出生日期（若新帳號申報未滿 13 歲，則不留存其出生日期並自動刪除該帳號及個人資料）；Apple 驗證流程僅保存資格狀態、最低年齡門檻、驗證方式、政策版本與檢查時間，不保存 Apple 回傳之具體年齡區間或精確生日。年齡紀錄不向其他用戶顯示，並包含於帳號匯出與刪除範圍內（依法應留存者除外）。

### 三、蒐集之目的（對應台灣個人資料保護法第 8 條）
1. **帳號驗證與服務提供**：提供 Apple／Google 登入、帳號展示、跨裝置同步與客服聯繫。
2. **地圖足跡與照片功能**：依您開啟之功能繪製六邊形足跡地圖、本機比對相簿照片位置並呈現您主動選擇上傳之照片與頭像。
3. **社交互動與訊息通訊**：提供好友關係、存取申請、同格互動通知、一對一私訊與封鎖功能。
4. **內容安全、防濫用與法定義務履行**：進行頭像／暱稱／上傳照片及被檢舉單條私訊之安全審核、處理申訴與封鎖，並履行美國《TAKE IT DOWN Act》等違法內容 48 小時移除義務。
5. **系統安全與故障排除**：進行效能監控、錯誤排查、防刷限流與資安防護。

### 四、蒐集之個人資料類別
1. **識別與帳號資料**：Apple／Google 登入識別碼、電子郵件、公開暱稱、頭像圖片。
2. **年齡資格資料**：自報出生日期或 Apple 年齡保障資格狀態紀錄。
3. **精確與背景位置資料**：經您授權後蒐集之精確定位紀錄、背景定位事件與衍生之六邊形格子足跡。
4. **照片與媒體資料**：僅在開啟「照片發現」後於本機讀取照片拍攝位置與時間中繼資料；僅在您主動點選上傳後蒐集照片原圖、縮圖與相關中繼資料。
5. **社交與通訊資料**：好友名單、存取申請、同格互動通知、封鎖名單、一對一私訊內容與已讀狀態（近期對話與好友清單可能暫存於您裝置上之受保護本機快取，登出時自動清除）。
6. **檢舉、申訴與公開刪圖申請資料**：站內檢舉與申訴紀錄；若透過免登入公開刪圖頁提交申請，則包含申請人／授權代理人姓名、聯絡信箱（及選填電話）、涉事影像定位說明、電子簽名、善意聲明及防濫用之雜湊來源 IP。
7. **技術與 SDK 資料**：裝置與效能診斷、網路請求中繼資料，以及 Google Sign-In 與 Mapbox SDK 依其隱私清單所聲明之使用與診斷類別（不用於跨 App 廣告追蹤，亦不販售個人資料）。

### 五、個人資料利用之期間、地區、對象及方式
- **利用期間**：
  - 帳號、足跡、照片與一般私訊：於您帳號存續期間內利用；永久刪除帳號後即清除帳號身分、照片與相關紀錄（依法須留存者除外）。
  - 被檢舉或下架私訊之額外審核證據副本：於檢舉與申訴處理期間保存；被檢舉私訊副本與文字分析紀錄於檢舉審結滿 **180 天**且無待處理申訴時由排程自動清除，下架私訊證據副本則於紀錄滿 **180 天**且申訴期滿無待處理申訴時自動清除。
  - 涉私密影像下架（TIDA）之隔離檔案：移入僅審核員可存取之私有隔離區以立即阻斷傳播，於完成核驗及法定留證需求後逐項物理刪除。
  - 供應商備份與系統紀錄：依各雲端服務商標準週期自動過期清除。
- **利用地區**：**日本**（Supabase 東京主區、Microsoft Azure 日本東部）、**美國及全球邊緣節點**（Supabase Edge Functions 就近執行、Mapbox 全球 CDN、Google Sign-In、Resend 告警郵件中繼、Apple 基礎設施），以及**中國大陸**（營運者本人僅於系統維護、故障排除、內容審核與回應權利請求時透過受限權限遠端存取必要資料）。
- **利用對象**：營運者本人（熊晨陽）、您主動開啟分享後具存取資格之其他用戶（足跡與照片分享**預設關閉**），以及受託或協力提供基礎設施之服務商——Supabase、Microsoft Azure AI Content Safety、Mapbox、Google（Google Sign-In）、Apple（Sign in with Apple / DeclaredAgeRange）與 Resend（僅接收收件信箱與不含私密圖／私訊正文／精確座標之工單元資料）。
- **利用方式**：以自動化機器（資料庫儲存、簽名連結派發、AI 安全檢測、排程清理與郵件告警）或非自動化人工方式（人工審核與客服回應）於上述目的範圍內利用。

### 六、您得行使之權利及方式
您可透過以下方式隨時行使權利：
- **App 內直接操作**：於「個人資料設定」中暫停定位紀錄、關閉照片發現與足跡分享、封鎖用戶、匯出帳號紀錄 JSON（含照片中繼資料）、單獨儲存本人上傳之照片，或永久刪除帳號；亦可隨時於 iOS 系統設定撤回定位與相簿權限。
- **聯繫 DPO 申請**：來信 [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com) 提出查詢、閱覽、請求製給複製本、補充或更正、請求停止蒐集／處理／利用、或請求刪除之申請。我們將於法定期間內回覆處理。

### 七、得自由選擇提供個人資料時，不提供將對您權益之影響
- **帳號登入與年齡資格**：屬提供本服務與符合法令之必要資訊；若不提供，將無法註冊或使用本 App。
- **精確／背景定位、相簿照片發現與對他人分享**：均為**選填／可獨立開關**功能。若您拒絕定位權限或暫停紀錄，將無法自動點亮經過之足跡方格，但仍可檢視既有資料與管理帳號；若不開啟照片發現或不上傳照片，僅無法使用相簿足跡與照片功能；若維持關閉分享，他人將無法查看您的足跡與照片。

### 八、台灣與香港用戶專屬說明
- **台灣用戶**：您得依台灣《個人資料保護法》第 3 條行使查詢或請求閱覽、請求製給複製本、請求補充或更正、請求停止蒐集／處理／利用及請求刪除等權利；若認權益受損，亦得向主管機關反映。
- **香港用戶**：您得依香港《個人資料（私隱）條例》向我們提出查閱資料要求及改正資料要求；如有需要，亦可向香港個人資料私隱專員公署（PCPD）查詢或投訴。

如英文版與繁體中文版之間存在解讀差異，我們將依適用當地法律並採取對用戶更有利之解釋處理。
