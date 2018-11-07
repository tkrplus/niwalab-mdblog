import React from 'react'
import styled from 'styled-components'

class Bio extends React.Component {
  render () {
    return (
      <Wrapper >
        <p>
          Niwa Takeru <br />
          都内在住SE/SIer  28歳<br />
          ServerSideを中心に、Front, PublicCloud, Nativeとマルチスタックなエンジニアを目指しています。<br />
          アジャイルな開発を好み、コラボレーションできるチームの作り方を日々模索しています。<br />
          Java/Spring/JavaScript/React/AWS/docker/k8s/Swift
        </p>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  margin: 0 15px 30px;
`

export default Bio
