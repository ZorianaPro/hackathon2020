export const isProduction = process.env.NODE_ENV === 'production';
export default {
  api: {
    base: isProduction ? process.env.PUBLIC_URL : 'https://localhost:3000',
    ideas: '/ideas',
    members: '/members'
  }
};
