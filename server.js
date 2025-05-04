import express from 'express';
import cors from 'cors';
import cloudscraper from 'cloudscraper';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/recent', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const perPage = req.query.perPage || 24;
        const url = `${process.env.BASE_URL}/api/anime/recent?type=anime&page=${page}&perPage=${perPage}`;

        const json = await cloudscraper({
            method: 'GET',
            uri: url,
            encoding: 'utf8',
            json: true,
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9',
                'dnt': '1',
                'origin': 'https://gojo.wtf',
                'referer': 'https://gojo.wtf/',
                'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            }
        });

        if (!json) {
            return res.status(404).json({ error: 'Recent anime not found' });
        }

        const encoded = Buffer.from(JSON.stringify(json)).toString('base64');
        res.setHeader('Content-Type', 'text/plain'); // not application/json anymore
        res.send(encoded);
    } catch (err) {
        console.error('[Cloudscraper Error]', err.message);
        res.status(500).json({ error: 'Failed to fetch recent anime.' });
    }
});

app.get('/trending', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const perPage = req.query.perPage || 35;
        const url = `${process.env.BASE_URL}/api/anime/search?query=&page=${page}&perPage=${perPage}&sort=trending`;

        const json = await cloudscraper({
            method: 'GET',
            uri: url,
            encoding: 'utf8',
            json: true,
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9',
                'dnt': '1',
                'origin': 'https://gojo.wtf',
                'referer': 'https://gojo.wtf/',
                'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            }
        });

        if (!json) {
            return res.status(404).json({ error: 'Recent anime not found' });
        }

        const encoded = Buffer.from(JSON.stringify(json)).toString('base64');
        res.setHeader('Content-Type', 'text/plain'); // not application/json anymore
        res.send(encoded);
    } catch (err) {
        console.error('[Cloudscraper Error]', err.message);
        res.status(500).json({ error: 'Failed to fetch recent anime.' });
    }
});

app.get('/top', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const perPage = req.query.perPage || 35;
        const season = req.query.season || 'SPRING'; // Default to SUMMER if not provided
        const year = req.query.year || new Date().getFullYear(); // Default to current year if not provided
        const url = `${process.env.BASE_URL}/api/anime/search?query=&page=${page}&perPage=${perPage}&year=${year}&sort=RATING_DESC&season=${season}&format=any&status=any`;

        const json = await cloudscraper({
            method: 'GET',
            uri: url,
            encoding: 'utf8',
            json: true,
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9',
                'dnt': '1',
                'origin': 'https://gojo.wtf',
                'referer': 'https://gojo.wtf/',
                'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            }
        });

        if (!json) {
            return res.status(404).json({ error: 'Recent anime not found' });
        }

        const encoded = Buffer.from(JSON.stringify(json)).toString('base64');
        res.setHeader('Content-Type', 'text/plain'); // not application/json anymore
        res.send(encoded);
    } catch (err) {
        console.error('[Cloudscraper Error]', err.message);
        res.status(500).json({ error: 'Failed to fetch recent anime.' });
    }
});

app.get('/upcoming', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const perPage = req.query.perPage || 35;
        const season = req.query.season || 'SUMMER'; // Default to SUMMER if not provided
        const year = req.query.year || new Date().getFullYear(); // Default to current year if not provided
        const url = `${process.env.BASE_URL}/api/anime/search?query=&page=${page}&perPage=${perPage}&year=${year}&sort=popularity&season=${season}&format=any&status=any`;

        const json = await cloudscraper({
            method: 'GET',
            uri: url,
            encoding: 'utf8',
            json: true,
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9',
                'dnt': '1',
                'origin': 'https://gojo.wtf',
                'referer': 'https://gojo.wtf/',
                'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            }
        });

        if (!json) {
            return res.status(404).json({ error: 'Recent anime not found' });
        }

        const encoded = Buffer.from(JSON.stringify(json)).toString('base64');
        res.setHeader('Content-Type', 'text/plain'); // not application/json anymore
        res.send(encoded);

    } catch (err) {
        console.error('[Cloudscraper Error]', err.message);
        res.status(500).json({ error: 'Failed to fetch recent anime.' });
    }
});

app.get('/popular', async (req, res) => {
    try {
        const page = req.query.page || 1;
        const perPage = req.query.perPage || 35;
        const url = `${process.env.BASE_URL}/api/anime/search?query=&page=${page}&perPage=${perPage}&year=any&sort=popularity&season=any&format=any&status=any`;

        const json = await cloudscraper({
            method: 'GET',
            uri: url,
            encoding: 'utf8',
            json: true,
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9',
                'dnt': '1',
                'origin': 'https://gojo.wtf',
                'referer': 'https://gojo.wtf/',
                'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            }
        });

        if (!json) {
            return res.status(404).json({ error: 'Recent anime not found' });
        }

        const encoded = Buffer.from(JSON.stringify(json)).toString('base64');
        res.setHeader('Content-Type', 'text/plain'); // not application/json anymore
        res.send(encoded);

    } catch (err) {
        console.error('[Cloudscraper Error]', err.message);
        res.status(500).json({ error: 'Failed to fetch recent anime.' });
    }
});

app.get('/episodes/:id', async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ error: 'ID is required' });
        }
        const url = `${process.env.BASE_URL}/api/anime/episodes/${id}`;

        const json = await cloudscraper({
            method: 'GET',
            uri: url,
            encoding: 'utf8',
            json: true,
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9',
                'dnt': '1',
                'origin': 'https://gojo.wtf',
                'referer': 'https://gojo.wtf/',
                'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
            }
        });

        if (!json) {
            return res.status(404).json({ error: 'Recent anime not found' });
        }

        const encoded = Buffer.from(JSON.stringify(json)).toString('base64');
        res.setHeader('Content-Type', 'text/plain'); // not application/json anymore
        res.send(encoded);
    } catch (err) {
        console.error('[Cloudscraper Error]', err.message);
        res.status(500).json({ error: 'Failed to fetch recent anime.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
