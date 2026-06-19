"use client";

import { useRef, useState, type FormEvent } from "react";

import { Icon } from "@/components/ui/icons";
import { useReveal } from "@/components/ui/Reveal";
import { quoteSection } from "@/content/dictionary";
import { t, type Locale } from "@/lib/i18n";

type QuoteFormProps = {
  locale: Locale;
};

type Status = "idle" | "submitting" | "success" | "error";

/** Lead-capture form. Validates client-side, POSTs multipart form data
 *  (including attachments) to /api/quote, and surfaces success / error. */
export function QuoteForm({ locale }: QuoteFormProps) {
  const formRef = useReveal<HTMLFormElement>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [fileLabel, setFileLabel] = useState<string | null>(null);

  const form = quoteSection.form;

  const onFileChange = () => {
    const input = fileInputRef.current;
    if (!input?.files || input.files.length === 0) {
      setFileLabel(null);
      return;
    }
    setFileLabel(`${input.files.length} ${t(form.fileCount, locale)}`);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;

    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    setStatus("submitting");
    try {
      const data = new FormData(formEl);
      data.set("locale", locale);

      const response = await fetch("/api/quote", { method: "POST", body: data });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus("success");
      formEl.reset();
      setFileLabel(null);
    } catch {
      setStatus("error");
    }
  };

  const submitting = status === "submitting";
  const succeeded = status === "success";

  return (
    <form ref={formRef} className="rv" noValidate onSubmit={onSubmit}>
      <div className="frow">
        <div className="field">
          <label htmlFor="q-name">{t(form.name, locale)}</label>
          <input id="q-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="q-company">{t(form.company, locale)}</label>
          <input id="q-company" name="company" type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="frow">
        <div className="field">
          <label htmlFor="q-phone">
            {t(form.phone, locale)} <span className="req">*</span>
          </label>
          <input id="q-phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="q-email">
            {t(form.email, locale)} <span className="req">*</span>
          </label>
          <input id="q-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="frow">
        <div className="field">
          <label htmlFor="q-location">{t(form.location, locale)}</label>
          <input id="q-location" name="location" type="text" />
        </div>
        <div className="field">
          <label htmlFor="q-service">{t(form.service, locale)}</label>
          <select id="q-service" name="service" defaultValue="">
            {form.serviceOptions.map((option, index) => (
              <option key={index} value={index === 0 ? "" : t(option, locale)}>
                {t(option, locale)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="frow">
        <div className="field">
          <label htmlFor="q-urgency">{t(form.urgency, locale)}</label>
          <select id="q-urgency" name="urgency" defaultValue={t(form.urgencyOptions[0], locale)}>
            {form.urgencyOptions.map((option, index) => (
              <option key={index} value={t(option, locale)}>
                {t(option, locale)}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="files">{t(form.files, locale)}</label>
          <label className="file-drop" htmlFor="files">
            <Icon name="upload" />
            <span>{fileLabel ?? t(form.uploadCta, locale)}</span>
          </label>
          <input
            ref={fileInputRef}
            id="files"
            name="files"
            type="file"
            multiple
            accept="image/*,.pdf,.dwg"
            style={{ display: "none" }}
            onChange={onFileChange}
          />
        </div>
      </div>

      <div className="field full" style={{ marginBottom: 18 }}>
        <label htmlFor="q-message">{t(form.message, locale)}</label>
        <textarea id="q-message" name="message" placeholder={t(form.messagePlaceholder, locale)} />
      </div>

      <button
        className="btn btn-primary"
        type="submit"
        style={{ width: "100%" }}
        disabled={submitting || succeeded}
      >
        {submitting ? t(form.submitting, locale) : t(form.submit, locale)}
      </button>

      {succeeded && (
        <div className="form-msg" style={{ display: "block" }} role="status">
          {t(form.success, locale)}
        </div>
      )}

      {status === "error" && (
        <div
          className="form-msg"
          style={{
            display: "block",
            borderColor: "#ef4444",
            background: "rgba(239,68,68,.12)",
            color: "#fecaca",
          }}
          role="alert"
        >
          {t(form.error, locale)}
        </div>
      )}
    </form>
  );
}
