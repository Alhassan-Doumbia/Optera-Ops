import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profiles from "../../data/userData.json";
import ProfileComp from "./ProfileComponent";

function LeaderBoard() {
  const [sortedArray, setSortedArray] = useState([]);

  useEffect(() => {
    const sortedProfiles = [...Profiles].sort((a, b) => b.score - a.score);
    setSortedArray(sortedProfiles);
  }, []);

  return (
    <section
      id="leaderBoardContainer"
      className="w-full min-h-[400px] h-fit max-h-[700px] px-[10px] py-2 flex flex-col gap-2"
    >
      <AnimatePresence>
        {sortedArray.map((element, index) => (
          <motion.div
            key={`${element.name}-${element.score}`} // clé dynamique pour détecter les changements de score
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            layout // Animation de transition de layout lors des changements de position
          >
            <ProfileComp
              name={element.ops_name}
              surname={element.surnames}
              post={element.post}
              minAvg={element.temps_moyen_par_appel}
              position={index + 1}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}

export default LeaderBoard;
