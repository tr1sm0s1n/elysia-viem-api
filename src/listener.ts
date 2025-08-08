import { createPublicClient, parseAbiItem, webSocket } from 'viem'
import { hardhat } from 'viem/chains'
import details from '../ignition/deployments/chain-31337/deployed_addresses.json'

const client = createPublicClient({
	chain: hardhat,
	transport: webSocket('ws://127.0.0.1:8545'),
})

console.log('Listening for events...')

client.watchEvent({
	address: details['CertModule#Cert'] as `0x${string}`,
	event: parseAbiItem(
		'event Issued(string indexed course, uint256 id, string grade)',
	),
	onLogs: (logs) => {
		console.log('===============================================')
		console.log('Course: ', logs[0].args.course)
		console.log('ID: ', logs[0].args.id)
		console.log('Grade: ', logs[0].args.grade)
		console.log('Raw Log: ', logs)
		console.log('===============================================')
	},
})
