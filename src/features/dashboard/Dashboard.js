import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryPie } from 'victory';

// Datos simulados
const productosMasVendidos = [
  { nombre: 'Producto A', ventas: 120 },
  { nombre: 'Producto B', ventas: 95 },
  { nombre: 'Producto C', ventas: 80 },
];

const clientesTop = [
  { nombre: 'Juan Pérez', compras: 15 },
  { nombre: 'Ana Gómez', compras: 12 },
  { nombre: 'Carlos Ruiz', compras: 10 },
];

const ventasPorMes = [
  { mes: 'Ene', ventas: 30 },
  { mes: 'Feb', ventas: 45 },
  { mes: 'Mar', ventas: 60 },
  { mes: 'Abr', ventas: 80 },
  { mes: 'May', ventas: 70 },
  { mes: 'Jun', ventas: 90 },
];

const comprasInconclusas = 7;

const Dashboard = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {/* Productos más vendidos */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                3 productos más vendidos
              </Typography>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={20}
                height={250}
              >
                <VictoryAxis
                  tickFormat={productosMasVendidos.map(p => p.nombre)}
                  style={{ tickLabels: { fontSize: 10, angle: 20 } }}
                />
                <VictoryAxis dependentAxis />
                <VictoryBar
                  data={productosMasVendidos}
                  x="nombre"
                  y="ventas"
                  style={{ data: { fill: "#1976d2" } }}
                />
              </VictoryChart>
            </CardContent>
          </Card>
        </Grid>
        {/* Clientes top */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                3 clientes con más compras
              </Typography>
              <VictoryPie
                data={clientesTop}
                x="nombre"
                y="compras"
                colorScale={["#1976d2", "#388e3c", "#fbc02d"]}
                labels={({ datum }) => `${datum.nombre}: ${datum.compras}`}
                height={250}
                style={{
                  labels: { fontSize: 12, fill: "#333" }
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        {/* Ventas por mes */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Ventas por mes
              </Typography>
              <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={20}
                height={250}
              >
                <VictoryAxis
                  tickFormat={ventasPorMes.map(v => v.mes)}
                  style={{ tickLabels: { fontSize: 10 } }}
                />
                <VictoryAxis dependentAxis />
                <VictoryBar
                  data={ventasPorMes}
                  x="mes"
                  y="ventas"
                  style={{ data: { fill: "#388e3c" } }}
                />
              </VictoryChart>
            </CardContent>
          </Card>
        </Grid>
        {/* Compras inconclusas */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Compras inconclusas
              </Typography>
              <Typography variant="h2" color="error" align="center">
                {comprasInconclusas}
              </Typography>
              <Typography align="center" color="textSecondary">
                Posibles compras que no se completaron
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 4 }}>
      </Box>
    </Box>
  );
};

export default Dashboard;