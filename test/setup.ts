import { rm } from 'fs/promises';
import { join } from 'path';

// 全ての異なる仕様ファイルの全てのテストの前に実行される
global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite')); // __dirnameはtestフォルダを指す
  } catch (err) {}
});
