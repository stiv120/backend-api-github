const { popularRepositories } = require('../src/controllers/repositoriesController');

test('Verificar que se obtengan los repositorios.', async () => {
        const req = {};
        const res = {
            render: jest.fn()
        };

        await popularRepositories(req, res);

        expect(res.render).toHaveBeenCalled();
        expect(res.render).toHaveBeenCalledWith('repositories', {
                title: 'Repositorios',
                items: expect.any(Array)
            }
        );
    }
);
