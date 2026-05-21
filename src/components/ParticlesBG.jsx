import Particles from "react-tsparticles";

function ParticlesBG() {
  return (
    <Particles
      className="fixed inset-0 -z-10"
      options={{
        particles: {
          number: {
            value: 35,
          },
          size: {
            value: 2,
          },
          move: {
            enable: true,
            speed: 0.6,
          },
          opacity: {
            value: 0.2,
          },
        },
      }}
    />
  );
}

export default ParticlesBG;