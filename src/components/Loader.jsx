import { motion, AnimatePresence } from "framer-motion";
import { BallTriangle, DNA } from "react-loader-spinner";

const Loader = ({ isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <DNA
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                        <p className="text-white mt-4 text-lg font-semibold">Loading Portfolio...</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Loader