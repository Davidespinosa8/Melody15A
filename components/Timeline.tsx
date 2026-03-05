// src/components/Timeline.tsx
const events = [
  { time: "11:00 AM", event: "Misa", loc: "Iglesia San Pedro" },
  { time: "2:00 PM", event: "Recepción", loc: "Jardín Padilla" },
];

export default function Timeline() {
  return (
    <div className="relative border-l-2 border-accent ml-6 space-y-8">
      {events.map((item, idx) => (
        <div key={idx} className="relative pl-6">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-2 border-accent" />
          <h4 className="font-bold text-lg">{item.time} - {item.event}</h4>
          <p className="text-sm opacity-80">{item.loc}</p>
        </div>
      ))}
    </div>
  );
}