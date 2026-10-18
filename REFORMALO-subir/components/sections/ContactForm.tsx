"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { contact } from "@/content/home";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-1.5 w-full rounded-2xl border border-brand-soft bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted/70 transition-[border-color,box-shadow] duration-150 ease-out hover:border-brand focus:border-brand-dark focus:outline-none focus:ring-4 focus:ring-brand/20";

/**
 * Formulario compatible con Netlify Forms. En Next, Netlify detecta el
 * formulario por `public/__forms.html` y recibe el envío por POST a esa ruta.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      data.set("form-name", "contacto");
      const body = new URLSearchParams(
        data as unknown as Record<string, string>,
      ).toString();
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="grid min-h-[22rem] place-items-center rounded-[2rem] bg-white p-8 text-center shadow-lift"
      >
        <div>
          <p aria-hidden className="text-5xl">
            🎉
          </p>
          <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
            {contact.success.title}
          </h3>
          <p className="mt-2 text-lg text-ink-muted">{contact.success.text}</p>
          <div className="mt-6">
            <Button variant="secondary" onClick={() => setStatus("idle")}>
              Enviar otro mensaje
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      name="contacto"
      method="POST"
      onSubmit={onSubmit}
      className="rounded-[2rem] bg-white p-6 text-ink shadow-lift sm:p-9"
    >
      <h3 className="font-display text-2xl font-extrabold tracking-tight">
        {contact.formTitle}
      </h3>

      <input type="hidden" name="form-name" value="contacto" />
      <p className="hidden" aria-hidden>
        <label>
          No rellenar si eres humano: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Nombre <span aria-hidden>*</span>
          <input
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={field}
          />
        </label>
        <label className="block text-sm font-semibold">
          Email <span aria-hidden>*</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@correo.com"
            className={field}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold">
        Asunto <span aria-hidden>*</span>
        <input
          name="asunto"
          type="text"
          required
          placeholder="¿En qué te podemos ayudar?"
          className={field}
        />
      </label>

      <label className="mt-5 block text-sm font-semibold">
        Mensaje <span aria-hidden>*</span>
        <textarea
          name="mensaje"
          required
          rows={5}
          placeholder="Cuéntanos sobre tu negocio y qué necesitas"
          className={`${field} resize-y`}
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm text-ink-muted">
        <input
          name="privacidad"
          type="checkbox"
          required
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-brand-soft accent-brand-dark"
        />
        <span>
          He leído y acepto la{" "}
          <Link
            href="/privacidad"
            className="font-semibold text-brand-dark underline underline-offset-2"
          >
            política de privacidad
          </Link>
          . <span aria-hidden>*</span>
        </span>
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"} arrow>
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </Button>
        <p role="status" className="text-sm font-medium text-red-700">
          {status === "error" ? contact.error : ""}
        </p>
      </div>
    </form>
  );
}
