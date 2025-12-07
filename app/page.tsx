"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import SaveTheDate from "@/components/SaveTheDate";
import Quote from "@/components/Quote";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AudioPlayer from "@/components/AudioPlayer";
import { useLenis } from "@/components/SmoothScroll";

export default function Home() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      if (isInvitationOpened) {
        lenis.start();
        document.body.style.overflow = "auto";
      } else {
        lenis.stop();
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
      }
    }
  }, [isInvitationOpened, lenis]);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
    setTimeout(() => {
      const saveTheDateSection = document.getElementById("save-the-date");
      if (saveTheDateSection) {
        saveTheDateSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <main className="relative">
      <Navbar />
      <Hero onOpen={handleOpenInvitation} isOpened={isInvitationOpened} />
      <SaveTheDate />
      <Quote />
      <EventDetails />
      <Gallery />
      <RSVP />
      <Footer />
      <AudioPlayer />
    </main>
  );
}

