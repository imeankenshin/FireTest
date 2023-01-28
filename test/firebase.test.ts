import { it, describe, expect } from 'vitest';

describe('.envファイルを読み取れているかを確認。', () => {
	it('Firebaseに接続できています。', async () => {
		expect(process.env.VITE_FIREBASE_APIKEY).toBe(true);
	});
});
