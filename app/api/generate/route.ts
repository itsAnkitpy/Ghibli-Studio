import { NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  try {
    const output = await replicate.run(
      "aleksa-codes/flux-ghibsky-illustration:a9f94946fa0377091ac0bcfe61b0d62ad9a85224e4b421b677d4747914b908c0",
      {
        input: {
          prompt: "GHIBSKY style, " + prompt,
          aspect_ratio: "9:16",
          output_format: "jpg",
          output_quality: 100
        }
      }
    );

    console.log('Replicate output:', output); // Add this line

    return NextResponse.json({ success: true, imageUrl: output });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate image' }, { status: 500 });
  }
}