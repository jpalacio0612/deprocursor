"use client";
import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function MyPieChart({
  chartData,
  chartConfig,
}: // chartConfig,
{
  chartData: any;
  chartConfig: any;
  // chartConfig: any;
}) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-full  [&_.recharts-text]:fill-background"
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="participants" hideLabel />}
        />
        <Pie data={chartData} dataKey="visitors">
          <LabelList
            dataKey="browser"
            className="fill-background"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) =>
              chartConfig[value]?.label
            }
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
