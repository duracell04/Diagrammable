interface SystemNode {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type?: 'primary' | 'secondary' | 'tertiary';
}

interface SystemConnection {
  from: { x: number; y: number };
  to: { x: number; y: number };
  bidirectional?: boolean;
  dashed?: boolean;
}

interface SystemDiagramProps {
  nodes: SystemNode[];
  connections: SystemConnection[];
  width?: number;
  height?: number;
}

const SystemDiagram = ({ nodes, connections, width = 320, height = 160 }: SystemDiagramProps) => {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <defs>
        <marker id="sys-arrow" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
        </marker>
        <marker id="sys-arrow-back" markerWidth="6" markerHeight="6" refX="1" refY="2" orient="auto">
          <polygon points="6 0, 0 2, 6 4" fill="hsl(var(--primary))" />
        </marker>
        <filter id="sys-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
        <linearGradient id="sys-primaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary-light))" />
        </linearGradient>
        <linearGradient id="sys-secondaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--secondary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary-light))" />
        </linearGradient>
        <linearGradient id="sys-tertiaryGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--muted))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
      </defs>

      {/* Connections */}
      {connections.map((conn, idx) => (
        <line
          key={`conn-${idx}`}
          x1={conn.from.x}
          y1={conn.from.y}
          x2={conn.to.x}
          y2={conn.to.y}
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeDasharray={conn.dashed ? "4,3" : undefined}
          markerEnd="url(#sys-arrow)"
          markerStart={conn.bidirectional ? "url(#sys-arrow-back)" : undefined}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, idx) => {
        const gradientId = 
          node.type === 'secondary' ? 'sys-secondaryGradient' :
          node.type === 'tertiary' ? 'sys-tertiaryGradient' :
          'sys-primaryGradient';
        
        const borderColor = 
          node.type === 'secondary' ? 'hsl(var(--secondary))' :
          node.type === 'tertiary' ? 'hsl(var(--muted-foreground))' :
          'hsl(var(--primary))';

        return (
          <g key={idx} filter="url(#sys-shadow)">
            <rect
              x={node.x}
              y={node.y}
              width={node.width}
              height={node.height}
              fill={`url(#${gradientId})`}
              stroke={borderColor}
              strokeWidth="2.5"
              rx="12"
            />
            <text
              x={node.x + node.width / 2}
              y={node.y + node.height / 2 + 4}
              fontSize="13"
              fontWeight="700"
              fill="white"
              textAnchor="middle"
            >
              {node.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default SystemDiagram;
