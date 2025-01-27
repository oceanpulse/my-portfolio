import { motion } from "framer-motion"

//variants
const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%'
    },
    exit: {
        top: ['100%', '0%'],
    }

}

//calculation the reverse index for staggered deloay
const reverseIndex = (index) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
      <>
        {/*render 6 motion divs, each representing a step of the stairs
  each div will have the same animation by the stairsAnimation object.
  The delay for each div is calculated dynamically based on its reversed index, creating a staggared effect with decreasing delay for each subsequent step
  */}
        {Array(6).fill().map((_, index) => (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              delay: reverseIndex(index) * 0.1,
              
            }}
            className="w-full h-full bg-white relative"
          />
        ))}
      </>
    )
  }

export default Stairs