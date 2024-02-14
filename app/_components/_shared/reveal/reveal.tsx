'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { RevealDiv, RevealLi } from './reveal.styles'

type RevealProps = {
  children: React.ReactNode
  type?: 'fade' | 'scroll'
  width?: 'fit-content' | '100%'
  delay?: number
  isActive?: boolean
  isCentered?: boolean
  isRevealed?: boolean
  element?: 'div' | 'li'
}


const Reveal = ({
  children,
  type = 'scroll',
  width = 'fit-content',
  delay = 0.25,
  isActive = true,
  isCentered = false,
  isRevealed = false,
  element = 'div'
}: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 'some' })

  const revealControls = useAnimation()

  useEffect(() => {
    if (isInView || isRevealed) {
      revealControls.start('visible')
    }
  }, [
    isInView,
    isRevealed,
    revealControls
  ])

  const center = isCentered ? {
    display: 'flex',
    justifyContent: 'center',
  } : {}

  const renderMotion = () => (
    <motion.div
      style={{ ...center }}
      variants={{
        hidden: { opacity: 0, y: type === 'fade' ? 0 : 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial={isActive ? 'hidden' : 'visible' }
      animate={revealControls}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )

  if (element === 'li') {
    return (
      <RevealLi ref={ref} width={width}>
        {renderMotion()}
      </RevealLi>
    )
  }

  return (
    <RevealDiv ref={ref} width={width}>
      {renderMotion()}
    </RevealDiv>
  )
}

export default Reveal
