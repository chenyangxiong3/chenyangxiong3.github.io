(() => {
  const ENDPOINT = "https://ougvmcohrtvnqtsdgdib.supabase.co/functions/v1/public-takedown-request";

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function init() {
    const roleSelect = document.getElementById("tida-role");
    const repWrap = document.getElementById("tida-rep-wrap");
    const repNameInput = document.getElementById("tida-rep-name");
    const tidaForm = document.getElementById("tida-form");
    const tidaResult = document.getElementById("tida-result");
    const statusForm = document.getElementById("tida-status-form");
    const stCase = document.getElementById("st-case");
    const stToken = document.getElementById("st-token");
    const stExtra = document.getElementById("st-extra");
    const stSuppBtn = document.getElementById("st-supp-btn");
    const stResult = document.getElementById("st-result");

    if (!tidaForm) return;

    // 1. Role change toggles representative name input
    function updateRoleVisibility() {
      if (!roleSelect || !repWrap || !repNameInput) return;
      const isRep = roleSelect.value === "authorized_representative";
      repWrap.style.display = isRep ? "grid" : "none";
      repNameInput.required = isRep;
    }

    if (roleSelect) {
      roleSelect.addEventListener("change", updateRoleVisibility);
      updateRoleVisibility();
    }

    // 2. Submit takedown request
    tidaForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById("tida-submit");
      if (submitBtn) submitBtn.disabled = true;

      tidaResult.innerHTML = '<p style="color:#0969da;margin:8px 0 0 0;">Submitting request... / 正在提交申请...</p>';

      const isRep = roleSelect && roleSelect.value === "authorized_representative";
      const payload = {
        action: "submit",
        website: (document.getElementById("tida-website")?.value || "").trim(),
        requester_role: roleSelect ? roleSelect.value : "subject",
        represented_subject_name: isRep ? (repNameInput?.value || "").trim() : null,
        requester_name: (document.getElementById("tida-name")?.value || "").trim(),
        requester_email: (document.getElementById("tida-email")?.value || "").trim(),
        requester_phone: (document.getElementById("tida-phone")?.value || "").trim() || null,
        content_location_info: (document.getElementById("tida-location")?.value || "").trim(),
        reported_username: (document.getElementById("tida-username")?.value || "").trim() || null,
        reported_photo_id: (document.getElementById("tida-photo-id")?.value || "").trim() || null,
        additional_notes: (document.getElementById("tida-notes")?.value || "").trim() || null,
        good_faith_statement_accepted: !!document.getElementById("tida-good-faith")?.checked,
        electronic_signature: (document.getElementById("tida-signature")?.value || "").trim(),
      };

      try {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json().catch(() => null);

        if (!res.ok || !data || data.error) {
          const errMsg = data?.error ? `Error: ${data.error}` : `HTTP ${res.status}`;
          tidaResult.innerHTML = `<div style="margin-top:10px;padding:12px;border:1px solid #cf222e;border-radius:6px;background:#ffebe9;color:#cf222e;"><strong>Submission Failed / 提交失败:</strong> ${escapeHtml(errMsg)}</div>`;
          return;
        }

        const mergedNotice = data.merged
          ? '<div style="margin-bottom:8px;padding:6px 10px;background:#ddf4ff;border-radius:4px;color:#0969da;font-weight:600;">Merged with existing active case / 已与现存工单合并</div>'
          : "";

        tidaResult.innerHTML = `
          <div style="margin-top:12px;padding:14px;border:1px solid #1a7f37;border-radius:8px;background:#dafbe1;color:#1a7f37;">
            ${mergedNotice}
            <h3 style="margin:0 0 8px 0;font-size:16px;">Request Received / 申请已受理</h3>
            <p style="margin:4px 0;"><strong>Case Number / 工单号:</strong> <code style="background:#fff;padding:2px 6px;border-radius:4px;border:1px solid #2da44e;">${escapeHtml(data.case_number)}</code></p>
            ${data.status_token ? `<p style="margin:4px 0;"><strong>Status Token / 查询凭证:</strong> <code style="background:#fff;padding:2px 6px;border-radius:4px;border:1px solid #2da44e;">${escapeHtml(data.status_token)}</code></p>` : ""}
            <p style="margin:4px 0;"><strong>Received At (UTC) / 受理时间:</strong> ${escapeHtml(data.received_at)}</p>
            <p style="margin:4px 0;"><strong>48-Hour Deadline (UTC) / 48小时处置时限:</strong> ${escapeHtml(data.deadline_at)}</p>
            <p style="margin:8px 0 0 0;font-size:13px;color:#57606a;">Please save your Case Number and Status Token to check status or supplement details below. / 请妥善保存工单号与凭证，可在下方随时查询处置进度或补充线索。</p>
          </div>
        `;

        if (stCase && data.case_number) stCase.value = data.case_number;
        if (stToken && data.status_token) stToken.value = data.status_token;
      } catch (err) {
        tidaResult.innerHTML = `<div style="margin-top:10px;padding:12px;border:1px solid #cf222e;border-radius:6px;background:#ffebe9;color:#cf222e;"><strong>Network Error / 网络请求失败:</strong> ${escapeHtml(err.message || String(err))}</div>`;
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });

    // 3. Status lookup
    if (statusForm) {
      statusForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const checkBtn = document.getElementById("st-check-btn");
        if (checkBtn) checkBtn.disabled = true;

        stResult.innerHTML = '<p style="color:#0969da;margin:8px 0 0 0;">Checking status... / 正在查询进度...</p>';

        const payload = {
          action: "status",
          case_number: (stCase?.value || "").trim(),
          status_token: (stToken?.value || "").trim(),
        };

        try {
          const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const data = await res.json().catch(() => null);

          if (!res.ok || !data || !data.ok || !data.request) {
            const errMsg = data?.error ? `Error: ${data.error}` : `HTTP ${res.status}`;
            stResult.innerHTML = `<div style="margin-top:10px;padding:12px;border:1px solid #cf222e;border-radius:6px;background:#ffebe9;color:#cf222e;"><strong>Lookup Failed / 查询失败:</strong> ${escapeHtml(errMsg)}</div>`;
            return;
          }

          const req = data.request;
          stResult.innerHTML = `
            <div style="margin-top:12px;padding:14px;border:1px solid #0969da;border-radius:8px;background:#f0f6ff;color:#1f2328;">
              <h3 style="margin:0 0 8px 0;font-size:16px;color:#0969da;">Case Status / 工单状态: <strong>${escapeHtml(req.status)}</strong></h3>
              <p style="margin:4px 0;"><strong>Case Number / 工单号:</strong> ${escapeHtml(req.case_number)}</p>
              <p style="margin:4px 0;"><strong>Received At (UTC) / 受理时间:</strong> ${escapeHtml(req.received_at)}</p>
              <p style="margin:4px 0;"><strong>48-Hour Deadline (UTC) / 48小时处置时限:</strong> ${escapeHtml(req.deadline_at)}</p>
              ${req.validated_at ? `<p style="margin:4px 0;"><strong>Validated At / 核验通过时间:</strong> ${escapeHtml(req.validated_at)}</p>` : ""}
              ${req.restricted_at ? `<p style="margin:4px 0;"><strong>Restricted At / 访问限制时间:</strong> ${escapeHtml(req.restricted_at)}</p>` : ""}
              ${req.purged_at ? `<p style="margin:4px 0;"><strong>Purged At / 彻底擦除时间:</strong> ${escapeHtml(req.purged_at)}</p>` : ""}
              ${req.closed_at ? `<p style="margin:4px 0;"><strong>Closed At / 结案时间:</strong> ${escapeHtml(req.closed_at)}</p>` : ""}
              <p style="margin:4px 0;"><strong>Submission Count / 提交合并次数:</strong> ${escapeHtml(req.submission_count ?? 1)}</p>
            </div>
          `;
        } catch (err) {
          stResult.innerHTML = `<div style="margin-top:10px;padding:12px;border:1px solid #cf222e;border-radius:6px;background:#ffebe9;color:#cf222e;"><strong>Network Error / 查询失败:</strong> ${escapeHtml(err.message || String(err))}</div>`;
        } finally {
          if (checkBtn) checkBtn.disabled = false;
        }
      });
    }

    // 4. Supplement details
    if (stSuppBtn) {
      stSuppBtn.addEventListener("click", async () => {
        const extraText = (stExtra?.value || "").trim();
        if (extraText.length < 5) {
          stResult.innerHTML = '<div style="margin-top:10px;padding:10px;border:1px solid #cf222e;border-radius:6px;background:#ffebe9;color:#cf222e;">Please enter at least 5 characters of follow-up info. / 请至少输入 5 个字符的补充信息。</div>';
          stExtra?.focus();
          return;
        }

        stSuppBtn.disabled = true;
        stResult.innerHTML = '<p style="color:#0969da;margin:8px 0 0 0;">Submitting follow-up info... / 正在提交补充信息...</p>';

        const payload = {
          action: "supplement",
          case_number: (stCase?.value || "").trim(),
          status_token: (stToken?.value || "").trim(),
          additional_notes: extraText,
          content_location_info: extraText,
        };

        try {
          const res = await fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const data = await res.json().catch(() => null);

          if (!res.ok || !data || !data.ok) {
            const errMsg = data?.error ? `Error: ${data.error}` : `HTTP ${res.status}`;
            stResult.innerHTML = `<div style="margin-top:10px;padding:12px;border:1px solid #cf222e;border-radius:6px;background:#ffebe9;color:#cf222e;"><strong>Supplement Failed / 提交补充信息失败:</strong> ${escapeHtml(errMsg)}</div>`;
            return;
          }

          stResult.innerHTML = `
            <div style="margin-top:12px;padding:14px;border:1px solid #1a7f37;border-radius:8px;background:#dafbe1;color:#1a7f37;">
              <h3 style="margin:0 0 8px 0;font-size:16px;">Supplement Recorded / 补充信息已记录</h3>
              <p style="margin:4px 0;"><strong>Case Number / 工单号:</strong> ${escapeHtml(data.case_number)}</p>
              <p style="margin:4px 0;"><strong>Current Status / 当前状态:</strong> ${escapeHtml(data.status)}</p>
              <p style="margin:4px 0;"><strong>Deadline (UTC, unchanged) / 处置时限（未重置）:</strong> ${escapeHtml(data.deadline_at)}</p>
            </div>
          `;
          if (stExtra) stExtra.value = "";
        } catch (err) {
          stResult.innerHTML = `<div style="margin-top:10px;padding:12px;border:1px solid #cf222e;border-radius:6px;background:#ffebe9;color:#cf222e;"><strong>Network Error / 提交补充信息失败:</strong> ${escapeHtml(err.message || String(err))}</div>`;
        } finally {
          stSuppBtn.disabled = false;
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
