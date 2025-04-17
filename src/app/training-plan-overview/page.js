"use client";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plan = {
  goal: "Run a 5K",
  durationWeeks: 8,
  sessionsPerWeek: 3,
  weeks: [
    {
      week: 1,
      days: [
        { label: "Mon", session: "Rest" },
        { label: "Tue", session: "20 min easy run" },
        { label: "Wed", session: "Rest" },
        { label: "Thu", session: "Interval run: 4 x 400m" },
        { label: "Fri", session: "Rest" },
        { label: "Sat", session: "Cross train / light jog" },
        { label: "Sun", session: "30 min long run" },
      ],
    },
    {
      week: 2,
      days: [
        { label: "Mon", session: "Rest" },
        { label: "Tue", session: "25 min easy run" },
        { label: "Wed", session: "Rest" },
        { label: "Thu", session: "Interval run: 5 x 400m" },
        { label: "Fri", session: "Rest" },
        { label: "Sat", session: "Cross train / light jog" },
        { label: "Sun", session: "35 min long run" },
      ],
    },
    // Add more weeks as needed...
  ],
};

export default function TrainingPlanOverview() {
  const [weekIndex, setWeekIndex] = useState(0);
  const currentWeek = plan.weeks[weekIndex];

  const handleNext = () => {
    if (weekIndex < plan.weeks.length - 1) {
      setWeekIndex(weekIndex + 1);
    }
  };

  const handlePrev = () => {
    if (weekIndex > 0) {
      setWeekIndex(weekIndex - 1);
    }
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="mt-12 md:mt-24 text-center"
      >
        <h1 className="font-semibold text-xl mb-2">{plan.goal}</h1>
        <p className="text-2xl max-w-2xs mx-auto text-muted-foreground">
          {plan.durationWeeks}-week plan<br />
          {plan.sessionsPerWeek} sessions / week
        </p>

        <div className="mt-10 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" onClick={handlePrev} disabled={weekIndex === 0}>
              ← Prev
            </Button>
            <h2 className="text-lg font-medium">Week {currentWeek.week}</h2>
            <Button variant="ghost" onClick={handleNext} disabled={weekIndex === plan.weeks.length - 1}>
              Next →
            </Button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={weekIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-3 text-left"
            >
              {currentWeek.days.map((day, i) => (
                <div
                  key={i}
                  className="p-3 border rounded-md bg-white shadow-sm text-sm"
                >
                  <strong>{day.label}:</strong> {day.session}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 text-center">
            <Button size="xl">Start Plan</Button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
