import { Badge } from "@/components/ui/badge";
import DatabaseERD from "./diagrams/DatabaseERD";
import SystemDiagram from "./diagrams/SystemDiagram";

const templates = [
  {
    id: 1,
    category: "Databases",
    difficulty: "Intermediate",
    title: "Normalize Customer/Orders Schema",
    diagram: (
      <DatabaseERD
        tables={[
          {
            name: "Customers",
            x: 15,
            y: 15,
            width: 110,
            height: 75,
            fields: [
              { text: "🔑 customer_id", isPrimary: true },
              { text: "   name" },
              { text: "   email" }
            ]
          },
          {
            name: "Orders",
            x: 195,
            y: 15,
            width: 110,
            height: 75,
            fields: [
              { text: "🔑 order_id", isPrimary: true },
              { text: "🔗 customer_id", isForeign: true },
              { text: "   total" }
            ]
          }
        ]}
        relationships={[
          {
            from: { x: 138, y: 52 },
            to: { x: 182, y: 52 },
            fromCardinality: "1",
            toCardinality: "N"
          }
        ]}
      />
    )
  },
  {
    id: 2,
    category: "Systems",
    difficulty: "Advanced",
    title: "Add Caching Layer",
    diagram: (
      <SystemDiagram
        nodes={[
          { name: "Client", x: 20, y: 50, width: 80, height: 60, type: "primary" },
          { name: "Cache", x: 120, y: 50, width: 80, height: 60, type: "secondary" },
          { name: "DB", x: 220, y: 50, width: 80, height: 60, type: "tertiary" }
        ]}
        connections={[
          { from: { x: 100, y: 80 }, to: { x: 120, y: 80 }, bidirectional: true },
          { from: { x: 200, y: 80 }, to: { x: 220, y: 80 }, bidirectional: true }
        ]}
      />
    )
  },
  {
    id: 3,
    category: "Databases",
    difficulty: "Beginner",
    title: "Design E-commerce DB",
    diagram: (
      <DatabaseERD
        width={320}
        height={180}
        tables={[
          {
            name: "Products",
            x: 15,
            y: 15,
            width: 90,
            height: 61,
            fields: [
              { text: "🔑 product_id", isPrimary: true },
              { text: "   name" },
              { text: "   price" }
            ]
          },
          {
            name: "Orders",
            x: 115,
            y: 15,
            width: 90,
            height: 61,
            fields: [
              { text: "🔑 order_id", isPrimary: true },
              { text: "🔗 user_id", isForeign: true }
            ]
          },
          {
            name: "Users",
            x: 215,
            y: 15,
            width: 90,
            height: 61,
            fields: [
              { text: "🔑 user_id", isPrimary: true },
              { text: "   email" }
            ]
          }
        ]}
        relationships={[
          { from: { x: 205, y: 45 }, to: { x: 215, y: 45 } }
        ]}
        junctionTable={{
          name: "Order_Items",
          x: 40,
          y: 95,
          width: 110,
          height: 38,
          fields: [
            { text: "🔗 order_id, product_id", isForeign: true }
          ]
        }}
      />
    )
  },
  {
    id: 4,
    category: "Systems",
    difficulty: "Advanced",
    title: "Microservices Architecture",
    diagram: (
      <SystemDiagram
        width={320}
        height={140}
        nodes={[
          { name: "Gateway", x: 120, y: 10, width: 80, height: 45, type: "primary" },
          { name: "Auth", x: 20, y: 75, width: 65, height: 45, type: "secondary" },
          { name: "Orders", x: 100, y: 75, width: 65, height: 45, type: "secondary" },
          { name: "Payment", x: 180, y: 75, width: 65, height: 45, type: "secondary" }
        ]}
        connections={[
          { from: { x: 140, y: 55 }, to: { x: 52, y: 75 } },
          { from: { x: 160, y: 55 }, to: { x: 132, y: 75 } },
          { from: { x: 180, y: 55 }, to: { x: 212, y: 75 } }
        ]}
      />
    )
  },
  {
    id: 5,
    category: "Systems",
    difficulty: "Intermediate",
    title: "User Authentication Flow",
    diagram: (
      <SystemDiagram
        nodes={[
          { name: "User", x: 20, y: 50, width: 70, height: 60, type: "primary" },
          { name: "Login", x: 110, y: 50, width: 70, height: 60, type: "secondary" },
          { name: "Verify", x: 200, y: 50, width: 70, height: 60, type: "secondary" },
          { name: "DB", x: 290, y: 50, width: 70, height: 60, type: "tertiary" }
        ]}
        connections={[
          { from: { x: 90, y: 80 }, to: { x: 110, y: 80 } },
          { from: { x: 180, y: 80 }, to: { x: 200, y: 80 } },
          { from: { x: 270, y: 80 }, to: { x: 290, y: 80 } }
        ]}
        width={380}
      />
    )
  },
  {
    id: 6,
    category: "Databases",
    difficulty: "Beginner",
    title: "Library Management DB",
    diagram: (
      <DatabaseERD
        width={320}
        height={180}
        tables={[
          {
            name: "Books",
            x: 15,
            y: 15,
            width: 90,
            height: 61,
            fields: [
              { text: "🔑 book_id", isPrimary: true },
              { text: "   title" },
              { text: "   author" }
            ]
          },
          {
            name: "Members",
            x: 215,
            y: 15,
            width: 90,
            height: 61,
            fields: [
              { text: "🔑 member_id", isPrimary: true },
              { text: "   name" }
            ]
          }
        ]}
        junctionTable={{
          name: "Loans",
          x: 105,
          y: 95,
          width: 110,
          height: 50,
          fields: [
            { text: "🔑 loan_id", isForeign: true },
            { text: "🔗 book_id, member_id", isForeign: true }
          ]
        }}
      />
    )
  }
];

const TemplateLibrary = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pre-Built Assignment Templates</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start with ready-made templates for common CS curriculum topics. Each template includes
            interactive diagrams students can edit directly in their browser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="text-xs">
                  {template.category}
                </Badge>
                <Badge
                  variant={
                    template.difficulty === "Beginner"
                      ? "secondary"
                      : template.difficulty === "Intermediate"
                      ? "default"
                      : "destructive"
                  }
                  className="text-xs"
                >
                  {template.difficulty}
                </Badge>
              </div>

              <h3 className="font-semibold mb-4 text-sm">{template.title}</h3>

              <div className="bg-gradient-to-br from-background to-muted rounded-lg p-4 border border-border">
                {template.diagram}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplateLibrary;
