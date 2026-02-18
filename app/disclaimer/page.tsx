import type { Metadata } from 'next';
import LegalPageLayout from '../../src/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Legal Disclaimer - Health & Wellness',
  description: 'Legal disclaimer for the Health & Wellness website.',
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout>
      <h1 className="text-2xl md:text-[2.5rem] font-semibold text-[#1f2937] mb-4 text-center">
        Legal Disclaimer
      </h1>
      <p className="mb-6">
        <strong>Last updated:</strong> January 2026
      </p>

      <div className="bg-[#fef3c7] border-l-4 border-[#d97706] p-4 my-4 rounded">
        <strong>
          EDUCATION GUIDANCE ONLY—NO MEDICAL ADVICE, NO TREATMENT RECOMMENDATIONS, NO
          DIAGNOSIS.
        </strong>
      </div>

      <section className="mb-8">
        <p className="mb-4">
          This Health & Wellness website and all content within it are provided for{' '}
          <strong>educational and informational purposes only</strong>. Nothing on this
          site is intended to be, or should be used as, medical advice, a treatment
          recommendation, or a diagnosis.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          What This Site Is
        </h2>
        <p className="mb-4">
          This site shares evidence-based health information, personal experiences, and
          resources to support general wellness education. It is not a substitute for
          professional healthcare.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          What This Site Is Not
        </h2>
        <ul className="list-disc ml-8 mb-4 space-y-2">
          <li>
            Not medical advice — always consult a qualified healthcare provider for
            medical decisions
          </li>
          <li>
            Not treatment recommendations — we do not prescribe, treat, or recommend
            specific treatments
          </li>
          <li>
            Not diagnosis — we do not diagnose any condition; seek a healthcare
            professional for diagnosis
          </li>
          <li>
            Not a professional relationship — using this site does not create a
            doctor-patient or clinical relationship
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          Your Responsibility
        </h2>
        <p className="mb-4">
          You are responsible for your own health decisions. Use this content only as
          general education. For any health concern, symptom, or decision about
          treatment, consult an appropriate licensed healthcare professional.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mt-8 mb-4 pb-2 border-b-2 border-[#d97706]">
          Contact
        </h2>
        <p className="mb-4">
          For questions about this disclaimer:{' '}
          <a href="mailto:nickconnelly10@gmail.com" className="text-[#d97706] underline">
            nickconnelly10@gmail.com
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
