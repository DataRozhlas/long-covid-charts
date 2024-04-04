import { useState } from 'preact/hooks'

export function App({ chart }: { chart: string | null }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="underline text-lg">Graf: {chart}</h1>
    </>
  )
}
