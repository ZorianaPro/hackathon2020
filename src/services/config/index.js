export const isProduction = process.env.NODE_ENV === 'production';
export default {
  api: {
    base: process.env.PUBLIC_URL,
    ideas: '/ideas',
    members: '/members'
  }
};
