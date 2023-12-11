import React from 'react'

//Containerのpropsの型を定義します。
type ContainerProps = {
  title: string
  children: React.ReactNode
}

const Container = (props: ContainerProps) : JSX.Element => {
  const {title,children} = props

  return (
    <div style={{background:'blue'}}>
      <span>{title}</span>
      {/* propsのcildrenを埋め込むと、このコンポーネントの開始タグと終了タグで囲んだ要素を表示します */}
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    // Containerを使用する際に他の要素で囲って使用する
    <Container title="Hello">
      <p>ここの部分は背景色で囲まれます</p>
    </Container>
  )
}
export default Parent 