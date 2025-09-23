import { DurableObject } from 'cloudflare:workers'

export class ExampleDurableObject extends DurableObject {
	savedData: string | undefined

	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env)
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		ctx.blockConcurrencyWhile(async () => {
			const [savedData] = await Promise.all([ctx.storage.get<string>('savedData')])
			this.savedData = savedData
		})
	}

	async saveData(data: string) {
		await this.ctx.storage.put('savedData', data)
		this.savedData = data
	}
}
