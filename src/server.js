const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
        console.log(`El servidor está corriendo en http://localhost:${PORT}`);
    }
);