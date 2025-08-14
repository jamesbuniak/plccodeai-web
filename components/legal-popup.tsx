const legalText = `
LEGAL NOTICE
Last Updated: August 14, 2025

This Legal Notice (“Notice”) governs the use of the PLCCode.ai website, application, and associated services (collectively, the “Platform”). By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by this Notice, our Terms of Service, and Privacy Policy.

1. Operator Information
PLCCode.ai is operated by:
Zuyzo
Email: info@zuyzo.com

2. Purpose of the Platform
PLCCode.ai provides tools for generating, editing, and managing Programmable Logic Controller (“PLC”) code and related documentation. The Platform is intended for use by trained professionals with appropriate knowledge of industrial automation systems.

3. Intellectual Property

All content, software, algorithms, code templates, and documentation available on the Platform are the intellectual property of Zuyzo, unless otherwise stated.

Users retain ownership of any original code or content they upload to the Platform, but grant Zuyzo a non-exclusive, worldwide license to store, process, and display such content solely for the purpose of operating the Platform.

Unauthorized reproduction, distribution, or modification of any part of the Platform or its content is strictly prohibited.

4. Disclaimers

No Warranty: The Platform is provided “AS IS” and “AS AVAILABLE” without warranties of any kind, express or implied.

No Liability for Use in Critical Systems: PLCCode.ai is not certified for safety-critical applications. Any PLC code generated should be thoroughly reviewed, tested, and validated by a qualified professional before deployment in any live environment.

User Responsibility: You are solely responsible for the correctness, safety, and suitability of any code, configuration, or documentation generated through the Platform.

5. Limitation of Liability
To the fullest extent permitted by law, Zuyzo shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or damage to equipment, arising from your use of or inability to use the Platform.

6. Compliance with Laws
Users are responsible for ensuring that their use of the Platform complies with all applicable local, state, national, and international laws, regulations, and standards governing industrial automation, data protection, and export controls.

7. Changes to This Notice
We reserve the right to update or modify this Notice at any time without prior notice. Any changes will be effective immediately upon posting to the Platform. Continued use after such changes constitutes your acceptance of the updated Notice.

8. Governing Law & Jurisdiction
This Notice shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to conflict of laws principles. Any disputes shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].

If you require further clarification about this Notice, please contact us at info@zuyzo.com.
`;

export default function LegalPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
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
