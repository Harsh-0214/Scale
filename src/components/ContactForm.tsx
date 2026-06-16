"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Fields = {
  name: string;
  email: string;
  business: string;
  revenue: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const REVENUE_RANGES = [
  "Under $10k / month",
  "$10k – $50k / month",
  "$50k – $100k / month",
  "$100k – $250k / month",
  "$250k+ / month",
];

const EMPTY: Fields = {
  name: "",
  email: "",
  business: "",
  revenue: "",
  message: "",
};

function validate(fields: Fields): Errors {
  const errors: Errors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  if (!fields.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.business.trim())
    errors.business = "Please enter your business name.";
  if (!fields.revenue) errors.revenue = "Please select a revenue range.";
  if (!fields.message.trim()) {
    errors.message = "Tell us a little about your goals.";
  } else if (fields.message.trim().length < 10) {
    errors.message = "A little more detail helps us prepare.";
  }
  return errors;
}

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const update = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // No backend needed — log the payload and simulate a network round-trip.
    console.log("Scale — new enquiry:", fields);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center rounded-2xl border border-foreground/12 bg-foreground/[0.02] px-8 py-16 text-center"
            role="status"
            aria-live="polite"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.15,
                type: "spring",
                stiffness: 220,
                damping: 14,
              }}
              className="flex size-16 items-center justify-center rounded-full bg-foreground text-background"
            >
              <Check className="size-8" strokeWidth={2.5} />
            </motion.div>
            <h2 className="mt-7 text-3xl font-extrabold tracking-tight text-foreground">
              You&apos;re in. We&apos;ll be in touch.
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Thanks, {fields.name.split(" ")[0] || "there"} — your details are
              with our team. Expect a reply within one business day so we can
              map out how to multiply {fields.business || "your business"}.
            </p>
            <Button
              variant="outline"
              className="mt-9"
              onClick={() => {
                setFields(EMPTY);
                setStatus("idle");
              }}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field
                id="name"
                label="Full name"
                error={errors.name}
              >
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Jordan Smith"
                  value={fields.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Field>

              <Field id="email" label="Email" error={errors.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jordan@business.com"
                  value={fields.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>
            </div>

            <Field id="business" label="Business name" error={errors.business}>
              <Input
                id="business"
                name="business"
                autoComplete="organization"
                placeholder="Smith & Co."
                value={fields.business}
                onChange={(e) => update("business", e.target.value)}
                aria-invalid={!!errors.business}
                aria-describedby={
                  errors.business ? "business-error" : undefined
                }
              />
            </Field>

            <Field
              id="revenue"
              label="Monthly revenue range"
              error={errors.revenue}
            >
              <Select
                value={fields.revenue}
                onValueChange={(value) => update("revenue", value)}
              >
                <SelectTrigger
                  id="revenue"
                  aria-invalid={!!errors.revenue}
                  aria-describedby={
                    errors.revenue ? "revenue-error" : undefined
                  }
                >
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {REVENUE_RANGES.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field
              id="message"
              label="What are you trying to achieve?"
              error={errors.message}
            >
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your business, your goals, and where you're stuck on leads…"
                value={fields.message}
                onChange={(e) => update("message", e.target.value)}
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="mt-2 w-full sm:w-auto sm:self-start"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Book my call
                  <ArrowRight className="size-4" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
