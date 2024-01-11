'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { RevealWrapper } from './reveal.styles'

type RevealProps = {
  children: React.ReactNode
  type?: 'fade' | 'scroll'
  width?: 'fit-content' | '100%'
  delay?: number
  isActive?: boolean
  isCentered?: boolean
}


const Reveal = ({
  children,
  type = 'scroll',
  width = 'fit-content',
  delay = 0.25,
  isActive = true,
  isCentered = false
}: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true, amount: 0.1 })

  const revealControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      revealControls.start('visible')
    }
  }, [isInView, revealControls])

  const center = isCentered ? {
    display: 'flex',
    justifyContent: 'center',
  } : {}

  return (
    <RevealWrapper ref={ref} width={width}>
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
    </RevealWrapper>
  )
}

export default Reveal