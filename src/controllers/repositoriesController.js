const axios = require('axios');

const popularRepositories = async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/search/repositories', {
                params: {
                    per_page: 10,
                    sort: 'stars',
                    q: 'user:google'
                }
            }
        );
        res.render('repositories', {
                title: 'Repositorios',
                items: response?.data?.items
            }
        );
    } catch (error) {
        res.status(500).send('Error al obtener los repositorios.');
    }
};

module.exports = { popularRepositories };
