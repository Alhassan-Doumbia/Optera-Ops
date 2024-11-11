import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profiles from "./profile.json";
import ProfileComp from "./ProfileComp";
 // On va mapper les diifférents profiles et sur la base de certaines données dans
  // le fichier JSOON ,on va reordonner les le leaderboard , du premier u deuxième
function LeaderBoard() {
  const [sortedArray, setSortedArray] = useState([]);

  // Fonction pour trier les profils
  useEffect(() => {
    const sortedProfiles = [...profiles].sort((a, b) => b.score - a.score);
    setSortedArray(sortedProfiles);
  }, []);

  return (
    <section
      id="leaderBoardContainer"
      className="w-[700px] min-h-[400px] h-fit max-h-[700px] px-[10px] py-2 flex flex-col gap-2"
    >
      <AnimatePresence>
        {sortedArray.map((element, index) => (
          <motion.div
            key={element.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            layout // This is important to animate position changes
          >
            <ProfileComp
              key={index}
              name={element.name}
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
