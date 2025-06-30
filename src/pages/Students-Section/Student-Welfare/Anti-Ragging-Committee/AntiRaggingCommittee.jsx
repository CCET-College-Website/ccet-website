import React from "react";

const collegeCommittee = [
  { no: 1, name: "Dr. Manpreet Singh Gujral, Principal",                 designation: "Chairman",  contact: "0172‑2750947", email: "principal@ccet.ac.in" },
  { no: 2, name: "Dr. Sunil K. Singh, Prof & Head (CSE)",                designation: "Convener",  contact: "9818182457", email: "sksingh@ccet.ac.in" },
  { no: 3, name: "Dr. Jatinder Madan, Prof & Head, Mech. Engg.",         designation: "Member",    contact: "9041291970", email: "jatindermadan@ccet.ac.in" },
  { no: 4, name: "Dr. Rajesh Kumar, Prof & Head, Civil Engg.",           designation: "Member",    contact: "9478548248", email: "rajeshkumar@ccet.ac.in" },
  { no: 5, name: "Dr. D. S. Saini, Prof & Head, ECE",                   designation: "Member",    contact: "7009775854", email: "dssaini@ccet.ac.in" },
  { no: 6, name: "Dr. Varun Gupta, Prof & Head, Applied Sci.",           designation: "Member",    contact: "9646047091", email: "varungupta@ccet.ac.in" },
  { no: 7, name: "Dr. Parul Aggarwal, Asst. Prof., Applied Sci.",        designation: "Member",    contact: "8437917222", email: "parul@ccet.ac.in" },
  { no: 8, name: "Head of Office",                                       designation: "Member",    contact: "9855010831", email: "hooccetdeg@gmail.com" },
];

const squadBlockA = [
  { no: 1, name: "Dr. Bhaskar Gupta, Prof. (ECE)",                   designation: "Nodal Officer", contact: "9855908643", email: "bgupta@ccet.ac.in" },
  { no: 2, name: "Dr. Sunita, Asst. Prof. (CSE)",                    designation: "Member",        contact: "9041059379", email: "sunita@ccet.ac.in" },
  { no: 3, name: "Dr. Gulshan Goyal, Asst. Prof. (CSE)",             designation: "Member",        contact: "9417506206", email: "gulshangoyal@ccet.ac.in" },
  { no: 4, name: "Dr. Parvinder Kaur, Asst. Prof. (ECE)",            designation: "Member",        contact: "8295688911", email: "pkaur@ccet.ac.in" },
];

const squadBlockB = [
  { no: 1, name: "Dr. Aradhana Mehta, Assoc. Prof. (Civil)",          designation: "Nodal Officer", contact: "8054977561", email: "amehta@ccet.ac.in" },
  { no: 2, name: "Dr. S. C. Vettivel, Asst. Prof. (Mech.)",          designation: "Member",        contact: "9865822376", email: "scvettivel@ccet.ac.in" },
  { no: 3, name: "Er. Poonam, Asst. Prof. (Civil)",                  designation: "Member",        contact: "8968399719", email: "poonam@ccet.ac.in" },
  { no: 4, name: "Er. Mohd. Sakib Perwez Khan, Asst. Prof. (Civil)",designation: "Member",        contact: "7839452836", email: "sakib786@ccet.ac.in" },
];

const workshopSquad = [
  { no: 1, name: "Dr. Mukesh Kumar, Asst. Prof. (Mech.)",            designation: "Nodal Officer", contact: "9478420561", email: "mukeshkumar@ccet.ac.in" },
  { no: 2, name: "Dr. Radhey Sham, Asst. Prof. (Mech.)",             designation: "Member",        contact: "9888040982", email: "radheysham@ccet.ac.in" },
  { no: 3, name: "Dr. Ashwani Kumar, Asst. Prof. (Mech.)",           designation: "Member",        contact: "9872823250", email: "ashwanikumar@ccet.ac.in" },
];

