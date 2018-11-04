import React from 'react'
import styled from 'styled-components'
import Const from '~/src/const'

const {
  Color
} = Const

const MODE_PLUS = 'plus'
const MODE_WAIT = 'wait'
const MODE_MINUS = 'minus'

export default class InputAnimation extends React.Component {
  constructor(props){
    super(props)
    this.input = React. createRef()
    this.state = {
      count: 0,
      target: 0,
      mode: MODE_PLUS,
      text: '',
      animation: setInterval(
        () => this.plusAnimation(),
        200)
    }
  }

  plusAnimation() {
    const {
      prefix,
      contents
    } = this.props
    const {
      count,
      target = 0,
      mode,
      animation
    } = this.state

    const content = contents[target]
    const text = `${prefix} ${content.slice(0, count)}`
    const nextCount = count + 1
    const nextMode = nextCount === content.length + 1
      ? MODE_WAIT
      : MODE_PLUS
    let nextAnimation = animation
    if(nextMode === MODE_WAIT) {
      clearInterval(animation)
      nextAnimation = setInterval(
        () => this.waitAnimation(),
        1000
      )
    }
    this.setState({
      ...this.state,
      count: nextCount,
      mode: nextMode,
      animation: nextAnimation,
      text
    })
  }

  minusAnimation() {
    const {
      prefix,
      contents
    } = this.props
    const {
      count,
      target = 0,
      mode,
      animation,
    } = this.state

    const content = contents[target]
    const text = `${prefix} ${content.slice(0, count)}`
    const nextCount = count - 1 < 0 ? 0 : count - 1
    const nextMode = nextCount === 0 ? MODE_PLUS : MODE_MINUS

    let nextAnimation = animation
    let nextTarget = target
    if(nextMode === MODE_PLUS) {
      clearInterval(animation)
      nextAnimation = setInterval(
        () => this.plusAnimation(),
        200
      )
      nextTarget = target === contents.length - 1 ? 0 : target + 1
    }
    this.setState({
      ...this.state,
      count: nextCount,
      mode: nextMode,
      target: nextTarget,
      animation: nextAnimation,
      text
    })
  }

  waitAnimation() {
    clearInterval(this.state.animation)
    const nextAnimation = setInterval(
      () => this.minusAnimation(),
      100
    )
    this.setState({
      ...this.state,
      mode: MODE_MINUS,
      animation: nextAnimation
    })
  }

  componentWillUnmount() {
    clearInterval(this.animation)
  }

  render() {
    const {
      prefix,
      contents,
    } = this.props
    const {
      text
    } = this.state

    return (
      <Wrapper>
        <span></span>
        <Input>
          { text }
        </Input>
        <Cursor>|</Cursor>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
`

const Input = styled.p`
  display: inline-block;
`

const Cursor = styled.span`
  font-weight: 500;
  color: ${Color.VERY_LIGHT_GRAY};
  animation: blink 1.5s infinite;
  @keyframes blink {
    50% { opacity: 0; }
    0%, 100% { opacity: 1; }
  }
`
