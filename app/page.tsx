// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClients";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.replace("/login");
      } else {
        setUser(data.user);
      }
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Welcome, {user?.email}</h1>
      <p>This will be your time tracking dashboard.</p>
    </div>
  );
}
