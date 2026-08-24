import { CareerForm } from "@/components/career/CareerForm";
import { Navbar } from "@/components/common/Navbar";

const FormPage = () => {
  return (
    <main className="min-h-screen bg-background pb-16">
      <Navbar backTo="/counsellor" backLabel="Dashboard" />
      <div className="max-w-4xl mx-auto pt-6 px-4">
        <CareerForm />
      </div>
    </main>
  );
};

export default FormPage;