const hostelSquad = [
  { no: 1, name: "Dr. Dheerendra Singh, Hostel Warden (Boys – Degree)", designation: "Nodal Officer", contact: "9876439071", email: "dsingh@ccet.ac.in" },
  { no: 2, name: "Dr. Aradhana Mehta, Hostel Warden (Girls – Degree)", designation: "Member",        contact: "8054977561", email: "amehta@ccet.ac.in" },
  { no: 3, name: "Dr. S. C. Vettivel, Asst. Prof. (Mech.)",            designation: "Member",        contact: "9865822376", email: "scvettivel@ccet.ac.in" },
  { no: 4, name: "Dr. Anil Kumar Vaghmare, Asst. Hostel Warden (Degree)",designation: "Member",       contact: "6284561607", email: "anilvaghmare@ccet.ac.in" },
  { no: 5, name: "Dr. Sunita, Asst. Hostel Warden (Degree)",            designation: "Member",        contact: "9041059379", email: "sunita@ccet.ac.in" },
  { no: 6, name: "Dr. Sunita Mehta, Hostel Warden (Girls – Diploma)",   designation: "Member",        contact: "9417555235", email: "sunitavatta@gmail.com" },
  { no: 7, name: "Sh. Karnail Singh, Hostel Warden (Boys – Diploma)",   designation: "Member",        contact: "9501134647", email: "karnail.ccet21@gmail.com" },
];

const parentStudentRep = [
  { no: 1, name: "Sh. Sanjay Kumar",                                  designation: "Parent Representative",  contact: "9534675284", email: "" },
  { no: 2, name: "Sh. Prakash Chand Mahajan, Businessman",            designation: "Parent Representative",  contact: "7496825302", email: "msunita243@gmail.com" },
  { no: 3, name: "Sh. Shivam Kumar (CO20350, CSE)",                   designation: "Student Representative", contact: "9199932637", email: "co20350@ccet.ac.in" },
  { no: 4, name: "Sh. Aakarsh Mahajan (CO21301, CSE)",                designation: "Student Representative", contact: "9306132219", email: "co21301@ccet.ac.in" },
];

const antiRaggingCell = [
  { no: 1, name: "Dr. Manpreet Singh Gujral, Principal",              designation: "Chairman",  contact: "0172‑2750947", email: "principal@ccet.ac.in" },
  { no: 2, name: "Dr. Sunil K. Singh, Professor",                     designation: "Convener",  contact: "9818182457",   email: "sksingh@ccet.ac.in" },
  { no: 3, name: "Dr. Sarabjeet Singh, NSS Programme Officer",        designation: "Member",    contact: "9463739413",   email: "ssingh@ccet.ac.in" },
  { no: 4, name: "Dr. Gulshan, PSC‑cum‑SSC",                          designation: "Member",    contact: "9417506206",   email: "gulshangoyal@ccet.ac.in" },
  { no: 5, name: "Dr. Bhaskar Gupta, Prof. (ECE)",                    designation: "Member",    contact: "9855908643",   email: "bgupta@ccet.ac.in" },
  { no: 6, name: "Dr. Dheerendra Singh, Hostel Warden (Boys)",        designation: "Member",    contact: "9876439071",   email: "dsingh@ccet.ac.in" },
  { no: 7, name: "Dr. Aradhana Mehta, Assoc. Prof. (Civil)",          designation: "Member",    contact: "8054977561",   email: "amehta@ccet.ac.in" },
  { no: 8, name: "Dr. Mukesh Kumar, Asst. Prof. (Mech.)",            designation: "Member",    contact: "9478420561",   email: "mukeshkumar@ccet.ac.in" },
];

const raggingForms = [
  "Abetment to ragging",
  "Criminal conspiracy to rag",
  "Unlawful assembly / rioting while ragging",
  "Violation of decency & morals",
  "Injury to body (hurt / grievous hurt)",
  "Wrongful restraint or confinement",
  "Use of criminal force, assault or sexual offences",
  "Extortion, criminal trespass, intimidation or property offences",
  "Attempts to commit any of the above",
  "Physical or psychological humiliation",
  "Any other act that fits the definition of “ragging”",
];

const punishments = [
  "Cancellation of admission",
  "Suspension from classes & academic privileges",
  "Withdrawal of scholarship / benefits",
  "Debarring from exams or evaluation",
  "Withholding results",
  "Debarring from representing the institute",
  "Suspension / expulsion from hostel",
  "Rustication (1 – 4 semesters)",
  "Expulsion & debarment from other institutes (specified period)",
  "Fine ₹25 000 – ₹1 lakh",
  "Rigorous imprisonment up to 3 years",
  "Collective punishment if offenders remain unidentified",
];

const helplines = [
  { label: "Professor‑in‑Charge Student Welfare", detail: "9818182457 • psw@ccet.ac.in" },
  { label: "Joint‑in‑Charge Student Welfare",     detail: "8054977561" },
  { label: "Head of Office",                      detail: "0172‑2750943" },
  { label: "In‑charge Security",                  detail: "6284561607" },
  { label: "Anti‑Ragging Helpline (e‑mail)",      detail: "helpline@anti‑ragging.in" },
  { label: "National Anti‑Ragging Helpline 24×7", detail: "1800‑180‑5522 (Toll‑free)" },
];


