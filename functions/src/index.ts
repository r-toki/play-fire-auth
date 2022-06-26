import * as e from 'cors';
import * as functions from 'firebase-functions';

const cors = e({ origin: true });
const onRequest = (
  fn: (req: functions.https.Request, res: functions.Response) => (err?: any) => any
) => functions.https.onRequest((req, res) => cors(req, res, fn(req, res)));

export const fn1 = onRequest((_, res) => () => {
  res.send({ data: 'onRequest' });
});

export const fn2 = functions.https.onCall(() => {
  return 'onCall';
});
