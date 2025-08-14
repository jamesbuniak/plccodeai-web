const privacyText = `
PRIVACY POLICY
Last Updated: August 14, 2025

This Privacy Policy explains how PLCCode.ai (“we,” “our,” or “us”), operated by Zuyzo, collects, uses, and protects your information when you use our website, application, and related services (collectively, the “Platform”). By accessing or using the Platform, you consent to the practices described in this Policy.

1. Information We Collect

We may collect the following types of information:

Personal Information: Name, email address, organization, billing details, and other information you provide during registration or communication with us.

Account Data: Login credentials, user preferences, and project information.

Generated Content: PLC code, configuration files, documentation, and other data you create or upload.

Usage Data: IP address, browser type, device information, pages visited, and actions taken within the Platform.

Cookies & Tracking: We use cookies, local storage, and similar technologies to enhance user experience and analyze usage.

2. How We Use Your Information

We may use the collected information to:

Provide, maintain, and improve the Platform and its features.

Store and process generated code and related data for your projects.

Communicate with you about your account, updates, and service changes.

Personalize your experience and recommend relevant features.

Protect against unauthorized access, fraud, and abuse.

Comply with legal obligations.

3. How We Share Your Information

We do not sell your personal information. We may share your information only:

With Service Providers: For hosting, storage, analytics, payment processing, and other operational needs.

For Legal Compliance: When required by law, legal process, or government request.

In Business Transactions: In connection with mergers, acquisitions, or sale of assets, where your information may be transferred to a new owner.

With Your Consent: When you explicitly authorize sharing.

4. Data Retention

We retain personal and project data for as long as necessary to provide the Platform, comply with our legal obligations, and resolve disputes. You may request deletion of your account and associated data by contacting us at info@zuyzo.com.

5. Data Security

We implement technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no online service is completely secure, and we cannot guarantee absolute protection.

6. International Data Transfers

If you access the Platform from outside [Your Jurisdiction], your information may be transferred to and processed in a country with different data protection laws.

7. Your Rights

Depending on your location, you may have rights to:

Access, correct, or delete your personal information.

Restrict or object to certain processing.

Request data portability.

Withdraw consent at any time where applicable.

To exercise these rights, contact us at info@zuyzo.com. We will respond as required by applicable law.

8. Third-Party Services

Our Platform may contain links to third-party websites and services. We are not responsible for the privacy practices or content of those services.

9. Changes to This Policy

We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Last Updated” date. Continued use of the Platform after changes constitutes your acceptance of the updated Policy.

10. Contact Us

Zuyzo
Email: info@zuyzo.com

If you have questions about this Privacy Policy or our data practices, please contact us at the above address.
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
