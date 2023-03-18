'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="|Dein Treffpunkt" textStyles="text-center" />
      <TitleText
        title={(
          <>Dein Treffpunkt netter Leute in Freiburg
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/Hero.png" alt="map" className="hidden border-8  rounded-2xl w-full h-full object-cover lg:block" />
        <img src="/Collage02.png" alt="map" className="border-8 border-gray-700 rounded-2xl w-full h-full object-cover lg:hidden" />

        
      </motion.div>
    </motion.div>
  </section>
);

export default World;
