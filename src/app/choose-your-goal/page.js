"use client";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GOALS = ["Run a 5K", "Run a 10K", "Run a Half Marathon", "Run a Full Marathon"];
const FITNESS = ["Beginner", "Intermediate", "Advanced", "Pro"];
const AVAILIBILITY = ["Once a week", "Three times a week", "Everyday"];

export default function GoalSelection() {
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedFitness, setSelectedFitness] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const router = useRouter();

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    setStep(2);
  };

  const handleFitnessSelect = (fitness) => {
    setSelectedFitness(fitness);
    setStep(3);
  };

  const handleAvailabilitySelect = (availability) => {
    setSelectedAvailability(availability);
    router.push("/training-plan-overview");
  };

  return (
    <Layout>
      <div className="mt-12 md:mt-24 text-center min-h-[400px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-semibold text-xl mb-2">Choose a Goal</h1>
              <p className="text-2xl max-w-2xs mx-auto text-muted-foreground">
                What distance are you training for?
              </p>

              <div className="grid grid-cols-1 gap-2 mt-10">
                {GOALS.map((goal) => (
                  <Button
                    key={goal}
                    size="xl"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleGoalSelect(goal)}
                  >
                    {goal}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-semibold text-xl mb-2">Let&apos;s personalise it</h1>
              <p className="text-2xl max-w-2xs mx-auto text-muted-foreground">
                You want to <strong>{selectedGoal}</strong>. How active are you now?
              </p>

              <div className="grid grid-cols-1 gap-2 mt-10">
                {FITNESS.map((fitness) => (
                  <Button
                    key={fitness}
                    size="xl"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleFitnessSelect(fitness)}
                  >
                    {fitness}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-semibold text-xl mb-2">Let&apos;s personalise it</h1>
              <p className="text-2xl max-w-2xs mx-auto text-muted-foreground">
                You&apos;re in  <strong>{selectedFitness}</strong> mode, NICE! When can you workout?
              </p>

              <div className="grid grid-cols-1 gap-2 mt-10">
                {AVAILIBILITY.map((availibility) => (
                  <Button
                    key={availibility}
                    size="xl"
                    variant="outline"
                    className="w-full"
                    onClick={() => handleAvailabilitySelect(availibility)}
                  >
                    {availibility}
                  </Button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
