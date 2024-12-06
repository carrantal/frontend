"use client";
import React, { useEffect } from "react";

export default function ClientBootstrap() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then((Bootstrap) => {
        console.log("Bootstrap JS loaded successfully");
      })
      .catch((error) => {
        console.error("Error loading Bootstrap JS", error);
      });
  }, []);

  return null;
}
