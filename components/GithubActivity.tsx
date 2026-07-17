"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <GitHubCalendar
      username="adil2133-git"
      colorScheme="dark"
      theme={{
        dark: ["#12161F", "#0F3D38", "#1D6B5F", "#2A9D8A", "#3FC7B8"],
      }}
      fontSize={12}
      blockSize={11}
      blockMargin={4}
    />
  );
}