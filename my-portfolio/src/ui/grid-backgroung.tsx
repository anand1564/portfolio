interface GridBackgroundProps {
    gridSize?: number;
    gridColor?: string;
  }
  
  export default function GridBackground({ gridSize = 20, gridColor = 'rgba(255, 255, 255, 0.1)' }: GridBackgroundProps = {}) {
    return (
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(to right, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundColor: 'black',
        }}
      />
    )
  }