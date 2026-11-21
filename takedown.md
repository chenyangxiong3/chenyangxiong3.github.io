---
title: Nonconsensual Intimate Imagery Removal (TAKE IT DOWN Act)
---

# Nonconsensual Intimate Imagery Removal / 私密影像 48 小时删图入口

Effective date: 21 November 2026. **No Yonprint account is required** to request removal.

If an intimate visual depiction of you—or of someone you are legally authorized to represent—has been published or shared on Yonprint without consent (including authentic photos or digitally altered / AI-generated depictions), you may submit a removal request below. Upon receiving a valid request, we will remove the reported imagery and make reasonable efforts to identify and remove known identical copies within **48 hours**.

**Important:** Do **not** attach, upload, or email intimate images. Provide locating details instead (such as a username, photo ID, date/time, URL, or description of where it appears). If someone is in immediate physical danger, contact local emergency services first.

如果您或您获合法授权代理的对象在 Yonprint 上出现未经同意发布的私密影像（包括真实照片或经 AI/软件合成篡改的私密影像），**无需注册或登录 Yonprint 账号**，均可直接通过下方表单提交删图申请。收到有效申请后，我们将在 **48 小时内**下架相关影像，并尽合理努力检索并移除平台内已知完全相同的副本。请**不要**发送或上传私密图片原件，只需填写定位线索。

<div id="tida-app" style="max-width:720px;margin:20px 0;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC',sans-serif;">
  <form id="tida-form" style="display:grid;gap:12px;padding:18px;border:1px solid #d0d7de;border-radius:10px;background:#fafbfc;">
    <h2 style="margin:0 0 4px 0;font-size:18px;">Submit Removal Request / 提交删图申请</h2>

    <div style="position:absolute;left:-9999px;" aria-hidden="true">
      <label>Website <input type="text" id="tida-website" name="website" tabindex="-1" autocomplete="off" /></label>
    </div>

    <label style="display:grid;gap:4px;">
      <span><strong>1. Your Role / 申请身份 *</strong></span>
      <select id="tida-role" required style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;">
        <option value="subject">I am the individual depicted / 我是被摄者本人</option>
        <option value="authorized_representative">I am an authorized representative / 我是合法授权代理人</option>
      </select>
    </label>

    <label id="tida-rep-wrap" style="display:none;gap:4px;">
      <span><strong>Name of Depicted Individual / 被代理对象姓名 *</strong></span>
      <input type="text" id="tida-rep-name" maxlength="200" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
    </label>

    <label style="display:grid;gap:4px;">
      <span><strong>2. Your Full Name / 您的姓名 *</strong></span>
      <input type="text" id="tida-name" required maxlength="200" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
    </label>

    <label style="display:grid;gap:4px;">
      <span><strong>Contact Email / 联系邮箱 *</strong></span>
      <input type="email" id="tida-email" required maxlength="320" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
    </label>

    <label style="display:grid;gap:4px;">
      <span><strong>Contact Phone (Optional) / 联系电话（选填）</strong></span>
      <input type="text" id="tida-phone" maxlength="40" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
    </label>

    <label style="display:grid;gap:4px;">
      <span><strong>3. Information to Locate the Image / 涉事影像定位信息 *</strong></span>
      <textarea id="tida-location" required rows="4" minlength="5" maxlength="4000" placeholder="Include username, photo ID, URL, approximate date/time, or map grid context. Do NOT paste private image files." style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;"></textarea>
    </label>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <label style="display:grid;gap:4px;">
        <span>Reported Username (Optional) / 涉事用户名</span>
        <input type="text" id="tida-username" maxlength="100" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
      </label>
      <label style="display:grid;gap:4px;">
        <span>Photo ID (Optional) / 照片 ID</span>
        <input type="text" id="tida-photo-id" maxlength="180" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
      </label>
    </div>

    <label style="display:grid;gap:4px;">
      <span>Additional Context (Optional) / 其他补充说明（选填）</span>
      <textarea id="tida-notes" rows="2" maxlength="2000" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;"></textarea>
    </label>

    <label style="display:flex;gap:8px;align-items:flex-start;">
      <input type="checkbox" id="tida-good-faith" required style="margin-top:4px;" />
      <span><strong>4. Good-Faith Statement / 善意声明 *</strong>: I state in good faith that the intimate visual depiction identified above was published or shared without the consent of the depicted individual, and that the information in this notice is accurate. / 我善意声明上述私密影像未经被摄者同意而被发布或分享，且本申请所填信息属实。</span>
    </label>

    <label style="display:grid;gap:4px;">
      <span><strong>Electronic Signature (Type your full name) / 电子签名（请输入您的全名）*</strong></span>
      <input type="text" id="tida-signature" required maxlength="200" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
    </label>

    <button type="submit" id="tida-submit" style="padding:10px 16px;border:0;border-radius:8px;background:#b43939;color:#fff;font-weight:600;cursor:pointer;">Submit 48-Hour Removal Request / 提交删图申请</button>
    <div id="tida-result" role="status" style="font-size:14px;"></div>
  </form>

  <form id="tida-status-form" style="display:grid;gap:10px;padding:18px;margin-top:18px;border:1px solid #d0d7de;border-radius:10px;background:#fff;">
    <h2 style="margin:0;font-size:17px;">Check Status or Add Locating Details / 查询进度或补充定位信息</h2>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      <label style="display:grid;gap:4px;">
        <span>Case Number / 工单号 *</span>
        <input type="text" id="st-case" required placeholder="TIDA-YYYYMMDD-XXXXXX" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
      </label>
      <label style="display:grid;gap:4px;">
        <span>Status Token / 查询凭证 *</span>
        <input type="text" id="st-token" required placeholder="Saved confirmation token" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;" />
      </label>
    </div>
    <label style="display:grid;gap:4px;">
      <span>Optional Follow-Up Info / 补充定位信息（仅在补充材料时填写）</span>
      <textarea id="st-extra" rows="2" maxlength="2000" style="padding:8px;border:1px solid #b6c2ce;border-radius:6px;"></textarea>
    </label>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <button type="submit" id="st-check-btn" style="padding:8px 14px;border:0;border-radius:8px;background:#1673dc;color:#fff;cursor:pointer;">Check Status / 查询状态</button>
      <button type="button" id="st-supp-btn" style="padding:8px 14px;border:1px solid #b6c2ce;border-radius:8px;background:#f6f8fa;cursor:pointer;">Submit Follow-Up Info / 提交补充信息</button>
    </div>
    <div id="st-result" role="status" style="font-size:14px;"></div>
  </form>
</div>

<script src="takedown.js"></script>

## Email Fallback / 邮箱兜底渠道

If the web form above is unavailable, email **[nesgoat624@gmail.com](mailto:nesgoat624@gmail.com)** with subject `[URGENT TIDA] Intimate Image Removal Request` and include:

1. Your full name, contact email (and whether you are the depicted individual or an authorized representative, plus the depicted individual's name if applicable);
2. Information sufficient to locate the image on Yonprint (username, photo ID, URL, or date/context — do not attach intimate images);
3. A brief statement that you have a good-faith belief the image was published without consent;
4. Your electronic signature (typed full name).

See also: [Support](support.html) · [Privacy Policy](privacy.html) · [Community Rules](community.html) · [Terms](terms.html).
