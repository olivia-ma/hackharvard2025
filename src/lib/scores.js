import { supabase } from './supabase.js'

export async function insertScore({ userId, gameId, score }) {
  const { data, error } = await supabase
    .from('scores')
    .insert({ user_id: userId, game_id: gameId, score })
  if (error) throw error
  return data
}

export async function getTopScores(gameId, limit = 10) {
  const { data, error } = await supabase
    .from('scores')
    .select('score, users(username)')
    .eq('game_id', gameId)
    .order('score', { ascending: false })
    .limit(limit)
  if (error) throw error
  return data
}

export function subscribeToScores(gameId, onInsert) {
  const channel = supabase
    .channel('public:scores')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'scores', filter: `game_id=eq.${gameId}` },
      payload => onInsert(payload.new)
    )
    .subscribe()

  return () => supabase.removeChannel(channel)
}
