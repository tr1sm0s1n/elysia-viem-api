import { Elysia, t } from 'elysia'
import { createClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import {
  getBlockNumber,
  readContract,
  waitForTransactionReceipt,
  writeContract
} from 'viem/actions'
import { hardhat } from 'viem/chains'
import details from '../ignition/deployments/chain-31337/deployed_addresses.json'
import Cert from '../artifacts/contracts/Cert.sol/Cert.json'

const client = createClient({
  chain: hardhat,
  account: privateKeyToAccount(
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
  ),
  transport: http()
})

const app = new Elysia()
  .post(
    '/issue',
    async ({ body }) => {
      const hash = await writeContract(client, {
        address: details['CertModule#Cert'] as `0x${string}`,
        abi: Cert.abi,
        functionName: 'issue',
        args: [body.id, body.name, body.course, body.grade, body.date]
      })
      await waitForTransactionReceipt(client, { hash })
      return {
        hash
      }
    },
    {
      body: t.Object({
        id: t.Number(),
        name: t.String(),
        course: t.String(),
        grade: t.String(),
        date: t.String()
      })
    }
  )
  .get('/fetch/:id', async ({ params: { id } }) => {
    return {
      certificate: await readContract(client, {
        address: details['CertModule#Cert'] as `0x${string}`,
        abi: Cert.abi,
        functionName: 'Certificates',
        args: [id]
      })
    }
  })
  .get('/latest', async () => {
    return { latest_block: await getBlockNumber(client) }
  })
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
