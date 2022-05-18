import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Boars({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} heigth={60} />

    return (
        <Grid container spacing={4}>
            <Grid itemxs={12} md={3}>
                <Card value={getByDisplayValue(cases)} label="Total de Casos" color="#5d78ff" />
            </Grid>
            <Grid itemxs={12} md={3}>
                <Card value={getByDisplayValue(cases)} label="Óbitos hoje" color="#5d78ff" />
            </Grid>
            <Grid itemxs={12} md={3}>
                <Card value={getByDisplayValue(cases)} label="Casos hoje" color="#5d78ff" />
            </Grid>
            <Grid itemxs={12} md={3}>
                <Card value={getByDisplayValue(cases)} label="Total de Mortos" color="#5d78ff" />
            </Grid>
            <Grid itemxs={12} md={3}>
                <Card value={getByDisplayValue(cases)} label="Total de recuperados" color="#5d78ff" />
            </Grid>
        </Grid>
    )
}

export default memo(Board) 