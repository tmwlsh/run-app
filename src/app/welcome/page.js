"use client";

import Layout from "@/components/layout";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center">
      <Layout>
        <motion.div 
          className="mt-12 md:mt-24"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-semibold text-xl mb-2">
            Welcome
          </h1>
          <p className="text-2xl max-w-2xs mx-auto text-muted-foreground">
            Smarter training plans, built specifically for you.
          </p>

          <div className="grid grid-cols-1 gap-2 mt-10">
            <Button size="xl" asChild>
              <Link href="/choose-your-goal">Get Started</Link>
            </Button>
            {/* <Button size="xl" variant="outline" className="w-full">Login</Button> */}
          </div>
        </motion.div>
      </Layout>
    </div>
  );
}