function Table({ data }) {
  return (
    <div className="overflow-x-auto rounded-lg bg-white ring-1 ring-slate-200 shadow-sm">
      <table className="min-w-full text-sm">
        <thead className="bg-sky-700 text-white tracking-wide">
          {["S.No", "Name", "Designation", "Contact No.", "E‑mail"].map((h) => (
            <th key={h} className="px-3 py-2 text-left font-medium">
              {h}
            </th>
          ))}
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i} className={i % 2 ? "bg-sky-50" : "bg-sky-100"}>
              <td className="px-3 py-2">{r.no}</td>
              <td className="px-3 py-2">{r.name}</td>
              <td className="px-3 py-2">{r.designation}</td>
              <td className="px-3 py-2 whitespace-nowrap">{r.contact}</td>
              <td className="px-3 py-2">{r.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Bullet = ({ items }) => (
  <ul className="list-disc ml-6 space-y-1">{items.map((it) => <li key={it}>{it}</li>)}</ul>
);

const HelplineList = () => (
  <ul className="space-y-1">
    {helplines.map((h) => (
      <li key={h.label} className="flex gap-2">
        <span className="font-medium text-sky-800">{h.label}:</span>
        <span>{h.detail}</span>
      </li>
    ))}
  </ul>
);

const Section = ({ title, children }) => (
  <section className="mt-10">
    <h2 className="text-lg sm:text-xl font-semibold text-sky-700 underline decoration-2 decoration-gray-300 mb-4">
      {title}
    </h2>
    {children}
  </section>
);

export default function AntiRaggingCommittee() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 leading-relaxed text-slate-800">
      {/* HEADER ---------------------------------------------------- */}
      <header className="text-center mb-10">
        <h2 className="mt-2 text-lg font-semibold underline">Order</h2>
        <p className="mt-3 text-sm sm:text-base text-left max-w-3xl mx-auto">
          In suppression of order issued under endst. no.&nbsp;CCET/DG/E‑1/205‑09
          dated&nbsp;13.04.2022, a committee of the following members is hereby
          constituted as Anti‑Ragging Committee and Squad at institution level
          to comply with the directions of the Hon'ble Supreme Court of India,
          for overseeing the implementation of the provisions of the verdict.
          The details of the committees are as under.
        </p>
      </header>

      
      <Section title="A. College‑level Anti‑Ragging Committee">
        <Table data={collegeCommittee} />
      </Section>

      
      <Section title="B. College‑level Anti‑Ragging Squads">
        <p className="text-sm mb-6 max-w-4xl">
          The Nodal officer will coordinate with Anti‑Ragging Squad to pay
          regular surprise visits at all places sensitive/prone for ragging
          under the areas allotted to each group and will submit reports to the
          Chairman of the Anti‑Ragging Committee through Incharge Student
          Welfare. Further, if need be, the assistance of Security Guard can be
          availed by the Anti‑Ragging Squad during their visits.
        </p>
        <Section title="Block A"><Table data={squadBlockA} /></Section>
        <Section title="Block B"><Table data={squadBlockB} /></Section>
        <Section title="Workshop"><Table data={workshopSquad} /></Section>
      </Section>

      <Section title="Hostel‑level Anti‑Ragging Squads">
        <Table data={hostelSquad} />
      </Section>

      <Section title="C. Parents &amp; Students Representatives">
        <Table data={parentStudentRep} />
      </Section>

      <Section title="D. Anti‑Ragging Cell">
        <Table data={antiRaggingCell} />
      </Section>

      
      <Section title="E. Ragging is a Cognizable Offence">
        <p className="font-semibold text-red-600 text-center mb-6">
          “RAGGING IS BANNED IN ANY FORM INSIDE &amp; OUTSIDE THE CAMPUS”
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">
              Forms / Ingredients of Ragging
            </h3>
            <Bullet items={raggingForms} />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Punishments</h3>
            <Bullet items={punishments} />
          </div>
        </div>
      </Section>

     <section className="mt-12 text-center bg-sky-50 border border-sky-200 rounded-xl px-6 py-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-4 underline underline-offset-4 decoration-2">
          Important Helplines
        </h2>
        <ul className="space-y-2 text-sm sm:text-base">
          {helplines.map((h) => (
            <li key={h.label} className="text-center">
              <span className="font-medium text-sky-700">
                {h.label}:
              </span>{" "}
              {h.detail}
            </li>
          ))}
        </ul>
      </section>


      <footer className="mt-12 text-xs text-right">
        Order issued on 13 December 2022, Chandigarh
      </footer>
    </main>
  );
}
