import {
  StreamingTextResponse,
  AIStream,
  createStreamDataTransformer,
  type AIStreamCallbacksAndOptions,
} from 'ai';

interface Delta {
  // Streamed output
  output: { token: string };
}

interface ExecutionChunk {
  /**
   * The type of object being streamed.
   */
  object: string;

  /**
   * The delta of the streamed object which contains the delta output.
   */
  delta: Delta;
}

function AiropsStream(res: Response, cb?: AIStreamCallbacksAndOptions): ReadableStream {
  const stream = AIStream(
    res,
    (data: string) => {
      const json: ExecutionChunk = JSON.parse(data);

      if (json.object === 'app.output.agent-response' && json?.delta?.output !== undefined) {
        return json.delta.output.token;
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
  const { messages, session_id } = await req.json();

  // The ID of the app to execute
  const APP_ID = '8f2ec2bc-7423-4207-b1e5-b4689494e3a5';

  // Call the AIROPS API
  const response = await fetch(`https://app.airops.com/public_api/agent_apps/${APP_ID}/server_chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.AIROPS_API_KEY}`,
    },
    body: JSON.stringify({ message: messages[messages.length - 1].content, session_id, stream: true })
  });

  // Convert the response into a friendly text-stream.
  const stream = AiropsStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
