'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { RevealWrapper } from './reveal.styles'

type RevealProps = {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  delay?: number
}


const Reveal = ({ children, width='fit-content', delay=0.25 }: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true })

  const revealControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      revealControls.start('visible')
    }
  }, [
    isInView, revealControls
  ])

  return (
    <RevealWrapper ref={ref} width={width}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={revealControls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </RevealWrapper>
  )
}

export default Reveal
