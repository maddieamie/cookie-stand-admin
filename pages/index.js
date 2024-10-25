// pages/index.js
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Home() {
  const [lastCreated, setLastCreated] = useState(null)

  const handleFormSubmit = (formData) => {
    setLastCreated(formData)
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="p-8 bg-green-100">
        <Form onSubmit={handleFormSubmit} />
        {lastCreated && (
          <pre className="mt-4 bg-gray-100 p-4 rounded">
            {JSON.stringify(lastCreated, null, 2)}
          </pre>
        )}
      </main>
      <Footer />
    </>
  )
}
