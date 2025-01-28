import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: '1950'
	});

	const car = await client.hGetAll('car#34443434434');

	if (Object.keys(car).length === 0) {
		console.log('Car not found, respond with 404');
		return;
	}
	console.log(car);
};
run();
