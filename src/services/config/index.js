export const isProduction = process.env.NODE_ENV === 'production';

export default {
  api: {
    base: isProduction ? process.env.PUBLIC_URL : 'http://localhost:8082',
    ideas: '/ideas',
    members: '/members'
  }
};
