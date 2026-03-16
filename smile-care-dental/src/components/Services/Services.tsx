"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Services.module.css";
import ScrollReveal from "../ScrollReveal";

const services = [
  {
    id: "general",
    title: "General Dentistry",
    description: "Comprehensive check-ups, cleaning, and preventative care for all ages.",
    icon: "/icon_general.png",
    details: "Our general dentistry services focus on long-term oral health. Regular check-ups include professional cleaning, digital x-rays, and oral cancer screenings to catch issues before they become major problems.",
    duration: "45-60 min",
    recovery: "No downtime",
    benefits: ["Plaque & Tartar Removal", "Early Cavity Detection", "Personalized Oral Hygiene Plan"]
  },
  {
    id: "ortho",
    title: "Orthodontics",
    description: "Modern braces and clear aligners to perfect your smile's alignment.",
    icon: "/icon_ortho.png",
    details: "We offer both traditional ceramic braces and modern clear aligners like Invisalign. Our orthodontic treatments are tailored to improve both the function of your bite and the aesthetics of your smile.",
    duration: "12 - 24 months",
    recovery: "Initial 2-3 days adjustment",
    benefits: ["Corrected Jaw Alignment", "Straighter Teeth", "Improved Oral Hygiene Access"]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and bonding for a stunning transformation.",
    icon: "/icon_cosmetic.png",
    details: "Transform your smile with our aesthetic solutions. From professional laser whitening to custom-crafted porcelain veneers, we help you achieve the confident, bright smile you've always wanted.",
    duration: "1 - 2 sessions",
    recovery: "Minimal sensitivity for 24h",
    benefits: ["Brighter, Whiter Smile", "Chip & Gap Repair", "Natural-looking Results"]
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth.",
    icon: "💎",
    details: "Implants are the gold standard for tooth replacement. They provide a stable, permanent foundation that feels and functions exactly like your natural teeth while preserving jaw bone health.",
    duration: "3 - 6 months (incl. healing)",
    recovery: "1 week initial healing",
    benefits: ["Permanent Solution", "Prevents Bone Loss", "Restores Full Chewing Power"]
  },
  {
    id: "pediatric",
    title: "Pediatric Care",
    description: "Gentle and fun dental experiences for our youngest patients.",
    icon: "👶",
    details: "We believe a positive first impression of the dentist lasts a lifetime. Our pediatric specialized care uses a gentle-only approach with child-friendly language and a fun, calm environment.",
    duration: "30-45 min",
    recovery: "Immediate",
    benefits: ["Kid-friendly Environment", "Habit Building", "Fluoride Protection"]
  },
  {
    id: "surgery",
    title: "Oral Surgery",
    description: "Expert surgical procedures with advanced sedation options.",
    icon: "🏥",
    details: "Specializing in wisdom tooth extraction and corrective jaw surgery. We prioritize patient comfort with multiple sedation options and meticulous post-operative monitoring.",
    duration: "1 - 2 hours",
    recovery: "3 - 5 days",
    benefits: ["Pain Resolution", "Prevents Infection Spread", "Expert Sedation Care"]
  },
  {
    id: "gum",
    title: "Periodontal Therapy",
    description: "Specialized care for gum health and disease prevention.",
    icon: "🌿",
    details: "Healthy gums are the foundation of oral health. Our periodontal therapy treats gum disease through deep scaling, root planing, and advanced laser-assisted pocket reduction.",
    duration: "60 min",
    recovery: "1 - 2 days sensitivity",
    benefits: ["Stops Gum Recession", "Eliminates Bad Breath", "Prevents Tooth Loss"]
  },
  {
    id: "emergency",
    title: "Emergency Care",
    description: "Swift response for urgent dental issues, available 24/7.",
    icon: "🚨",
    details: "Dental emergencies can happen anytime. We offer priority same-day appointments for knocked-out teeth, severe pain, or broken restorations to ensure you're out of pain immediately.",
    duration: "Varies",
    recovery: "Dependent on treatment",
    benefits: ["Immediate Pain Relief", "Save At-risk Teeth", "24/7 Support"]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedService]);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <ScrollReveal className={styles.header}>
          <h2 className={styles.title}>Our Premium Services</h2>
          <p className={styles.subtitle}>
            Where medical excellence meets artistic precision. We deliver bespoke dental solutions designed for the discerning individual.
          </p>
        </ScrollReveal>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={styles.card} onClick={() => openModal(service)}>
                <div className={styles.icon}>
                  {service.icon.startsWith("/") ? (
                    <Image src={service.icon} alt={service.title} width={64} height={64} />
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <button className={styles.learnMore}>
                  Learn More <span>→</span>
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={`${styles.modalContent} glass-effect`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>×</button>
            <div className={styles.modalBody}>
              <div className={styles.modalIcon}>
                {selectedService.icon.startsWith("/") ? (
                  <Image src={selectedService.icon} alt={selectedService.title} width={120} height={120} />
                ) : (
                  selectedService.icon
                )}
              </div>
              <h3 className={styles.modalTitle}>{selectedService.title}</h3>
              <p className={styles.modalDesc}>{selectedService.details}</p>
              
              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <strong>⏱ Duration</strong>
                  <span>{selectedService.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <strong>🩹 Recovery</strong>
                  <span>{selectedService.recovery}</span>
                </div>
              </div>

              <div className={styles.benefitsArea}>
                <h4>Key Benefits</h4>
                <ul>
                  {selectedService.benefits.map((b: string, i: number) => (
                    <li key={i}>✔ {b}</li>
                  ))}
                </ul>
              </div>

              <a href="#booking" className={styles.modalBtn} onClick={closeModal}>
                Book {selectedService.title} Now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
