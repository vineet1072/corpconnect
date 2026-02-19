// src/components/navbar/navData.js

export const NAV_DATA = [
  {
    label: "Buy/Sell Business",
    sections: [
      {
        title: "Buy a Business",
        links: [
          "Private Limited Company",
          "Public Limited Company",
          "LLP - Limited Liabilities Partnership",
          "OPC - One Person Company",
          "NBFC",
          "Listed Company",
          "Listed NBFC",
          "Partnership Firm",
          "Section 8 / NGO",
          "Trust",
          "Nidhi Company",
          "Credit Society",
          "Other Business",
        ],
      },
      {
        title: "Sell a Business",
        links: [
          "Private Limited Company",
          "Public Limited Company",
          "LLP - Limited Liabilities Partnership",
          "OPC - One Person Company",
          "NBFC",
          "Listed Company",
          "Listed NBFC",
          "Partnership Firm",
          "Section 8 / NGO",
          "Trust",
          "Nidhi Company",
          "Credit Society",
          "Other Business",
        ],
      },
    ],
  },
  {
    label: "Trademark Registration",
    useSimpleDropdown: true,
    position: {
      left: "35%", // you control this

      top: "100%", // directly below nav link
    },
    sections: [
      { title: "Trademark Registration" },
      { title: "Trademark Search" },
      { title: "Trademark Objections" },
      { title: "Trademark Assignment" },
      { title: "Trademark Renewal" },
      { title: "Trademark Opposition" },
      { title: "Trademark Withdrawal" },
      { title: "Trademark Rectification" },
      { title: "Logo Design" },
      { title: "Other Trademark Service" },
    ],
  },
  {
    label: "Business Funding",
    useSimpleDropdown: true,
    sections: [
      {
        title: "Term Loan",
      },
      { title: "Over Draft" },
      { title: "Cash Credit" },
      { title: "Business Loan" },
      { title: "Working Capital" },
    ],
  },
  {
    label: "Startup Registration",
    sections: [
      {
        title: "Start Business in India",
        links: ["Private Limited Company", "LLP", "OPC", "Partnership Firm"],
      },
    ],
  },
  {
    label: "Registration & Licenses",
    useSimpleDropdown: true,
    position: {
      left: "60%", // you control this

      top: "100%", // directly below nav link
    },
    sections: [
      { title: "GST Registration" },
      { title: "FSSAI License" },
      { title: "IEC" },
    ],
  },
  {
    label: "More Services",
    useSimpleDropdown: true,
    position: {
      left: "70%", // you control this

      top: "100%", // directly below nav link
    },
    sections: [
      { title: "Compliance & Filing Service" },
      { title: "Legal Documents Automation" },
      { title: "Background Screening" },
      { title: "Expert Consultation" },
    ],
  },
];
