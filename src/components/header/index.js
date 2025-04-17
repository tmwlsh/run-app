import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Layout() {
  return (
    <div className="w-full flex items-center justify-between">
      <Link href="/welcome">Run App</Link>
      <div className="flex items-center">
        <Button className="mr-2">Sign Up</Button>
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}
