import React from 'react'
import {View,Text,Dimensions} from 'react-native'
import {
        LineChart,
        BarChart,
        PieChart,
        ProgressChart,
        ContributionGraph,
        StackedBarChart
    } from "react-native-chart-kit";

const color={
    water:{
        gradientFrom: "#045de9",
        gradientTo: "#09c6f9",
        stroke: "black",
    },
    sun:{
        gradientFrom: "#f53803",
        gradientTo: "#f5d020",
        stroke: "grey",
    }
}
class Chart extends React.Component{
    constructor(props){
        super(props)
        this.gradientFrom="#fb8c00"
        this.gradientTo= "#ffa726"
        this.stroke="#ffa726"
        switch(this.props.type){
            case "water":
                this.gradientFrom=color.water.gradientFrom
                this.gradientTo=color.water.gradientTo
                this.stroke=color.water.stroke
                break
            case "sun":
                this.gradientFrom=color.sun.gradientFrom
                this.gradientTo=color.sun.gradientTo
                this.stroke=color.sun.stroke
                break
            default :
                this.gradientFrom="#fb8c00"
                this.gradientTo= "#ffa726"
                this.stroke="#ffa726"
        }
          
    }
    render(){
        return(
                <View>
                    {/* {this.props.title ? null : <Text>'Bezier Line Chart</Text>} */}
                    <LineChart
                        data={this.props.data ? 
                                this.props.data 
                                :
                                {
                                    labels: ["January", "February", "March", "April", "May", "June"],
                                    datasets: [
                                        {
                                            data: [
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100
                                            ]
                                        }
                                    ]
                                }
                            }
                        onDataPointClick={(data)=>console.log(data)}
                        width={Dimensions.get('window').width*0.88} // from react-native
                        height={240}
                        fromZero
                        // yAxisLabel="$"
                        // yAxisSuffix="k"
                        verticalLabelRotation={340} //Degree to rotate
                        yAxisInterval={20} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: this.gradientFrom,
                            backgroundGradientTo: this.gradientTo,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "4",
                                strokeWidth: "2",
                                stroke: this.stroke, //"#ffa726",
                            
                            }
                            
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                            alignSelf: 'center',
                        }}
                    />
            </View>
        )
    }
}

export default Chart