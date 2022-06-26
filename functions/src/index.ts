import * as e from 'cors';
import * as functions from 'firebase-functions';

const functionsAtTokyo = functions.region(
  process.env.NODE_ENV === 'production' ? 'asia-northeast1' : 'us-central1'
);
const cors = e({ origin: true });
const onRequest = (fn: (req: functions.https.Request, res: functions.Response, err?: any) => any) =>
  functionsAtTokyo.https.onRequest((req, res) => cors(req, res, (err) => fn(req, res, err)));

export const fn1 = onRequest((_, res) => {
  res.send({ data: 'onRequest' });
});

export const fn2 = functionsAtTokyo.https.onCall(() => {
  return 'onCall';
});
