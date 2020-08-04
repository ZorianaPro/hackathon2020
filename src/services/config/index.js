export const isProduction = process.env.NODE_ENV === 'production';

export default {
  api: {
    base: `${process.env.PUBLIC_URL}:8082`,
    ideas: '/ideas',
    members: '/members'
  }
};
