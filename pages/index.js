// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';
import ReportTable from '../components/ReportTable';
import Footer from '../components/Footer';
import { useState } from 'react'

export default function CookieStandAdmin() {
  const [reports, setReports] = useState([]);



  const handleFormSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    setReports([...reports, formData]);
  };

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />

      <main className="p-8">
        <CreateForm onSubmit={handleFormSubmit}/>
        <ReportTable reports={reports} />
      </main>

      <Footer locations={reports.length} />
    </>
  );
}
