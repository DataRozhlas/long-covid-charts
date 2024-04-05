import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';

import {
    HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, BarSeries, ErrorBarSeries, Tooltip
} from 'react-jsx-highcharts';

addHighchartsMore(Highcharts);

const plotOptions = {

};

export default function Chart1() {
    return (
        <div>
            <h1 className="text-xl font-bold">Long Covid: Příznaky po sedmi měsících</h1>
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={plotOptions}>
                    <Chart marginRight={25} />


                    <Tooltip valueSuffix=' %' />

                    <XAxis categories={[
                        "dušnost",
                        "mozková mlha",
                        "pohybové symptomy",
                        "únava",
                        "tlak na hrudi",
                        "nevolnost po námaze",
                        "tachykardie",
                        "bolesti hlavy",
                        "bolesti kloubů",
                        "problémy s pamětí",
                        "problémy s řečí"
                    ]}>

                    </XAxis>

                    <YAxis labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }}>
                        <YAxis.Title align='high'>Prevalence</YAxis.Title>
                        <BarSeries pointPadding={0.1} groupPadding={0} color={"#B22222"} dataLabels={{ enabled: true, x: -65, format: "{y} %", color: "#FFFFFF", style: { textOutline: "none" } }} name="prevalence" data={[
                            93,
                            85.1,
                            80.5,
                            77.7,
                            74.8,
                            72.2,
                            61.4,
                            53.6,
                            52.2,
                            51,
                            48.6
                        ]} />
                        <ErrorBarSeries name="95% interval spolehlivosti" data={[
                            [
                                92.2,
                                93.8
                            ],
                            [
                                83.9,
                                86.2
                            ],
                            [
                                79.3,
                                81.8
                            ],
                            [
                                74.9,
                                80.3
                            ],
                            [
                                73.4,
                                76.1
                            ],
                            [
                                69.3,
                                75
                            ],
                            [
                                59.8,
                                62.9
                            ],
                            [
                                51.5,
                                55.5
                            ],
                            [
                                50.5,
                                53.8
                            ],
                            [
                                49.1,
                                53
                            ],
                            [
                                47,
                                50.2
                            ]
                        ]} />
                    </YAxis>
                </HighchartsChart>
            </HighchartsProvider>
        </div>
    )
}