import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Stats from "../components/stats/Stats";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";

const Home = () => {
  const contactFields = [
    {
      name: "fullName",
      label: "Full name*",
      type: "text",
      placeholder: "Enter full name",
      required: true,
    },
    {
      name: "phoneNumber",
      label: "Phone number*",
      type: "tel",
      placeholder: "Enter phone number",
      required: true,
    },

    {
      name: "email",
      label: "Email*",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "service",
      label: "Choose your Interest",
      type: "select",
      options: [
        "Buy Sell Business",
        "Trademark Services",
        "Fund Raising & Subsidy -Grants",
        "Background Screening Services",
        "Startup Services",
        "Secretarial & Legal Documents Automation",
        "Expert Consultation",
      ],
      required: true,
    },
    {
      name: "message",
      label: "Additional Details (if any)",
      type: "textarea",
      placeholder: "Tell us more about your business needs...",
      required: true,
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />

      <Stats />
      <ContactSection
        title="Contact us"
        description="Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below."
        fields={contactFields}
        onSubmit={(data) => console.log("Contact form:", data)}
      />
      <Footer />
    </>
  );
};

export default Home;
