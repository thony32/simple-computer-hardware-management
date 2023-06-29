import { BarChart, Card, Subtitle, Title } from "@tremor/react";

const chartdata2 = [
    {
        topic: "Topic 1",
        "Group A": 890,
        "Group B": 338,
        "Group C": 500,
        "Group D": 396,
        "Group E": 138,
        "Group F": 436,
    },
    {
        topic: "Topic 2",
        "Group A": 289,
        "Group B": 233,
        "Group C": 253,
        "Group D": 333,
        "Group E": 133,
        "Group F": 533,
    },
];

const dataFormatter = (number: number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default function Dashboard() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl lg:text-4xl text-center font-bold">DASHBOARD</h1>
            <Card>
                <Title>Writing Contest: Entries</Title>
                <BarChart
                    className="mt-6"
                    data={chartdata2}
                    index="name"
                    categories={[
                        "Group A",
                        "Group B",
                        "Group C",
                        "Group D",
                        "Group E",
                        "Group F",
                    ]}
                    colors={[
                        "blue",
                        "teal",
                        "amber",
                        "rose",
                        "indigo",
                        "emerald",
                    ]}
                    valueFormatter={dataFormatter}
                    yAxisWidth={48}
                />
            </Card>
        </div>
    );
}
