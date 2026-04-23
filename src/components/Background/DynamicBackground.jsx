import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

// const roles = [
//   { label: 'AI / ML', x: '10%', y: '15%', color: '#6366f1' },
//   { label: 'DATA SCIENTIST', x: '70%', y: '10%', color: '#a855f7' },
//   { label: 'iOS DEV', x: '75%', y: '60%', color: '#ec4899' },
//   { label: 'BIZ ANALYST', x: '15%', y: '70%', color: '#22c55e' },
//   { label: 'GENERALIST', x: '45%', y: '40%', color: '#3b82f6' },
// ];

const DynamicBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothing for that "premium" heavy feel
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleMove = (e) => {
      // Normalize values from -0.5 to 0.5
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="aura-wrapper">
      {/* Background Texture */}
      <div className="aura-grid" />
      
      {/* The Central Aura Pulse */}
      <motion.div 
        className="aura-core"
        style={{
          x: useTransform(smoothX, [ -0.5, 0.5], [50, -50]),
          y: useTransform(smoothY, [ -0.5, 0.5], [50, -50]),
        }}
      />
      
    </div>
  );
};

// const AuraCard = ({ role, mX, mY }) => {
//   // 3D Rotation logic
//   const rotateX = useTransform(mY, [-0.5, 0.5], [20, -20]);
//   const rotateY = useTransform(mX, [-0.5, 0.5], [-20, 20]);

//   return (
//     <motion.div
//       className="aura-card"
//       style={{
//         left: role.x,
//         top: role.y,
//         rotateX,
//         rotateY,
//         perspective: 1000,
//         borderColor: role.color,
//         boxShadow: `0 0 20px ${role.color}22`,
//       }}
//     >
//       <div className="card-glow" style={{ background: role.color }} />
//       <span className="card-label">{role.label}</span>
//       <div className="card-scanline" />
//     </motion.div>
//   );
// };

export default DynamicBackground;