import React from 'react'
import { motion } from "framer-motion"

const CheckIcon = (props) => (
    <svg {...props} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
        <motion.path initial={{pathLength: 0}} animate={{ pathLength: 1 }} transition={{delay: 0.2}} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
    </svg>
)

export default CheckIcon
