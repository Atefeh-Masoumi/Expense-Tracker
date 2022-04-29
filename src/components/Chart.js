import { VictoryPie } from "victory";
const Chart = ({transaction,income,expense}) => {
    if (!transaction.length) return <></>;

  const data = [
    { x: "Income", y: income },
    { x: "Expense", y: expense },
  ];
    return (  
        <div> 
            <VictoryPie
            responsive={true}
            innerRadius={25}
            style={{
              labels: { fontSize: 12 },
            }}
            width={600}
            height={200}
            data={data}
            colorScale={["	#C9E4C5", "#F7DAD9"]}
            animate={{
              duration: 2000,
            }}
            />

        </div>
    );
}
 
export default Chart;