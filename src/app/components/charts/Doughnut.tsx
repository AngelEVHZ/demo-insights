"use client";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut as DoughnutChart } from 'react-chartjs-2';
import { Grid, Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Doughnut() {
    const colors = [
        {
            backgroundColor: [
                'rgba(34, 124, 242, 1)',
                'rgba(54, 67, 78)',

            ],
            data: [80, 20],
        },
        {
            backgroundColor: [
                'rgba(141, 185, 242)',
                'rgba(54, 67, 78)',

            ],
            data: [78.5, 21.5],
        },
        {
            backgroundColor: [
                'rgba(141, 185, 242)',
                'rgba(54, 67, 78)',

            ],
            data: [58.8, 49.2],
        },
        {
            backgroundColor: [
                'rgba(34, 124, 242, 1)',
                'rgba(54, 67, 78)',

            ],
            data: [50, 20],
        },
        {
            backgroundColor: [
                'rgba(34, 124, 242, 1)',
                'rgba(54, 67, 78)',

            ],
            data: [48, 20],
        },
    ];

    const getData = (_colors: any) => {
        return {

            datasets: [
                {
                    label: '',
                    data: _colors.data,
                    backgroundColor: _colors.backgroundColor,
                    borderColor: [
                        'rgba(255, 255, 255)',
                        'rgba(255, 255, 255)',
                    ],
                    borderWidth: 3,
                },
            ],
        };
    }

    const options = {
        rotation: -90,
        circumference: 180,
    };



    return (
        <Grid container spacing={2} >
            <Grid item xs={2} >
                <DoughnutChart data={getData(colors[0])} options={options} />
            </ Grid>
            <Grid item xs={2}>
                <DoughnutChart data={getData(colors[1])} options={options} />
            </ Grid>
            <Grid item xs={2}>
                <DoughnutChart data={getData(colors[2])} options={options} />
            </ Grid>
            <Grid item xs={2} >
                <DoughnutChart data={getData(colors[3])} options={options} />
            </ Grid>
            <Grid item xs={2}>
                <DoughnutChart data={getData(colors[4])} options={options} />
            </ Grid>

        </ Grid>
    )
}
