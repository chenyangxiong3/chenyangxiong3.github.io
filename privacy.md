---
title: Privacy Policy
---

# Privacy Policy / 隱私權政策

**Languages / 語言**：English (below) · [繁體中文（台灣／香港）](#繁體中文完整隱私權政策台灣香港適用) · [日本語（プライバシー通知）](privacy-ja.html) · [48-Hour Intimate Imagery Removal / 私密影像 48 小時刪圖入口](takedown.html)

Effective date: 26 November 2026.
**Operator & Data Controller**: Chenyang Xiong (熊晨陽), an individual developer based in mainland China.
**Data Protection Officer (DPO) & Privacy / Abuse Contact**: Chenyang Xiong — [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com).
**Operator Address Disclosure (including Japan APPI Art. 32)**: Because Yonprint is operated by an individual developer, the operator's personal residential address is not published on this public webpage. Upon a simple email request to [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com) (with no statutory citation or complex application procedure required), the operator will provide the true business/residential address (including country name) without undue delay.

## Who may use the service

The service generally requires a minimum age of 16. When Apple’s regional and account signals indicate that age assurance applies, we require an Apple declared age range confirming 18 or older; parental approval does not waive this threshold. This switch is supplied by Apple and does not disclose a state name to us. We do not use IP geolocation to decide this requirement. In the standard 16+ route, all first-time birth date submissions use a neutral two-step confirmation before submission. If an account (whether newly registered or an existing account without a previously verified birth date) declares an age under 13, we do not retain the full birth date, immediately restrict the account, and enqueue it for automatic deletion of the account and personal data (subject to applicable legal preservation duties). Previously qualified accounts with conflicting credible age evidence are restricted from new sensitive actions pending a time-bounded review (7-day internal review target with escalation). In the Apple route, we store qualification status, restriction reason (if any), minimum age, verification method, policy version and server check time, but not Apple's specific age range or an exact birthday from Apple. Previously provided birthdays cannot be overwritten by the client; accounts restricted at ages 13–15 naturally become eligible once they reach age 16. On this device, previously server-verified, unrestricted accounts without pending 18+ checks may restore promptly and continue using a 24-hour product offline grace (including across normal device restarts, subject to obvious clock-rollback protection) while re-verifying in the background; unverified, restricted, under-13 cleanup, platform-revoked, admin-restricted, and pending 18+ accounts have zero offline grace. If the 24-hour offline grace expires while offline (or if obvious clock rollback occurs), new location/grid/photo writes pause while your own read-only map access, account export, and permanent account deletion remain available with a prompt to reconnect for re-verification. A confirmed failure to meet the requirement restricts app access and stops location recording. An unsent restriction may remain locally after sign-out until synchronized. Age records are not shown to other users, are included in your account export and are deleted with your account, subject to applicable retention duties. Export and account deletion remain available on the age gate for restricted accounts.

## Data we process and why

- **Account & authentication**: Apple or Google sign-in identifier, account email, nickname and avatar — used for authentication, account display and support. During initial profile setup, you may skip setting a custom nickname and enter the main map directly with the default display name (`"探索者"` / Explorer) without any external AI transmission. Only when you actively submit a custom nickname, an avatar image, or selected photos—after granting explicit opt-in consent via our on-demand confirmation sheet (`ugc_media_profile`, off by default and independent of general Terms acceptance)—are those actively submitted items sent to **Microsoft Azure AI Content Safety (Japan East)** for pre-publication safety screening (inputs are not used for model training, and we never upload your entire device photo library). You can withdraw this consent at any time using the single toggle in Profile Settings; declining or withdrawing only blocks subsequent new outbound submissions of photos, avatars, or custom nicknames without affecting viewing your own map, sending private chats, exporting account data, or permanently deleting your account, and does not retroactively recall requests already transmitted.
- **Location & hexagonal grid footprints**: Precise location events and derived hexagonal grid footprints — used to build your map, sync it across devices, and provide sharing features only if you turn them on. Pausing location tracking stops GPS/geofence recording separately from photo library discovery. If you enable background recording and grant iOS "Always" location permission, collection may continue when the app is not on screen or is relaunched by iOS. You can pause recording in the app and change iOS permission at any time.
- **Photos & photo library metadata**:
  - **Manual single-hex photo lookup**: When you manually look for photos in a single grid cell (without turning on automatic discovery), the app reads location and creation-time metadata of your authorized photo library **on-device** to filter photos belonging to that cell only. It caches only matching photos for that cell, never turns on global automatic discovery, and never generates derived grid footprints for other cells.
  - **Optional automatic photo discovery (off by default)**: Only if you explicitly enable "Auto-discover new photos" in Settings will the app scan authorized photo metadata to surface reminders and optionally derive new grid footprints from post-login photos.
  - **Uploading**: Unselected photo files are never uploaded. Photo bytes are uploaded only after you actively select them (up to 9 per post) and confirm active `ugc_media_profile` AI moderation consent.
- **Social features & one-to-one messages**: Friendships, access requests, one-to-one messages, message read state, blocked users, and visit activity — used to provide social features and prevent repeat notifications. Recent chats, conversations, and friend lists may be cached in protected files on your device for faster display; signing out clears that account's local cache.
- **Reports, appeals & nonconsensual intimate imagery (TIDA) takedowns**: In-app reports and appeals are processed to handle abuse and enforce community rules. We do not scan unreported private conversations, and **private chat messages are never sent to Microsoft Azure AI Content Safety**; all private message reports (both urgent and normal priority) are reviewed exclusively by human moderation. For nonconsensual intimate imagery removal requests submitted via our public [48-Hour Removal Portal](takedown.html) (no account required), we collect requester/representative name, contact email (and optional phone), locating details, electronic signature, good-faith statement, and a hashed source IP for abuse prevention; confirmation (including your case number and status token) is displayed immediately on the submission page with no automated external email receipt, and your contact email is used only if manual follow-up is needed.
- **Technical diagnostics & SDK data**: Diagnostics, performance metrics, and network request metadata needed to operate the app, render maps, prevent abuse, and investigate failures.

The legal basis depends on your jurisdiction and the feature: provision of the service you request, your explicit choices for optional location/photo discovery, sharing, and scoped AI moderation, compliance with legal obligations (such as safety and takedown laws), and legitimate interests in security and abuse prevention. You may withdraw an optional choice in Settings; prior lawful processing is unaffected.

## Visibility and sharing

Sharing footprints and uploaded photos with other users is **off by default**. If you turn it on, people who visited the same grid cell may see your activity and photos in that cell, and friends or people you grant full access may see your full shared map. You may switch sharing off at any time; newly requested views and new signed URLs will be denied. On another user's device, open shared maps and access-request previews silently revalidate against the server in the background every **300 seconds** (5 minutes) and when returning to the foreground. When the server confirms that sharing was turned off, access was revoked or blocked, or visibility scope narrowed (or when local revocation signals occur), the content is promptly removed along with in-flight downloads and owner-scoped caches; during brief network timeouts or offline periods, already-loaded views may stay visible with an offline notice while newly opened views, image downloads, and interactions require live server authorization. Local disk caches are isolated per viewer account and per content owner, physically deleted for that owner upon revocation, and subject to a strict **24-hour eviction cap measured from file creation** (reading a cached file never extends its 24-hour ceiling, and storage retention never extends display authorization). However, already-issued signed links (valid up to 5 minutes) or copies already downloaded/screenshotted by another person cannot be remotely erased. Blocking a user prevents new access through the app. Do not upload photos of others without a lawful basis or permission where required.

## Providers and international data transfers

Because Yonprint is operated by an individual developer in mainland China using cloud and platform services across multiple regions, your personal data may be stored in, transferred to, or accessed from jurisdictions outside your home country or region (including Japan, the United States, and mainland China):

- **Supabase (Processor)**: Hosts our database, authentication, private photo storage, and backups primarily in its **Tokyo (`ap-northeast-1`)** region. However, Supabase Edge Functions may execute in regions close to the requester, and service logs, operational metadata, support access, or CDN edge delivery may occur outside Tokyo under [Supabase's DPA](https://supabase.com/legal/customer-resources/data-processing-addendum) and [Data Residency FAQ](https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq).
- **Microsoft Azure AI Content Safety (Processor)**: Processes only the photos, selected avatar updates, and proposed custom nicknames that you actively submit after granting explicit `ugc_media_profile` consent, using our configured **Japan East** resource under Microsoft's [Products and Services DPA](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA) (inputs are not used for model training; never receives your entire device photo library or any private chat messages).
- **Google Sign-In (Identity Provider)**: When you choose Google sign-in, Google processes authentication and fraud-prevention/SDK telemetry data globally (including the United States) under [Google APIs Terms](https://developers.google.com/terms) and Google's privacy policy. Its SDK privacy declaration covers name, email, phone number, approximate location, user/device identifiers, usage data, and other technical data.
- **Apple (Sign in with Apple & DeclaredAgeRange)**: When you use Sign in with Apple or Apple's age-assurance signals, Apple processes data on-device and within Apple's infrastructure under [Sign in with Apple & Privacy](https://www.apple.com/legal/privacy/data/en/sign-in-with-apple/).
- **Mapbox (Map Service Provider)**: Provides map tiles and rendering services globally (including the United States and global CDNs) under [Mapbox's Privacy Policy](https://www.mapbox.com/legal/privacy) and [Mapbox DPA](https://www.mapbox.com/legal/dpa). Its SDK privacy declaration covers location, user identifier, product interactions, usage, performance, and diagnostic data. Mapbox's map attribution control provides its telemetry opt-out choice.
- **Resend (Alert Email Processor)**: Delivers internal moderation alert emails primarily in the **United States** under [Resend's DPA](https://resend.com/legal/dpa). Our public [48-Hour Removal Portal](takedown.html) currently sends **no automated external email receipts** (submission confirmation is shown immediately on the page, so applicants must save their case number and status token to check status, while [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com) remains available as our manual contact channel). Alert emails contain only minimum necessary case metadata (case number, priority, deadline, and console link) and never include intimate imagery, chat text, or precise coordinates.
- **Operator Remote Access (Mainland China)**: As the individual developer and operator based in **mainland China**, I remotely access necessary production data only for system maintenance, troubleshooting, content moderation, takedown execution, and responding to user rights requests, using restricted moderator/service credentials.

Yonprint is currently offered **free of charge**, with **no advertising and no in-app purchases**. Aside from the processor and service-provider disclosures above (Supabase, Microsoft Azure, Google, Apple, Mapbox, and Resend), we do **not** sell or rent personal data, engage in partnerships for the purpose of trading personal data, or use third-party SDKs for targeted advertising or cross-app tracking.

## Storage, security and retention

Uploaded photos are held in private storage and delivered through short-lived signed links after access checks. We use row-level security, role restrictions, and access checks, though no internet service can guarantee absolute security.

- **Active account, footprints, photos & normal chats**: Retained while your account is active. Permanent account deletion removes your Auth identity, profile, footprints, uploaded photos, and associated records, except specific objects or case snapshots under an active, time-bounded legal/safety preservation hold.
- **Selective evidence preservation & cleanup ledger**: Before an account is deleted (whether user-initiated or under-13 automatic cleanup), we check only for active object/case-level preservation obligations (such as open takedown requests, urgent safety reports, or applicable statutory holds with explicit expiry dates). Non-held ordinary personal data is deleted normally. For under-13 automatic cleanup, a minimal UUID-only queue ledger (no birth date, email, or media) is kept strictly to enforce the cleanup lock and audit completion.
- **Reported or removed private-message evidence**: Extra copies of reported private messages and automated text-analysis records are retained while a report, appeal, or active preservation hold is open, and are automatically purged once **180 days** have passed after the report is reviewed/resolved with no pending appeal or active hold; extra evidence copies of removed messages are automatically purged **180 days** after recording once the appeal window closes with no pending appeal or active hold. If a reporter deletes their account, their user link on open reports is cleared (`SET NULL`) while necessary evidence remains preserved only until case closure/expiry.
- **TIDA takedown & preservation quarantined evidence**: Images restricted under a nonconsensual intimate imagery takedown request or active object-level preservation hold are copied/moved out of user-accessible buckets into a moderator-only private quarantine bucket (`takedown_quarantine`) with integrity verification (SHA-256 and byte length) to immediately cut off user access. Once the applicable hold expires or is released—and provided no other active hold, pending appeal, or open takedown references the same object—a scheduled background purge physically removes the quarantined Storage object and retries on transient storage failures until confirmed deleted.
- **Provider backups & logs**: Temporary provider backups and operational logs expire under each provider's standard retention schedule (for example, Resend Free tier retains email delivery logs for 30 days).

## Your choices and rights

In the app, you can edit your nickname, pause location recording, toggle automatic photo discovery, manage the pre-publication AI content-safety consent toggle (`ugc_media_profile`), disable sharing, block users, export your account records as a JSON file, save individual photos you uploaded through a separate option, or permanently delete your account. You may email our DPO at [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com) to request access, correction, deletion, portability, restriction, or to object, subject to applicable law. We will respond within the applicable statutory deadline for your jurisdiction and request type (for example: 20 working days under the New Zealand Privacy Act 2020; 30 days for access/correction under Singapore PDPA; 40 days for data access/correction requests under Hong Kong PDPO; 15 days for access/review/copy and 30 days for correction/cessation/deletion under Taiwan PDPA Art. 13; and without undue delay under Japan APPI). You may also lodge a complaint with your local data protection authority (such as the PDPC in Singapore, PPC in Japan, OPC in New Zealand, PCPD in Hong Kong, or relevant authorities in Taiwan and the United States).

## Changes and contact

We will post material changes here and update the effective date. Contact our Data Protection Officer (Chenyang Xiong) at [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com) for privacy requests or complaints. For nonconsensual intimate imagery removal requests under the U.S. TAKE IT DOWN Act (no account required, 48-hour removal process), use our [Intimate Imagery Removal Portal](takedown.html).

---

## 繁體中文完整隱私權政策（台灣／香港適用）

**生效日期**：2026 年 11 月 26 日。

### 一、蒐集個人資料之機關／營運者名稱與聯絡方式
- **營運者（個人資料控制者）**：熊晨陽（Chenyang Xiong），位於中國大陸之個人開發者。
- **個人資料保護負責人（DPO）與隱私／檢舉聯繫信箱**：熊晨陽 — [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com)。
- **經營者住所揭露方式（含日本個人資訊保護法 APPI 第 32 條對應）**：因本服務由個人開發者營運，個人住所不直接公布於公開網頁；用戶透過電子郵件 [nesgoat624@gmail.com](mailto:nesgoat624@gmail.com) 簡單來信請求時（不設複雜申請門檻，無須援引法條），營運者將無不當遲延提供真實之經營者住所（含所在國名）。
- **私密影像 48 小時刪圖入口（無須帳號）**：[私密影像 48 小時刪圖入口](takedown.html)（目前外部公開刪圖頁**無自動郵件回執**，提交頁即時顯示確認，申請人須自行保存工單號與查詢憑證，信箱保留為人工聯繫管道）。

### 二、適用年齡與資格驗證
本服務一般要求年滿 16 歲；當 Apple 之地區與帳號訊號顯示需適用年齡保障規定時，須透過 Apple 聲明年齡範圍確認年滿 18 歲，且監護人同意不得替代此門檻。所有首次填寫出生日期均採統一中立之兩步核對流程，取消不會送出請求。若帳號（不論是否已建立個人資料，只要未有既有合格生日紀錄）申報未滿 13 歲，系統不留存完整出生日期，立即限制存取並排入自動清理佇列（依法須保全之特定證據除外）；既有合格帳號出現矛盾年齡證據時，將暫停新增敏感操作並進入限時人工覆核（內部 7 日覆核與逾時升級目標）。滿 13 至 15 歲受限帳號於自然滿 16 歲時將自動恢復一般資格。Apple 驗證流程僅保存資格狀態、限制原因、最低年齡門檻、驗證方式、政策版本與伺服器檢查時間，不保存具體年齡區間或精確生日。既有經伺服器核驗且無限制、無待核驗 18+ 事項的成年合格帳號，得享有自上次伺服器核驗起算最長 24 小時之產品離線寬限（包含正常裝置重啟在內，並保留明顯系統時間回撥防護），同時於背景重新核驗；未完成核驗、已受限、未滿 13 歲待清理、平台撤回或管理員限制帳號不適用任何離線寬限。離線寬限期滿且仍離線時，將暫停新增定位／足跡／照片寫入，並保留本人唯讀、帳號資料匯出、永久刪號及清晰之連網重驗提示。

### 三、蒐集之目的（對應台灣個人資料保護法第 8 條）
1. **帳號驗證與服務提供**：提供 Apple／Google 登入、帳號展示、跨裝置同步與客服聯繫。
2. **地圖足跡與照片功能**：依您開啟之功能繪製六邊形足跡地圖、本機比對獲授權相簿照片位置中繼資料並呈現您主動選擇上傳之照片與頭像。
3. **社交互動與訊息通訊**：提供好友關係、存取申請、同格互動通知、一對一私訊與封鎖功能。
4. **內容安全、防濫用與法定義務履行**：在您透過按需確認彈窗明確授權「照片、頭像與暱稱發布前 AI 審核」許可（`ugc_media_profile`）下，僅於您主動提交照片、頭像或自訂暱稱時，將所提交內容送交 Microsoft Azure AI Content Safety（日本東部）進行發布前安全審核（輸入不用於模型訓練，絕不整庫上傳手機相簿）；私訊內容絕不送交 Azure，所有私訊檢舉均由人工審核處理；處理申訴與封鎖，並履行美國《TAKE IT DOWN Act》等違法內容 48 小時移除義務。
5. **系統安全與故障排除**：進行效能監控、錯誤排查、防刷限流、應急控制與資安防護。

### 四、蒐集之個人資料類別
1. **識別與帳號資料**：Apple／Google 登入識別碼、電子郵件、公開暱稱（註冊時可略過自訂取名，先以預設暱稱「探索者」直接進入主地圖，無須外發 AI 審核）、頭像圖片。
2. **年齡資格資料**：自報出生日期或 Apple 年齡保障資格狀態紀錄與限制原因。
3. **精確與背景位置資料**：經您授權後蒐集之精確定位紀錄、背景定位事件與衍生之六邊形格子足跡（與相簿發現為獨立開關）。
4. **照片與媒體資料**：
   - **單格手動找圖**：僅於本機讀取獲授權相簿照片之位置與拍攝時間中繼資料以篩選當前單一方格照片，不會開啟全域自動發現，亦不會生成其他方格足跡；
   - **自動發現新照片（預設關閉）**：僅於您在設定中主動開啟後，才自動掃描獲授權相簿中繼資料並可為登入後新照片生成足跡；
   - **上傳**：未點選之照片檔案絕不上傳；僅於您主動點選（每則最多 9 張）且透過按需確認彈窗同意「發布內容安全審核」許可（`ugc_media_profile`）後，方將所提交之照片送交審核並上傳。您可隨時於「個人資料設定」單一開關撤回該許可（撤回僅阻止後續新外發，不影響查看本人地圖、發送私訊、匯出資料或永久刪除帳號）。
5. **社交與通訊資料**：好友名單、存取申請、同格互動通知、封鎖名單、一對一私訊內容與已讀狀態。他方分享地圖與存取申請預覽於前景最長每 **300 秒（5 分鐘）**及返回前景時於背景靜默向伺服器重驗；若伺服器明確回覆無權存取、封鎖、關閉分享或可見範圍收窄（或收到本機撤權訊號），將立即移除對應內容、取消在途下載並清除該對象之本機快取；短暫離線或網路逾時期間可暫時保留已載入畫面並提示暫未刷新，新開頁面、新圖片下載與新增互動仍須經伺服器授權。本機磁碟快取按檢視者與內容擁有者隔離，並嚴格以**檔案建立時間起算 24 小時**淘汰（讀取不延長快取壽命，且快取保留絕不等同展示授權）。
6. **檢舉、申訴與公開刪圖申請資料**：站內檢舉與申訴紀錄（私訊檢舉一律進入純人工審核佇列，絕不外發 Azure）；發布前 AI 審核許可紀錄（`ugc_media_profile`，預設關閉）；若透過免登入公開刪圖頁提交申請，則包含申請人／授權代理人姓名、聯絡信箱（及選填電話）、涉事影像定位說明、電子簽名、善意聲明及防濫用之雜湊來源 IP。
7. **技術與 SDK 資料**：裝置與效能診斷、網路請求中繼資料，以及 Google Sign-In 與 Mapbox SDK 依其隱私清單所聲明之使用與診斷類別（不用於跨 App 廣告追蹤，亦不出售或出租個人資料）。

### 五、個人資料利用之期間、地區、對象及方式
- **利用期間**：
  - 帳號、足跡、照片與一般私訊：於您帳號存續期間內利用；永久刪除帳號或未滿 13 歲自動清理後即清除帳號身分、照片與相關紀錄，僅對具明確法定／案件保全依據與到期日之特定對象另行隔離保全。
  - 被檢舉或下架私訊之額外審核證據副本：於檢舉、申訴或有效保全期間保存；審結滿 **180 天**且無待處理申訴或有效保全時自動清除。若檢舉人刪除帳號，僅解除其帳號關聯（`SET NULL`）以防誤刪唯一證據，案件結案到期後仍依期清除。
  - 涉私密影像下架（TIDA）與證據保全之隔離檔案：移入僅審核員可存取之私有隔離桶（`takedown_quarantine`）並驗證完整性（SHA-256 與位元組長度）以立即阻斷用戶存取；待具明確到期日之保全期滿或釋放，且確認無其他有效保全、待審申訴或未結案下架引用同一檔案後，由排程背景任務逐項物理刪除並於暫時性儲存錯誤時重試直至確認刪除。
  - 供應商備份與系統紀錄：依各雲端服務商標準週期自動過期清除（例如 Resend 免費方案保留 30 天寄信紀錄）。
- **利用地區**：**日本**（Supabase 東京主區、Microsoft Azure 日本東部）、**美國及全球邊緣節點**（Supabase Edge Functions 就近執行、Mapbox 全球 CDN、Google Sign-In、Resend 告警郵件中繼、Apple 基礎設施），以及**中國大陸**（營運者本人僅於系統維護、故障排除、內容審核與回應權利請求時透過受限權限遠端存取必要資料）。
- **利用對象**：營運者本人（熊晨陽）、您主動開啟分享後具存取資格之其他用戶（足跡與照片分享**預設關閉**），以及受託或協力提供基礎設施之服務商——Supabase、Microsoft Azure AI Content Safety、Mapbox、Google（Google Sign-In）、Apple（Sign in with Apple / DeclaredAgeRange）與 Resend（僅用於內部審核告警郵件，公開刪圖頁當前無外部自動郵件回執；告警郵件僅含最少必要案件元資料〔工單號、優先級、截止時間與審核台連結〕，絕不含私密圖、私訊正文或精確座標）。
- **利用方式**：以自動化機器（資料庫儲存、簽名連結派發、AI 安全檢測、排程清理與郵件告警）或非自動化人工方式（人工審核與客服回應）於上述目的範圍內利用。
- **免費服務與無個人資料交易聲明**：本服務目前**完全免費，無廣告、無應用程式內購買（IAP）**；除上述既有 Supabase／Microsoft Azure／Mapbox／Google／Apple／Resend 委託或服務商揭露外，我們**不出售、不出租個人資料，亦不開展任何以個人資料交易為目的之合作**。

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
