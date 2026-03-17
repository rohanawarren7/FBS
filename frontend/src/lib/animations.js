// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Custom easing for premium feel
    }
  }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerContainerFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Hover animations
export const magneticHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 }
};

export const subtleLift = {
  whileHover: { 
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

export const card3DTilt = {
  whileHover: { 
    rotateX: 2,
    rotateY: 2,
    transition: { duration: 0.3 }
  }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.4 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Utility for word-by-word animation
export const splitTextToWords = (text) => {
  return text.split(" ").map((word, i) => ({
    word,
    key: `${word}-${i}`
  }));
};
