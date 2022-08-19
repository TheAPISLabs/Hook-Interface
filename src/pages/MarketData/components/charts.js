// getGraphData('1d').then((res) => {
//   if (res.data.code === '200') {
//     const GAMEFI = res.data.data.GAMEFI.volume
//     const DEFI = res.data.data.GAMEFI.volume
//     const NFT = res.data.data.GAMEFI.volume
//     return [
//       {
//         name: 'DEFI',
//         data: DEFI,
//       },
//       {
//         name: 'GAMEFI',
//         data: GAMEFI,
//       },
//       {
//         name: 'NFT',
//         data: NFT,
//       },
//     ]
//   } else {
//     return []
//   }
// })

const times = localStorage.getItem('time')?.split('**')
// lo

export const lineChartDataTotalSpent = [
  {
    name: 'DEFI',
    data: [30, 40, 24, 46, 20, 4, 6],
  },
  {
    name: 'GAMEFI',
    data: [30, 40, 24, 44, 6, 20, 46],
  },
  {
    name: 'NFT',
    data: [10, 30, 10, 14, 6, 60, 36],
  },
]

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: '#4318FF',
    },
  },
  colors: ['#7551FF', '#39B8FF', '#FDB640'],
  markers: {
    size: 0,
    colors: 'white',
    strokeColors: '#7551FF',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    type: 'line',
  },
  xaxis: {
    type: 'numeric',
    categories: times,
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    colors: 'white',
    strokeColors: '#7551FF',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
  },
  legend: {
    show: true,
    labels: {
      colors: '#fff',
    },
  },
  grid: {
    show: false,
    column: {
      color: ['#7551FF', '#39B8FF'],
      opacity: 0.5,
    },
  },
  color: ['#7551FF', '#39B8FF'],
}
