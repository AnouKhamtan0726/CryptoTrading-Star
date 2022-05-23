import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";

class AreaChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Buy",
                    data: generateDayWiseTimeSeries(0, 30),
                },
            ],
            options: {
                chart: {
                    type: "area",
                    height: 300,
                    foreColor: "#8C87C2",
                    fontFamily: "Rubik, sans-serif",
                    stacked: true,
                    dropShadow: {
                        enabled: true,
                        enabledSeries: [0],
                        top: -2,
                        left: 2,
                        blur: 5,
                        opacity: 0.06,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                colors: ["#7B6FFF", "#1652F0"],
                stroke: {
                    curve: "smooth",
                    width: 3,
                },
                dataLabels: {
                    enabled: false,
                },

                markers: {
                    size: 0,
                    strokeColor: "#fff",
                    strokeWidth: 3,
                    strokeOpacity: 1,
                    fillOpacity: 1,
                    hover: {
                        size: 6,
                    },
                },
                xaxis: {
                    type: "datetime",
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                yaxis: {
                    labels: {
                        offsetX: -10,
                        offsetY: 0,
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                grid: {
                    show: false,
                    padding: {
                        left: -5,
                        right: 5,
                    },
                },
                tooltip: {
                    x: {
                        format: "dd MMM yyyy",
                    },
                },
                legend: {
                    position: "top",
                    horizontalAlign: "left",
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 100, 100],
                    },
                },
            },

            selection: "one_year",
        };
    }

    updateData(timeline) {
        this.setState({
            selection: timeline,
        });

        switch (timeline) {
            case "one_month":
                this.setState({
                    options: {
                        xaxis: {
                            min: new Date("28 Jan 2013").getTime(),
                            max: new Date("27 Feb 2013").getTime(),
                        },
                    },
                });
                break;
            case "six_months":
                this.setState({
                    options: {
                        xaxis: {
                            min: new Date("27 Sep 2012").getTime(),
                            max: new Date("27 Feb 2013").getTime(),
                        },
                    },
                });
                break;
            case "one_year":
                this.setState({
                    options: {
                        xaxis: {
                            min: new Date("27 Feb 2012").getTime(),
                            max: new Date("27 Feb 2013").getTime(),
                        },
                    },
                });
                break;
            case "ytd":
                this.setState({
                    options: {
                        xaxis: {
                            min: new Date("01 Jan 2013").getTime(),
                            max: new Date("27 Feb 2013").getTime(),
                        },
                    },
                });
                break;
            case "all":
                this.setState({
                    options: {
                        xaxis: {
                            min: undefined,
                            max: undefined,
                        },
                    },
                });
                break;
            default:
        }
    }

    render() {
        return (
            <>
                <div className="duration-option text-right">
                    <Link
                        id="one_month"
                        onClick={() => this.updateData("one_month")}
                        className={
                            this.state.selection === "one_month" ? "active" : ""
                        }
                    >
                        1M
                    </Link>
                    &nbsp;
                    <Link
                        id="six_months"
                        onClick={() => this.updateData("six_months")}
                        className={
                            this.state.selection === "six_months"
                                ? "active"
                                : ""
                        }
                    >
                        6M
                    </Link>
                    &nbsp;
                    <Link
                        id="one_year"
                        onClick={() => this.updateData("one_year")}
                        className={
                            this.state.selection === "one_year" ? "active" : ""
                        }
                    >
                        1Y
                    </Link>
                    &nbsp;
                    <Link
                        id="ytd"
                        onClick={() => this.updateData("ytd")}
                        className={
                            this.state.selection === "ytd" ? "active" : ""
                        }
                    >
                        YTD
                    </Link>
                    &nbsp;
                    <Link
                        id="all"
                        onClick={() => this.updateData("all")}
                        className={
                            this.state.selection === "all" ? "active" : ""
                        }
                    >
                        ALL
                    </Link>
                </div>

                <div id="chart-timeline">
                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="area"
                        height={350}
                    />
                </div>
            </>
        );
    }
}

export default AreaChart;

