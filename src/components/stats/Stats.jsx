import { useEffect, useState } from "react";

const statsData = [
  { label: "Happy Clients", value: 1000, suffix: "+" },
  { label: "Services Offered", value: 50, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Success Rate", value: 99, suffix: "%" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1200; // fast animation
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)]">
      {count}
      {suffix}
    </h3>
  );
};

const Stats = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {statsData.map((stat, i) => (
          <div key={i}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
