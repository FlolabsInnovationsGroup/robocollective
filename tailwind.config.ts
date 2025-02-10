module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Scans all files in the src directory for Tailwind classes
  theme: {
    extend: {
      animation: {
        'gradient-wave': 'gradient-wave 10s infinite ease-in-out', // Background gradient animation
        'float': 'float 6s infinite ease-in-out', // Floating robot animation
        'eye-glow': 'eye-glow 3s infinite ease-in-out', // Glowing eyes animation
        'pulse': 'pulse 3s infinite ease-in-out', // Pulsing text animation
      },
      keyframes: {
        'gradient-wave': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'eye-glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px #00ffff)' },
          '50%': { filter: 'drop-shadow(0 0 20px #00ffff)' },
        },
        'pulse': {
          '0%, 100%': {
            textShadow:
              '0 0 15px #00ffff, 0 0 30px #00ffff, 0 0 45px #00ffff',
          },
          '50%': {
            textShadow:
              '0 0 25px #00ffff, 0 0 50px #00ffff, 0 0 70px #00ffff',
          },
        },
      },
    },
  },
  plugins: [], // No additional plugins required
};
