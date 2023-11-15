import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Typography, Box, Grid, Card, CardContent, CardHeader, Button } from "@mui/material";

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h3" gutterBottom align="center">
            Pricing
          </Typography>
          <Grid container spacing={3}>
            {tiers.map((tier) => (
              <Grid item key={tier.title} xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    sx={{ mt: 2 }}
                  />
                  <CardContent>
                    <div>
                      <Typography variant="h4" align="center">
                        ${tier.price}
                      </Typography>
                      {tier.description.map((line) => (
                        <Typography key={line} variant="body2" align="center">
                          {line}
                        </Typography>
                      ))}
                    </div>
                    <Button fullWidth variant={tier.buttonVariant} color="primary" sx={{ mt: 2 }}>
                      {tier.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default PricingPage;
