import { useEffect, useState } from 'react'
import { getTopScores, subscribeToScores } from '../lib/scores'

export default function Leaderboard({ gameId }) {
  const [scores, setScores] = useState([])

  useEffect(() => {
    let unsub = () => {}
    async function load() {
      const initial = await getTopScores(gameId)
      setScores(initial ?? [])
      unsub = subscribeToScores(gameId, async () => {
        const updated = await getTopScores(gameId)
        setScores(updated ?? [])
      })
    }
    load()
    return () => unsub()
  }, [gameId])

  return (
    <div>
      <h3>Leaderboard</h3>
      <ol>
        {scores.map((s, i) => (
          <li key={i}>
            <strong>{s.users?.username ?? 'Anonymous'}</strong> — {s.score}
          </li>
        ))}
      </ol>
    </div>
  )
}
