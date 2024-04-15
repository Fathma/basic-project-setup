export default () => ({
    port: parseInt(process.env.APPLICATION_PORT as string, 10) || 3001,
});