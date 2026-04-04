import React, { useState, useEffect } from "react";

function Table({ data }) {
  return (
      <div className="overflow-x-auto rounded-lg bg-white ring-1 ring-slate-200 shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-sky-700 text-white tracking-wide">
          {["S.No", "Name", "Designation", "Contact No.", "E-mail"].map((h) => (
              <th key={h} className="px-3 py-2 text-left font-medium">
                {h}
              </th>
          ))}
          </thead>
          <tbody>
          {data.map((r, i) => (
              <tr key={r.id || i} className={i % 2 ? "bg-sky-50" : "bg-sky-100"}>
                <td className="px-3 py-2">{r.member_no}</td>
                <td className="px-3 py-2">{r.name}</td>
                <td className="px-3 py-2">{r.designation}</td>
                <td className="px-3 py-2 whitespace-nowrap">{r.contact}</td>
                <td className="px-3 py-2">{r.email || ""}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

const Bullet = ({ items }) => (
    <ul className="list-disc ml-6 space-y-1">
      {items.map((item, idx) => (
          <li key={idx}>{item.form_description || item.punishment_description}</li>
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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
          "https://ccet.ac.in/api/anti-ragging-committee.php?grouped=true"
      );
      const result = await response.json();

      if (result.committee) {
        setData(result);
      } else {
        setError("Failed to load data");
      }
    } catch (err) {
      setError("Error loading data");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-sky-700">Loading Anti-Ragging Committee Data...</h2>
        </div>
    );
  }

  if (error) {
    return (
        <div className="text-center py-20 text-red-500">
          <h2 className="text-2xl font-semibold">{error}</h2>
        </div>
    );
  }

  return (
      <main className="mx-auto max-w-6xl px-4 py-10 leading-relaxed text-slate-800">
        {/* HEADER */}
        <header className="text-center mb-10">
          <h2 className="mt-2 text-lg font-semibold underline">Order</h2>
          <p className="mt-3 text-sm sm:text-base text-left max-w-3xl mx-auto">
            In suppression of order issued under endst. no. CCET/DG/E-1/205-09
            dated 13.04.2022, a committee of the following members is hereby
            constituted as Anti-Ragging Committee and Squad at institution level
            to comply with the directions of the Hon'ble Supreme Court of India,
            for overseeing the implementation of the provisions of the verdict.
            The details of the committees are as under.
          </p>
        </header>

        {data?.committee?.["College Committee"] && (
            <Section title="A. College-level Anti-Ragging Committee">
              <Table data={data.committee["College Committee"]} />
            </Section>
        )}

        <Section title="B. College-level Anti-Ragging Squads">
          <p className="text-sm mb-6 max-w-4xl">
            The Nodal officer will coordinate with Anti-Ragging Squad to pay
            regular surprise visits at all places sensitive/prone for ragging
            under the areas allotted to each group and will submit reports to the
            Chairman of the Anti-Ragging Committee through Incharge Student
            Welfare. Further, if need be, the assistance of Security Guard can be
            availed by the Anti-Ragging Squad during their visits.
          </p>

          {data?.committee?.["Squad Block A"] && (
              <Section title="Block A">
                <Table data={data.committee["Squad Block A"]} />
              </Section>
          )}

          {data?.committee?.["Squad Block B"] && (
              <Section title="Block B">
                <Table data={data.committee["Squad Block B"]} />
              </Section>
          )}

          {data?.committee?.["Workshop Squad"] && (
              <Section title="Workshop">
                <Table data={data.committee["Workshop Squad"]} />
              </Section>
          )}
        </Section>

        {data?.committee?.["Hostel Squad"] && (
            <Section title="Hostel-level Anti-Ragging Squads">
              <Table data={data.committee["Hostel Squad"]} />
            </Section>
        )}

        {data?.committee?.["Parent & Student Representatives"] && (
            <Section title="C. Parents & Students Representatives">
              <Table data={data.committee["Parent & Student Representatives"]} />
            </Section>
        )}

        {data?.committee?.["Anti-Ragging Cell"] && (
            <Section title="D. Anti-Ragging Cell">
              <Table data={data.committee["Anti-Ragging Cell"]} />
            </Section>
        )}

        <Section title="E. Ragging is a Cognizable Offence">
          <p className="font-semibold text-red-600 text-center mb-6">
            "RAGGING IS BANNED IN ANY FORM INSIDE & OUTSIDE THE CAMPUS"
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Forms / Ingredients of Ragging</h3>
              {data?.forms && <Bullet items={data.forms} />}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Punishments</h3>
              {data?.punishments && <Bullet items={data.punishments} />}
            </div>
          </div>
        </Section>

        {data?.helplines && (
            <section className="mt-12 text-center bg-sky-50 border border-sky-200 rounded-xl px-6 py-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-sky-800 mb-4 underline underline-offset-4 decoration-2">
                Important Helplines
              </h2>
              <ul className="space-y-2 text-sm sm:text-base">
                {data.helplines.map((h) => (
                    <li key={h.id} className="text-center">
                      <span className="font-medium text-sky-700">{h.label}:</span> {h.detail}
                    </li>
                ))}
              </ul>
            </section>
        )}

        <footer className="mt-12 text-xs text-right">
          Order issued on 13 December 2022, Chandigarh
        </footer>
      </main>
  );
}