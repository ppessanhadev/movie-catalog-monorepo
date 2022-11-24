export const config = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  ghibli: {
    url: process.env.GHIBLI_URL || '',
  },
});
