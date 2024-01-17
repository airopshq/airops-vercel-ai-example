import {
  StreamingTextResponse,
  AIStream,
  createStreamDataTransformer,
} from 'ai';

const AiropsStream = (res: any, cb?: any) => {
  const stream = AIStream(
    res,
    (data: any) => {
      const json = JSON.parse(data);

      if (json.object === 'app.output.chunk' && json?.delta?.output !== undefined) {
        return json.delta.output;
      }
    },
    {
      ...cb,
    },
  );

  return stream.pipeThrough(
    createStreamDataTransformer(cb?.experimental_streamData),
  );
};

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // The ID of the app to execute
  const APP_ID = '8ab8f759-d65b-4023-bb53-c8ac71de4e65';

  // Call the AIROPS API
  const response = await fetch(`https://app.airops.com/public_api/airops_apps/${APP_ID}/server_execute`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.AIROPS_API_KEY}`,
    },
    body: JSON.stringify({ inputs: { topic: prompt }, stream: true })
  });

  // Convert the response into a friendly text-stream.
  const stream = AiropsStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}