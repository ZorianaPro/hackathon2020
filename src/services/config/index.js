export const isProduction = process.env.NODE_ENV === 'production';
export default {
  api: {
    base: 'https://hackremote.today',
    ideas: '/ideas',
    members: '/members'
  }
};
