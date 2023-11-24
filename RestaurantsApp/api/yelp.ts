import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 2_KOq-nXYuKs7defBXFz42ggOmtK1WLtFDMXM6S0Vso4tREKrs_lCzciXmsxpFRbFEEtEYNEMFHuCZFlwJtaQnEbhfwmhCh7nEaW_SXQur9h9-jRuyrqbIVPh39aZXYx',
  },
});
