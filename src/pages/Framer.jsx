import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
export default function Framer() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const scaleX = useSpring(scrollYProgress, { stiffness: 500, damping: 150 });
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 5]);

    const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <>
            <motion.div className="flex justify-center bg-red-500 items-center h-screen text-white">
                <AnimatePresence>
                    <motion.h1
                        style={{ opacity, scale }}
                        className="text-8xl anim font-bold"
                    >
                        Hello!
                    </motion.h1>
                </AnimatePresence>
            </motion.div>
            <motion.div
                className="bg-white p-1"
                style={{ scaleX }}
            ></motion.div>
            <div className="flex justify-center items-center h-screen text-white">
                <AnimatePresence>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                        className="text-8xl font-bold"
                    >
                        Hello!
                    </motion.h1>
                </AnimatePresence>
            </div>
        </>
    );
}
