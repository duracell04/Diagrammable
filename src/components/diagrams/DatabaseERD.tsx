interface Table {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fields: Array<{ text: string; isPrimary?: boolean; isForeign?: boolean }>;
}

interface Relationship {
  from: { x: number; y: number };
  to: { x: number; y: number };
  fromCardinality?: string;
  toCardinality?: string;
}

interface DatabaseERDProps {
  tables: Table[];
  relationships?: Relationship[];
  junctionTable?: {
    name: string;
    x: number;
    y: number;
    width: number;
    height: number;
    fields: Array<{ text: string; isForeign?: boolean }>;
  };
  width?: number;
  height?: number;
}

const DatabaseERD = ({ tables, relationships = [], junctionTable, width = 320, height = 160 }: DatabaseERDProps) => {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <defs>
        <marker id="db-arrow" markerWidth="6" markerHeight="6" refX="5" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="hsl(var(--primary))" />
        </marker>
        <filter id="db-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
        </filter>
        <linearGradient id="db-tableGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary-light))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
        <linearGradient id="db-linkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--secondary-light))" />
          <stop offset="100%" stopColor="hsl(var(--background))" />
        </linearGradient>
      </defs>

      {/* Tables */}
      {tables.map((table, idx) => {
        const headerHeight = 28;
        const rowHeight = 14;
        return (
          <g key={idx} filter="url(#db-shadow)">
            <rect 
              x={table.x} 
              y={table.y} 
              width={table.width} 
              height={table.height} 
              fill="url(#db-tableGradient)" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2.5" 
              rx="8" 
            />
            <rect 
              x={table.x} 
              y={table.y} 
              width={table.width} 
              height={headerHeight} 
              fill="hsl(var(--primary))" 
              rx="8" 
            />
            <text 
              x={table.x + table.width / 2} 
              y={table.y + headerHeight - 9} 
              fontSize="13" 
              fontWeight="700" 
              fill="white" 
              textAnchor="middle"
            >
              {table.name}
            </text>
            {table.fields.map((field, fieldIdx) => (
              <text
                key={fieldIdx}
                x={table.x + 8}
                y={table.y + headerHeight + 15 + fieldIdx * rowHeight}
                fontSize="10"
                fill={field.isPrimary || field.isForeign ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
                fontWeight={field.isPrimary || field.isForeign ? "500" : "normal"}
              >
                {field.text}
              </text>
            ))}
          </g>
        );
      })}

      {/* Relationships */}
      {relationships.map((rel, idx) => (
        <g key={`rel-${idx}`}>
          {rel.fromCardinality && (
            <>
              <circle 
                cx={rel.from.x} 
                cy={rel.from.y} 
                r="8" 
                fill="hsl(var(--background))" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2" 
              />
              <text 
                x={rel.from.x} 
                y={rel.from.y + 4} 
                fontSize="10" 
                fontWeight="700" 
                fill="hsl(var(--primary))" 
                textAnchor="middle"
              >
                {rel.fromCardinality}
              </text>
            </>
          )}
          
          {rel.toCardinality && (
            <>
              <circle 
                cx={rel.to.x} 
                cy={rel.to.y} 
                r="8" 
                fill="hsl(var(--background))" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2" 
              />
              <text 
                x={rel.to.x} 
                y={rel.to.y + 4} 
                fontSize="10" 
                fontWeight="700" 
                fill="hsl(var(--primary))" 
                textAnchor="middle"
              >
                {rel.toCardinality}
              </text>
            </>
          )}
          
          <line 
            x1={rel.fromCardinality ? rel.from.x + 10 : rel.from.x} 
            y1={rel.from.y} 
            x2={rel.toCardinality ? rel.to.x - 14 : rel.to.x} 
            y2={rel.to.y} 
            stroke="hsl(var(--primary))" 
            strokeWidth="2.5" 
            markerEnd="url(#db-arrow)" 
          />
        </g>
      ))}

      {/* Junction Table */}
      {junctionTable && (
        <g filter="url(#db-shadow)">
          <rect 
            x={junctionTable.x} 
            y={junctionTable.y} 
            width={junctionTable.width} 
            height={junctionTable.height} 
            fill="url(#db-linkGradient)" 
            stroke="hsl(var(--secondary))" 
            strokeWidth="2.5" 
            rx="8" 
          />
          <rect 
            x={junctionTable.x} 
            y={junctionTable.y} 
            width={junctionTable.width} 
            height="20" 
            fill="hsl(var(--secondary))" 
            rx="8" 
          />
          <text 
            x={junctionTable.x + junctionTable.width / 2} 
            y={junctionTable.y + 14} 
            fontSize="12" 
            fontWeight="700" 
            fill="white" 
            textAnchor="middle"
          >
            {junctionTable.name}
          </text>
          {junctionTable.fields.map((field, fieldIdx) => (
            <text
              key={fieldIdx}
              x={junctionTable.x + 8}
              y={junctionTable.y + 34 + fieldIdx * 12}
              fontSize="9"
              fill="hsl(var(--muted-foreground))"
            >
              {field.text}
            </text>
          ))}
        </g>
      )}
    </svg>
  );
};

export default DatabaseERD;
