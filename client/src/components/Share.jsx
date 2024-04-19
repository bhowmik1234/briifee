import React from 'react'
import Section from './Section'
import { RightBox } from './RightBox'
import { LeftBox } from './LeftBox'
import Split from 'react-split'

const Share = () => {
  return (
    <Section
    className="pt-[8rem] min-h-screen -mt-[4rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="share"
    >
      <Split
      expandToMin={false}
      minSize={40}
      className="relative container flex gap-2">
        <RightBox />
        <LeftBox />
      </Split>
    </Section>
  )
}
export default Share;