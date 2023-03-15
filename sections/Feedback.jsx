'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section style={{backgroundImage:  "linear-gradient(180deg, rgba(25,34,46,1),rgba(0,0,0,0), rgba(24,34,46,1)), url('/Impress06.jpg')",

}} className={`${styles.paddings} bg-[url("/Impress06.jpg")] bg-cover bg-no-repeat`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient bg-black/50" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Lageplan
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            Rettungsanker-Freiburg
          </p>
        </div> 
        
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.3px] leading-[39.6px] text-white">
          Adelhauser-Strasse 7c <br />
          79098 Freiburg/ Breisgau <br />
          Telefon: 0761 xxxxxxx <br />
          email: rettungsanker-freiburg@gmx.de <br />
          www.rettungsanker-freiburg.de
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
    

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
