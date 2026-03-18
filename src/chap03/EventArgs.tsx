import { ConsoleViewer } from "@/components/ConsoleViewer";
import { Button } from "@/components/ui/Button";

export function EventArgs() {
  interface DateTimeType {
    type: "date" | "time" | "daterime";
  }

  const current = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: DateTimeType["type"],
  ): void => {
    const d = new Date();
    switch (type) {
      case "date":
        console.log(`${e.currentTarget.id}: ${d.toLocaleDateString()}`);
        break;
      case "time":
        console.log(`${e.currentTarget.id}: ${d.toLocaleTimeString()}`);
        break;
      default:
        console.log(`${e.currentTarget.id}: ${d.toLocaleString()}`);
        break;
    }
  };

  return (
    <section className="space-y-4 bg-white p-8">
      <div className="flex gap-4">
        <Button
          id="dt"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            current(e, "daterime")
          }
        >
          現在日時
        </Button>
        <Button
          id="date"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            current(e, "date")
          }
        >
          現在日付
        </Button>
        <Button
          id="time"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            current(e, "time")
          }
        >
          現在時刻
        </Button>
      </div>

      <ConsoleViewer className="rounded-sm border border-slate-300 p-2" />
    </section>
  );
}
