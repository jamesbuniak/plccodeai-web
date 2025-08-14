import { useState } from "react";

const privacyText = `
Privacy Policy

Your privacy is important to us. PLCcode.ai collects only the information necessary to provide our services and never sells your data. We use industry-standard security to protect your information. You may request deletion of your data at any time. For full details, please contact info@zuyzo.com.

- We collect: Name, email, company, and usage data.
- We use your data to: Provide services, improve our platform, and communicate updates.
- We do not sell or share your data with third parties except as required by law.
- You may request deletion or export of your data by contacting us.
- For questions, email info@zuyzo.com.
`;

export default function PrivacyPolicyPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-background rounded-xl shadow-lg p-8 max-w-lg w-full text-left relative flex flex-col">
        <button
          className="absolute top-2 right-3 text-lg text-muted-foreground hover:text-foreground"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
        <div className="overflow-y-auto max-h-[60vh] text-sm whitespace-pre-line text-muted-foreground pr-2">
          {privacyText}
        </div>
      </div>
    </div>
  );
}
