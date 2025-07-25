import { useState } from "react";

function LeadForm() {
  const [form, setForm] = useState({ name: "", email: "", useCase: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhook = "https://script.google.com/macros/s/AKfycbxnCIDvmP6Tr79_0JNEPMaXSmiW03g0leDxbsUWddGR9hDxDV-8Eu-392M9Yq1Z_Plc/exec";

    await fetch(webhook, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    alert("✅ Thanks, Sash! We’ve recorded your details.");
    setForm({ name: "", email: "", useCase: "" });
  };

  return (
    <section id="demo" className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Request Early Access</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="p-3 border rounded"
          required
        />
        <select
          name="useCase"
          value={form.useCase}
          onChange={handleChange}
          className="p-3 border rounded"
          required
        >
          <option value="">Select Use Case</option>
          <option value="creator">Creator</option>
          <option value="coach">Coach</option>
          <option value="marketer">Marketer</option>
          <option value="agency">Agency</option>
        </select>
        <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-semibold">
          Get Access
        </button>
      </form>
    </section>
  );
}
export default LeadForm;