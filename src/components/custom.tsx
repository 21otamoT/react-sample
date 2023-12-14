import React, { useCallback, useDebugValue, useState } from 'react'

//input向けにコールバックと現在の入力内容をまとめたフック
const useInput = () => {
  //現在の入力値を保持するフック
  const [state, setState] = useState('')
  //inputが変化したら、フック内の状態を更新する
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  },[])

  //デバッグ用に値を出力する
  //値は開発者ツールのComponentsタブに表示される
  useDebugValue(`Input:${state}`)
  //現在の入力内容とコールバック関数だけ返す
  return [state,onChange] as const
}

const Custom = () => {
  const [text,onChangeText] = useInput()
  return (
    <div>
      <input style={{width:'80%',padding: '16px 0'}} type="text" value={text} onChange={onChangeText}/>
      <p>{text}</p>
    </div>
  )
}

export default Custom