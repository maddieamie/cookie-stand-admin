// components/Form.js
import { useState } from 'react'

export default function Form({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = {
      location: event.target.location.value,
      minCustomers: event.target.minCustomers.value,
      maxCustomers: event.target.maxCustomers.value,
      avgCookies: event.target.avgCookies.value,
    }
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-green-300 p-4 rounded-lg space-y-4">
      <div className="grid grid-cols-4 gap-4">
        <label className="col-span-1">Location</label>
        <input name="location" className="col-span-3 p-2" required />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <label>Minimum Customers per Hour</label>
        <input name="minCustomers" type="number" className="p-2" required />
        <label>Maximum Customers per Hour</label>
        <input name="maxCustomers" type="number" className="p-2" required />
        <label>Average Cookies per Sale</label>
        <input name="avgCookies" type="number" className="p-2" required />
      </div>
      <button type="submit" className="bg-green-500 px-4 py-2 text-white rounded">Create</button>
    </form>
  )
}
