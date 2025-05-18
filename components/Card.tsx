import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Item } from "@/lib/data";
import { MyPieChart } from "./ui/pieChart";

function getResultColor(strengthened: number, participants: number) {
  const result = (strengthened / participants) * 100;
  if (result >= 70) {
    return {
      bg: "bg-green-50",
      border: "border-green-200",
      textColor: "text-green-700",
    };
  } else if (result >= 50) {
    return {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      textColor: "text-yellow-700",
    };
  } else {
    return {
      bg: "bg-red-50",
      border: "border-red-200",
      textColor: "text-red-700",
    };
  }
}

export const Card = ({
  title,
  description,
  text,
  indicator,
  participants,
  strengthened,
  notStrengthened,
}: Item) => {
  const { bg, border, textColor } = getResultColor(strengthened, participants);

  return (
    <Dialog>
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="bg-gray-200 flex items-center justify-center h-48">
          <MyPieChart
            chartData={[
              {
                browser: "strengthened",
                visitors: strengthened,
                fill: "#22c55e",
              },
              {
                browser: "notStrengthened",
                visitors: notStrengthened,
                fill: "#f97316",
              },
            ]}
            chartConfig={{
              participants: {
                label: "Participantes: ",
              },
              notStrengthened: {
                label: `No ${((notStrengthened / participants) * 100).toFixed(
                  2
                )}%`,
                color: "hsl(142, 76%, 36%)",
              },
              strengthened: {
                label: `Si ${((strengthened / participants) * 100).toFixed(
                  2
                )}%`,
                color: "hsl(24, 94%, 50%)",
              },
            }}
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <DialogTrigger asChild>
              <Button className="bg-emerald-700">Ver Más</Button>
            </DialogTrigger>
          </div>

          <p className="text-gray-600 text-base leading-relaxed">
            {description}
          </p>

          <div className="text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-lg border border-gray-200">
            <strong>Indicador de logro:</strong> {indicator}
          </div>

          <div
            className={`flex items-center justify-between ${bg} border ${border} px-4 py-3 rounded-lg`}
          >
            <div>
              <div className="text-xs text-gray-500">Fórmula</div>
              <div className="text-sm font-medium">{`${strengthened} / ${participants} × 100`}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Resultado</div>
              <div className={`text-xl font-bold ${textColor}`}>
                {`${((strengthened / participants) * 100).toFixed(2)}%`}
              </div>
            </div>
          </div>
        </div>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{text}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </div>
    </Dialog>
  );
};