function generateDayWiseTimeSeries(s, count) {
    var values = [
        [
            274, 248, 273, 48, 285, 229, 69, 51, 16, 141, 388, 325, 333, 220,
            133, 376, 213, 97, 90, 155, 172, 205, 117, 16, 247, 85, 392, 66,
            278, 373, 224, 37, 139, 89, 280, 150, 134, 325, 195, 279, 242, 62,
            72, 239, 131, 376, 71, 231, 148, 264, 214, 300, 180, 126, 67, 150,
            114, 258, 379, 176, 310, 47, 371, 29, 311, 90, 170, 173, 237, 281,
            93, 33, 384, 189, 180, 179, 203, 220, 1, 299, 203, 393, 227, 381,
            225, 71, 219, 312, 342, 338, 247, 293, 374, 295, 390, 120, 137, 109,
            28, 45, 137, 218, 26, 24, 234, 192, 130, 102, 260, 112, 349, 84, 7,
            161, 331, 179, 190, 72, 41, 108, 329, 331, 157, 43, 260, 128, 264,
            229, 264, 181, 314, 397, 167, 137, 111, 386, 158, 242, 235, 126, 83,
            374, 149, 395, 124, 225, 246, 16, 326, 90, 66, 167, 144, 57, 293,
            137, 102, 260, 136, 129, 25, 249, 183, 263, 274, 357, 275, 335, 221,
            344, 226, 5, 251, 28, 214, 67, 189, 243, 251, 112, 326, 277, 53,
            262, 18, 353, 112, 96, 237, 320, 129, 309, 285, 306, 103, 214, 296,
            380, 177, 389, 195, 343, 232, 136, 348, 39, 341, 148, 171, 176, 325,
            380, 134, 389, 398, 288, 217, 257, 388, 17, 24, 364, 380, 169, 267,
            220, 180, 127, 249, 165, 243, 2, 95, 319, 355, 327, 35, 84, 225,
            260, 166, 270, 185, 148, 174, 276, 208, 175, 355, 40, 176, 348, 206,
            273, 286, 363, 196, 68, 37, 136, 40, 182, 150, 193, 203, 219, 265,
            328, 203, 361, 281, 188, 144, 351, 98, 31, 394, 340, 53, 367, 326,
            316, 114, 358, 374, 151, 367, 167, 82, 230, 14, 98, 223, 118, 89,
            279, 312, 61, 317, 38, 135, 75, 42, 338, 296, 256, 263, 381, 221,
            112, 175, 77, 151, 367, 108, 337, 297, 185, 309, 286, 133, 41, 269,
            358, 222, 351, 321, 302, 310, 89, 199, 309, 79, 26, 78, 290, 162,
            290, 145, 88, 32, 243, 27, 206, 11, 100, 189, 317, 1, 9, 96, 9, 195,
            390, 141, 20, 90, 64, 118, 262, 246, 42, 394, 93, 138, 283, 232,
            208, 249, 95,
        ],
        [
            133, 327, 59, 94, 62, 378, 229, 98, 103, 256, 257, 315, 118, 114,
            295, 118, 142, 301, 256, 101, 87, 289, 43, 287, 173, 350, 154, 199,
            224, 44, 155, 111, 97, 344, 334, 5, 96, 306, 60, 62, 39, 373, 27,
            196, 316, 362, 31, 339, 180, 97, 71, 235, 45, 93, 76, 261, 170, 151,
            140, 198, 197, 69, 2, 291, 272, 42, 229, 140, 179, 350, 129, 254,
            315, 315, 6, 341, 6, 344, 231, 13, 65, 300, 14, 331, 311, 110, 85,
            5, 191, 273, 146, 200, 171, 190, 125, 387, 4, 104, 167, 366, 4, 325,
            168, 118, 396, 24, 161, 385, 167, 345, 41, 2, 86, 82, 258, 397, 317,
            58, 159, 252, 254, 200, 114, 64, 376, 37, 90, 87, 98, 35, 304, 118,
            194, 199, 146, 100, 171, 302, 159, 361, 158, 331, 374, 268, 155,
            310, 72, 74, 28, 18, 120, 154, 93, 77, 362, 121, 241, 297, 267, 24,
            92, 61, 21, 123, 275, 79, 261, 201, 100, 146, 177, 50, 105, 80, 15,
            333, 234, 47, 306, 75, 95, 243, 283, 150, 13, 237, 82, 46, 69, 182,
            87, 109, 203, 264, 349, 323, 5, 350, 122, 75, 259, 355, 351, 175,
            44, 265, 27, 231, 272, 102, 111, 178, 318, 360, 190, 132, 51, 347,
            14, 130, 47, 41, 67, 308, 205, 366, 217, 94, 157, 218, 86, 358, 391,
            300, 184, 306, 222, 54, 361, 18, 236, 310, 167, 27, 150, 192, 386,
            298, 388, 282, 59, 220, 44, 276, 87, 160, 179, 85, 223, 260, 106,
            125, 326, 332, 149, 274, 73, 138, 85, 144, 205, 281, 253, 282, 6,
            47, 37, 244, 254, 59, 277, 257, 302, 236, 398, 72, 358, 224, 395,
            310, 43, 398, 201, 275, 284, 240, 117, 335, 340, 130, 61, 185, 43,
            101, 34, 351, 363, 85, 185, 256, 31, 369, 372, 328, 48, 121, 201,
            20, 173, 232, 218, 387, 86, 231, 35, 323, 283, 391, 331, 99, 203,
            204, 275, 397, 72, 151, 52, 385, 398, 256, 94, 92, 75, 75, 247, 56,
            340, 103, 379, 327, 297, 287, 103, 337, 181, 90, 160, 57, 70, 170,
            46, 175, 35, 301, 196, 340, 130, 172, 289, 221,
        ],
    ];
    var i = 0;
    var series = [];
    var x = new Date("19 Feb 2019 ").getTime();
    while (i < count) {
        series.push([x, values[s][i]]);
        x += 13273596;
        i++;
    }
    return series;
}
