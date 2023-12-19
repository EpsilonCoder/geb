import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }
  chart!: Chart;
  chart1!: Chart;
  chart2!: Chart;
  chart3!: Chart;
  chart4!: Chart;

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Répartition des dossiers ouverts par propriété',
        style: {
          fontSize: '10px',
          fontWeight:'bold' // Vous pouvez ajuster la taille de la police ici
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          type: 'pie', // Spécifiez explicitement le type de série
          name: 'Dossiers ouverts',
          data: [
            {
              name: 'Propriété 1',
              y: 5,
              color: 'green',
            },
            {
              name: 'Propriété 3',
              y: 15,
              color: 'red',
            },
            {
              name: 'Propriété 4',
              y: 7,
              color: 'orange',
            },
          ],
        },
      ]  // Spécifiez le type de série ici
    });



    this.chart1 = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Nombre de dossiers ouverts par propriété en 2023',
        style: {
          fontSize: '10px',
          fontWeight:'bold' // Vous pouvez ajuster la taille de la police ici
        }
      },
      xAxis: {
        categories: ['Vide', 'Francois AGOUA', 'BLAISE FONTADJI', 'ARISTIDE ADJINACOU'],
        labels: {
          style: {
            fontSize: '6px',
            fontWeight:'bold' // Vous pouvez ajuster la taille de police selon vos préférences
          }
        }
      },
      yAxis: {
        title: {
          text: 'Nombre de dossiers ouverts',
        },
      },
      series: [
        {
          name: '2023',
          data: [
            { y: 0, color: 'blue' },
            { y: 2, color: 'blue' },
            { y: 3, color: 'blue' },
            { y: 4, color: 'blue' },
          ],
        } as Highcharts.SeriesColumnOptions, // Utilisez le type SeriesColumnOptions pour la série
      ],
    });

    this.chart3 = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Nombre de courriers reçus en 2023 par personne assignée',
        style: {
          fontSize: '10px',
          fontWeight:'bold' // Vous pouvez ajuster la taille de la police ici
        }
      },
      xAxis: {
        title: {
          text: 'Personnes assignées',

        },
        categories: ['Francois AGOUA', 'BLAISE FONTADJI', 'ARISTIDE ADJINACOU'],
        labels: {
          style: {
            fontSize: '6px',
            fontWeight:'bold' // Vous pouvez ajuster la taille de police selon vos préférences
          }
        }

      },
      yAxis: {
        title: {
          text: 'Nombre de courriers reçus',
          style: {
            fontSize: '10px',
            fontWeight:'bold' // Vous pouvez ajuster la taille de la police ici
          }
        },
      },
      plotOptions: {
        series: {
          stacking: 'normal',
        },
      },
      series: [
        {
          name: 'Terminé',
          data: [50, 20, 0], // Adjust the data as needed
          color: 'green',
        } as Highcharts.SeriesBarOptions,
        {
          name: 'En cours',
          data: [7, 15, 0], // Adjust the data as needed
          color: 'blue',
        } as Highcharts.SeriesBarOptions,
        {
          name: '40',
          data: [0, 0, 14], // Adjust the data as needed
          color: 'blue',
        } as Highcharts.SeriesBarOptions,
      ],
    });


    const personsAssigned = [
      'John Doe',
      'Jane Smith',
      'Michael Johnson',
      'Emily Davis',
      'David Brown',
      'Emma Wilson',
      'Daniel Miller',
      'Olivia Taylor',
      'Matthew Garcia',
    ];

    this.chart2 = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text: 'Nombre de dossiers ouverts par propriété en 2023',
        style: {
          fontSize: '10px',
          fontWeight:'bold' // Vous pouvez ajuster la taille de la police ici
        }
      },
      xAxis: {
        categories: personsAssigned,
      },
      yAxis: {
        title: {
          text: 'Nombre de dossiers ouverts',
        },
      },
      series: [
        {
          name: '2023',
          data: [
            { y: 0, color: 'green' },
            { y: 2, color: 'green' },
            { y: 3, color: 'green' },
            { y: 4, color: 'green' },
            { y: 5, color: 'green' },
            { y: 6, color: 'green' },
            { y: 7, color: 'green' },
            { y: 8, color: 'green' },
            { y: 9, color: 'green' },
          ],
        } as Highcharts.SeriesColumnOptions, // Utilisez le type SeriesColumnOptions pour la série
      ],
    });


    this.chart4 = new Chart({
      title: {
        text: 'Tendance des courriers',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        title: {
          text: 'Nombre de courriers',
        },
      },
      series: [
        {
          name: 'Priorité élevée',
          data: [
            [0, 10, 15, 5, 20],   // [open, high, low, close, volume]
            [1, 15, 20, 8, 25],
            [2, 20, 25, 10, 18],
            [3, 18, 30, 12, 25],
            [4, 25, 28, 15, 30],
            [5, 30, 22, 18, 28],
            [6, 28, 20, 20, 22],
            [7, 22, 22, 22, 18],
            [8, 18, 25, 25, 15],
            [9, 15, 28, 28, 12],
            [10, 12, 30, 30, 10],
            [11, 10, 28, 28, 10],
          ],
          type: 'candlestick',
        },
        {
          name: 'Retard',
          data: [5, 8, 10, 12, 15, 18, 20, 22, 25, 28, 30, 28],
          type: 'line',
        },
        {
          name: 'Flux d\'arrivée',
          data: [15, 20, 25, 30, 28, 22, 18, 15, 12, 10, 8, 5],
          type: 'line',
        },
      ],
    });



  }

}
