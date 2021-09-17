export const DashboardCardsData = {
    productionKPIs: [
        {
            type: 'warning',
            title: 'Submissions',
            middleText: "860",
            bottomText: "959",
            bottomPercentage: "- 10.32"
        },
        {
            type: 'success',
            title: 'Submissions-to-bind ratio',
            middleText: "52.33 %",
            bottomText: "49.43 %",
            bottomPercentage: "+ 2.90"
        },
        {
            type: 'warning',
            title: 'Premium, bound policies',
            middleText: "$919,140",
            bottomText: "1.04M",
            bottomPercentage: "- 11.36"
        },
        {
            type: 'warning',
            title: 'Avg premium, bound policies',
            middleText: "$2.04K",
            bottomText: "2.19K",
            bottomPercentage: "- 6.63"
        },
    ],
    claimsKPIs: [
        {
            type: 'success',
            title: 'Claims ratio',
            titleDescription: 'Rolling 28 days',
            middleText: "0.89 %",
            bottomText: "2.74 %",
            bottomPercentage: "- 1.85"
        },
        {
            type: 'success',
            title: 'Payout % (claims paid to bind)',
            titleDescription: 'Rolling 28 days',
            middleText: "0.00 %",
            bottomText: "0.63 %",
            bottomPercentage: "+ 100"
        },
    ]
}


export const lineChartData = [
  {
    name: "June 6",
    spend: 900,
    percentage: 44,
  },
  {
    name: "June 9",
    spend: 1500,
    percentage: 60,
  },
  {
    name: "June 10",
    spend: 1100,
    percentage: 80,
  },
  {
    name: "June 15",
    spend: 1300,
    percentage: 50,
  },
  {
    name: "June 19",
    spend: 1000,
    percentage: 48,
  },
  {
    name: "June 20",
    spend: 950,
    percentage: 60,
  },
  {
    name: "June 21",
    spend: 1200,
    percentage: 70,
  },
];


export const productionReportRawMetrics = [
  {
    source: 'broker',
    funnel: 'submission',
    spend: 1937
  },
  {
    source: 'broker',
    funnel: 'quote',
    spend: 1721
  },
  {
    source: 'broker',
    funnel: 'bind',
    spend: 1004
  },
  {
    source: 'direct',
    funnel: 'submission',
    spend: 1009
  },
  {
    source: 'direct',
    funnel: 'quote',
    spend: 902
  },
  {
    source: 'direct',
    funnel: 'bind',
    spend: 484
  },
]