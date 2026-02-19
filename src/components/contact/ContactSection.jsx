import { useState } from "react";

const ContactSection = ({ title, description, fields, onSubmit }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log(formData);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl text-center md:text-start font-bold text-[var(--secondary)] mb-6">
            {title}
          </h2>
          <p className="text-gray-600 max-w-md leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Form Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field) => {
                // TEXTAREA
                if (field.type === "textarea") {
                  return (
                    <div key={field.name} className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">
                        {field.label}
                      </label>
                      <textarea
                        name={field.name}
                        rows={4}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                    </div>
                  );
                }

                // SELECT / OPTIONS
                if (field.type === "select") {
                  return (
                    <div key={field.name}>
                      <label className="block text-sm font-medium mb-1">
                        {field.label}
                      </label>
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full rounded-md border border-gray-300 px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      >
                        <option value="">Select an option</option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                // DEFAULT INPUT
                return (
                  <div key={field.name}>
                    <label className="block text-sm font-medium mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              className="bg-orange-300 text-white px-6 py-2 rounded-md font-medium hover:bg-[var(--primary)] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
