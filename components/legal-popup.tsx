const legalText = `
Legal Notice

PLCcode.ai is provided as-is, without warranty of any kind. By using this platform, you agree to our terms of service and acknowledge that all code generated should be reviewed by a qualified engineer before use in production. PLCcode.ai and its creators are not liable for any damages or losses resulting from the use of this service. For legal inquiries, contact info@zuyzo.com.

- All content is for informational purposes only.
- You are responsible for compliance with local laws and regulations.
- For questions, email info@zuyzo.com.
`;

export default function LegalPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
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
        <h3 className="text-xl font-semibold mb-4">Legal Notice</h3>
        <div className="overflow-y-auto max-h-[60vh] text-sm whitespace-pre-line text-muted-foreground pr-2">
          {legalText}
        </div>
      </div>
    </div>
  );
}
